package com.haiman.backend.controller;

import com.haiman.backend.entity.UserLoginRecord;
import com.haiman.backend.repository.UserLoginRecordRepository;
import com.haiman.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

/**
 * 数据初始化控制器
 * 用于初始化测试数据
 */
@RestController
@RequestMapping("/api/admin/data-init")
@CrossOrigin(originPatterns = {"http://localhost:*", "http://127.0.0.1:*"}, allowCredentials = "true")
public class DataInitController {

    @Autowired
    private UserLoginRecordRepository loginRecordRepository;

    @Autowired
    private UserRepository userRepository;

    /**
     * 初始化登录记录数据
     * 为过去30天生成真实的登录记录
     */
    @PostMapping("/login-records")
    public ResponseEntity<?> initLoginRecords() {
        try {
            // 清除现有记录
            loginRecordRepository.deleteAll();
            
            List<UserLoginRecord> records = new ArrayList<>();
            LocalDate endDate = LocalDate.now();
            LocalDate startDate = endDate.minusDays(30);
            
            // 获取所有用户
            var users = userRepository.findAll();
            if (users.isEmpty()) {
                return ResponseEntity.badRequest().body("没有找到用户数据");
            }
            
            // 为每个用户生成过去30天的登录记录
            for (var user : users) {
                LocalDate currentDate = startDate;
                while (!currentDate.isAfter(endDate)) {
                    // 随机决定是否在这一天登录（70%概率）
                    if (Math.random() < 0.7) {
                        UserLoginRecord record = new UserLoginRecord();
                        record.setUserId(user.getId());
                        record.setUsername(user.getUsername());
                        record.setLoginDate(currentDate);
                        
                        // 设置登录时间（8:00-18:00之间）
                        int hour = 8 + (int)(Math.random() * 10);
                        int minute = (int)(Math.random() * 60);
                        LocalDateTime loginTime = currentDate.atTime(hour, minute);
                        
                        record.setFirstLoginTime(loginTime);
                        record.setLastLoginTime(loginTime.plusHours((int)(Math.random() * 8))); // 最后登录时间延后几小时
                        
                        // 设置登录次数（1-5次）
                        record.setLoginCount(1 + (int)(Math.random() * 5));
                        
                        // 设置在线时长（30-480分钟）
                        record.setTotalOnlineDuration(30L + (long)(Math.random() * 450));
                        
                        record.setIsCurrentlyOnline(currentDate.equals(endDate) && Math.random() < 0.3);
                        record.setLastActivityTime(record.getLastLoginTime());
                        record.setCreatedAt(loginTime);
                        record.setUpdatedAt(LocalDateTime.now());
                        
                        records.add(record);
                    }
                    currentDate = currentDate.plusDays(1);
                }
            }
            
            // 批量保存记录
            loginRecordRepository.saveAll(records);
            
            return ResponseEntity.ok("成功初始化 " + records.size() + " 条登录记录");
            
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("初始化失败: " + e.getMessage());
        }
    }
    
    /**
     * 获取当前登录记录统计
     */
    @GetMapping("/login-records/stats")
    public ResponseEntity<?> getLoginStats() {
        long totalRecords = loginRecordRepository.count();
        LocalDate today = LocalDate.now();
        LocalDate weekStart = today.minusDays(6);
        
        // 获取本周记录数
        long weekRecords = loginRecordRepository.countByLoginDateBetween(weekStart, today);
        
        return ResponseEntity.ok(java.util.Map.of(
            "totalRecords", totalRecords,
            "weekRecords", weekRecords,
            "weekStart", weekStart.toString(),
            "today", today.toString()
        ));
    }
}
