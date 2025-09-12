package com.haiman.backend.controller;

import com.haiman.backend.service.UserLoginRecordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

/**
 * 用户登录记录控制器
 */
@RestController
@RequestMapping("/api/login-records")
@CrossOrigin(originPatterns = {"http://localhost:*", "http://127.0.0.1:*"}, allowCredentials = "true")
public class UserLoginRecordController {
    
    @Autowired
    private UserLoginRecordService loginRecordService;
    
    /**
     * 获取本周登录统计数据（周一到周五）
     * 用于仪表盘图表显示
     */
    @GetMapping("/weekly-stats")
    public ResponseEntity<Map<String, Object>> getWeeklyLoginStats() {
        try {
            Map<String, Object> stats = loginRecordService.getWeeklyLoginStats();
            return ResponseEntity.ok(stats);
        } catch (Exception e) {
            return ResponseEntity.status(500).body(Map.of("error", "获取周统计数据失败: " + e.getMessage()));
        }
    }
    
    /**
     * 获取当前在线用户
     */
    @GetMapping("/online-users")
    public ResponseEntity<?> getCurrentlyOnlineUsers() {
        try {
            return ResponseEntity.ok(loginRecordService.getCurrentlyOnlineUsers());
        } catch (Exception e) {
            return ResponseEntity.status(500).body(Map.of("error", "获取在线用户失败: " + e.getMessage()));
        }
    }
    
    /**
     * 手动清理非活跃用户（管理员功能）
     */
    @PostMapping("/cleanup-inactive")
    public ResponseEntity<?> cleanupInactiveUsers() {
        try {
            loginRecordService.cleanupInactiveUsers();
            return ResponseEntity.ok(Map.of("message", "清理非活跃用户完成"));
        } catch (Exception e) {
            return ResponseEntity.status(500).body(Map.of("error", "清理失败: " + e.getMessage()));
        }
    }
    
    /**
     * 记录用户登录（内部调用，通常在认证成功时调用）
     */
    @PostMapping("/record-login")
    public ResponseEntity<?> recordLogin(@RequestParam Long userId, @RequestParam String username) {
        try {
            loginRecordService.recordUserLogin(userId, username);
            return ResponseEntity.ok(Map.of("message", "登录记录成功"));
        } catch (Exception e) {
            return ResponseEntity.status(500).body(Map.of("error", "记录登录失败: " + e.getMessage()));
        }
    }
    
    /**
     * 记录用户登出
     */
    @PostMapping("/record-logout")
    public ResponseEntity<?> recordLogout(@RequestParam Long userId) {
        try {
            loginRecordService.recordUserLogout(userId);
            return ResponseEntity.ok(Map.of("message", "登出记录成功"));
        } catch (Exception e) {
            return ResponseEntity.status(500).body(Map.of("error", "记录登出失败: " + e.getMessage()));
        }
    }
    
    /**
     * 更新用户活动时间（用于保持在线状态）
     */
    @PostMapping("/update-activity")
    public ResponseEntity<?> updateActivity(@RequestParam Long userId) {
        try {
            loginRecordService.updateUserActivity(userId);
            return ResponseEntity.ok(Map.of("message", "活动时间更新成功"));
        } catch (Exception e) {
            return ResponseEntity.status(500).body(Map.of("error", "更新活动时间失败: " + e.getMessage()));
        }
    }
}
