package com.haiman.backend.service;

import com.haiman.backend.entity.UserLoginRecord;
import com.haiman.backend.repository.UserLoginRecordRepository;
import com.haiman.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.DayOfWeek;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.temporal.TemporalAdjusters;
import java.util.*;

@Service
public class UserLoginRecordService {
    
    @Autowired
    private UserLoginRecordRepository loginRecordRepository;
    
    @Autowired
    private UserRepository userRepository;
    
    /**
     * 记录用户登录
     */
    @Transactional
    public void recordUserLogin(Long userId, String username) {
        LocalDate today = LocalDate.now();
        LocalDateTime now = LocalDateTime.now();
        
        Optional<UserLoginRecord> existingRecord = loginRecordRepository.findByUserIdAndLoginDate(userId, today);
        
        if (existingRecord.isPresent()) {
            // 更新现有记录
            UserLoginRecord record = existingRecord.get();
            record.setLastLoginTime(now);
            record.setLoginCount(record.getLoginCount() + 1);
            record.setIsCurrentlyOnline(true);
            record.setLastActivityTime(now);
            loginRecordRepository.save(record);
        } else {
            // 创建新记录
            UserLoginRecord record = new UserLoginRecord(userId, username, today, now);
            record.setIsCurrentlyOnline(true);
            loginRecordRepository.save(record);
        }
        
        // 更新用户表的在线状态
        userRepository.findById(userId).ifPresent(user -> {
            user.setIsOnline(true);
            user.setLastLoginTime(now);
            userRepository.save(user);
        });
    }
    
    /**
     * 记录用户登出
     */
    @Transactional
    public void recordUserLogout(Long userId) {
        LocalDate today = LocalDate.now();
        LocalDateTime now = LocalDateTime.now();
        
        Optional<UserLoginRecord> record = loginRecordRepository.findByUserIdAndLoginDate(userId, today);
        if (record.isPresent()) {
            UserLoginRecord loginRecord = record.get();
            loginRecord.setIsCurrentlyOnline(false);
            loginRecord.setLastActivityTime(now);
            
            // 计算在线时长（从最后登录时间到现在）
            if (loginRecord.getLastLoginTime() != null) {
                long duration = java.time.Duration.between(loginRecord.getLastLoginTime(), now).toMinutes();
                loginRecord.setTotalOnlineDuration(loginRecord.getTotalOnlineDuration() + duration);
            }
            
            loginRecordRepository.save(loginRecord);
        }
        
        // 更新用户表的在线状态
        userRepository.findById(userId).ifPresent(user -> {
            user.setIsOnline(false);
            userRepository.save(user);
        });
    }
    
    /**
     * 更新用户活动时间（用于保持在线状态）
     */
    @Transactional
    public void updateUserActivity(Long userId) {
        LocalDate today = LocalDate.now();
        LocalDateTime now = LocalDateTime.now();
        
        Optional<UserLoginRecord> record = loginRecordRepository.findByUserIdAndLoginDate(userId, today);
        if (record.isPresent()) {
            UserLoginRecord loginRecord = record.get();
            loginRecord.setLastActivityTime(now);
            loginRecord.setIsCurrentlyOnline(true);
            loginRecordRepository.save(loginRecord);
        }
    }
    
    /**
     * 获取本周登录统计数据（周一到周五）
     */
    public Map<String, Object> getWeeklyLoginStats() {
        // 获取本周周一和周五的日期
        LocalDate today = LocalDate.now();
        LocalDate monday = today.with(TemporalAdjusters.previousOrSame(DayOfWeek.MONDAY));
        LocalDate friday = today.with(TemporalAdjusters.nextOrSame(DayOfWeek.FRIDAY));
        
        // 确保只获取工作日数据
        if (today.getDayOfWeek().getValue() > 5) { // 如果是周末，获取上周的数据
            monday = monday.minusWeeks(1);
            friday = friday.minusWeeks(1);
        }
        
        List<Object[]> weeklyStats = loginRecordRepository.getWeeklyLoginStats(monday, friday);
        
        // 准备返回数据
        String[] weekDays = {"周一", "周二", "周三", "周四", "周五"};
        List<Integer> onlineUsers = new ArrayList<>(Collections.nCopies(5, 0));
        List<Integer> loginUsers = new ArrayList<>(Collections.nCopies(5, 0));
        List<Integer> offlineUsers = new ArrayList<>(Collections.nCopies(5, 0));
        
        // 获取总用户数
        long totalUsers = userRepository.count();
        
        // 填充数据
        Map<LocalDate, Integer> dateToIndex = new HashMap<>();
        for (int i = 0; i < 5; i++) {
            dateToIndex.put(monday.plusDays(i), i);
        }
        
        for (Object[] stat : weeklyStats) {
            LocalDate date = (LocalDate) stat[0];
            Long onlineCount = (Long) stat[1];
            Long loginCount = (Long) stat[2];
            
            Integer index = dateToIndex.get(date);
            if (index != null) {
                onlineUsers.set(index, onlineCount.intValue());
                loginUsers.set(index, loginCount.intValue());
                offlineUsers.set(index, (int) (totalUsers - onlineCount));
            }
        }
        
        Map<String, Object> result = new HashMap<>();
        result.put("labels", Arrays.asList(weekDays));
        result.put("onlineUsers", onlineUsers);
        result.put("loginUsers", loginUsers);
        result.put("offlineUsers", offlineUsers);
        result.put("weekRange", monday + " 至 " + friday);
        
        return result;
    }
    
    /**
     * 获取指定日期范围的登录统计
     */
    public List<UserLoginRecord> getLoginRecordsByDateRange(LocalDate startDate, LocalDate endDate) {
        return loginRecordRepository.findByLoginDateBetween(startDate, endDate);
    }
    
    /**
     * 获取当前在线用户
     */
    public List<UserLoginRecord> getCurrentlyOnlineUsers() {
        return loginRecordRepository.findCurrentlyOnlineUsers();
    }
    
    /**
     * 清理过期的离线状态（超过30分钟无活动的用户设为离线）
     */
    @Transactional
    public void cleanupInactiveUsers() {
        LocalDateTime thirtyMinutesAgo = LocalDateTime.now().minusMinutes(30);
        
        List<UserLoginRecord> onlineRecords = loginRecordRepository.findCurrentlyOnlineUsers();
        
        for (UserLoginRecord record : onlineRecords) {
            if (record.getLastActivityTime() != null && 
                record.getLastActivityTime().isBefore(thirtyMinutesAgo)) {
                
                // 设置为离线
                record.setIsCurrentlyOnline(false);
                
                // 计算在线时长
                if (record.getLastLoginTime() != null) {
                    long duration = java.time.Duration.between(
                        record.getLastLoginTime(), 
                        record.getLastActivityTime()
                    ).toMinutes();
                    record.setTotalOnlineDuration(record.getTotalOnlineDuration() + duration);
                }
                
                loginRecordRepository.save(record);
                
                // 同时更新用户表
                userRepository.findById(record.getUserId()).ifPresent(user -> {
                    user.setIsOnline(false);
                    userRepository.save(user);
                });
            }
        }
    }
}
