package com.haiman.backend.entity;

import jakarta.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;

/**
 * 用户登录记录实体
 * 用于记录用户每天的登录状态和时间
 */
@Entity
@Table(name = "user_login_records")
public class UserLoginRecord {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(name = "user_id", nullable = false)
    private Long userId;
    
    @Column(name = "username", nullable = false)
    private String username;
    
    @Column(name = "login_date", nullable = false)
    private LocalDate loginDate; // 登录日期（年-月-日）
    
    @Column(name = "first_login_time")
    private LocalDateTime firstLoginTime; // 当天首次登录时间
    
    @Column(name = "last_login_time")
    private LocalDateTime lastLoginTime; // 当天最后登录时间
    
    @Column(name = "login_count", nullable = false)
    private Integer loginCount = 1; // 当天登录次数
    
    @Column(name = "total_online_duration")
    private Long totalOnlineDuration = 0L; // 当天总在线时长（分钟）
    
    @Column(name = "is_currently_online")
    private Boolean isCurrentlyOnline = false; // 当前是否在线
    
    @Column(name = "last_activity_time")
    private LocalDateTime lastActivityTime; // 最后活动时间
    
    // 创建时间和更新时间
    @Column(name = "created_at", nullable = false)
    private LocalDateTime createdAt;
    
    @Column(name = "updated_at")
    private LocalDateTime updatedAt;
    
    // 构造函数
    public UserLoginRecord() {
        this.createdAt = LocalDateTime.now();
        this.updatedAt = LocalDateTime.now();
    }
    
    public UserLoginRecord(Long userId, String username, LocalDate loginDate, LocalDateTime loginTime) {
        this();
        this.userId = userId;
        this.username = username;
        this.loginDate = loginDate;
        this.firstLoginTime = loginTime;
        this.lastLoginTime = loginTime;
        this.lastActivityTime = loginTime;
    }
    
    // Getters and Setters
    public Long getId() {
        return id;
    }
    
    public void setId(Long id) {
        this.id = id;
    }
    
    public Long getUserId() {
        return userId;
    }
    
    public void setUserId(Long userId) {
        this.userId = userId;
    }
    
    public String getUsername() {
        return username;
    }
    
    public void setUsername(String username) {
        this.username = username;
    }
    
    public LocalDate getLoginDate() {
        return loginDate;
    }
    
    public void setLoginDate(LocalDate loginDate) {
        this.loginDate = loginDate;
    }
    
    public LocalDateTime getFirstLoginTime() {
        return firstLoginTime;
    }
    
    public void setFirstLoginTime(LocalDateTime firstLoginTime) {
        this.firstLoginTime = firstLoginTime;
    }
    
    public LocalDateTime getLastLoginTime() {
        return lastLoginTime;
    }
    
    public void setLastLoginTime(LocalDateTime lastLoginTime) {
        this.lastLoginTime = lastLoginTime;
    }
    
    public Integer getLoginCount() {
        return loginCount;
    }
    
    public void setLoginCount(Integer loginCount) {
        this.loginCount = loginCount;
    }
    
    public Long getTotalOnlineDuration() {
        return totalOnlineDuration;
    }
    
    public void setTotalOnlineDuration(Long totalOnlineDuration) {
        this.totalOnlineDuration = totalOnlineDuration;
    }
    
    public Boolean getIsCurrentlyOnline() {
        return isCurrentlyOnline;
    }
    
    public void setIsCurrentlyOnline(Boolean isCurrentlyOnline) {
        this.isCurrentlyOnline = isCurrentlyOnline;
    }
    
    public LocalDateTime getLastActivityTime() {
        return lastActivityTime;
    }
    
    public void setLastActivityTime(LocalDateTime lastActivityTime) {
        this.lastActivityTime = lastActivityTime;
    }
    
    public LocalDateTime getCreatedAt() {
        return createdAt;
    }
    
    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }
    
    public LocalDateTime getUpdatedAt() {
        return updatedAt;
    }
    
    public void setUpdatedAt(LocalDateTime updatedAt) {
        this.updatedAt = updatedAt;
    }
    
    @PreUpdate
    protected void onUpdate() {
        this.updatedAt = LocalDateTime.now();
    }
}
