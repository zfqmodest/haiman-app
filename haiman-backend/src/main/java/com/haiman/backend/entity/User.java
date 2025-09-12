package com.haiman.backend.entity;

import jakarta.persistence.*;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.Collections;

@Entity
@Table(name = "haiman_users")
public class User implements UserDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(unique = true, nullable = false)
    private String username;
    
    @Column(nullable = false)
    private String password;
    
    @Column(nullable = false)
    private String fullName;
    
    @Column
    private String email;
    
    @Column
    private String phone;
    
    @Column
    private Integer role = 3; // 默认为普通人员 (1: 管理员, 2: 测试人员, 3: 普通人员)
    
    @Column
    private Boolean active = true;
    
    @Column(name = "is_online")
    private Boolean isOnline = false; // 在线状态，默认离线
    
    @Column(name = "last_login_time")
    private java.time.LocalDateTime lastLoginTime; // 最后登录时间

    // Constructors
    public User() {}
    
    public User(String username, String password, String fullName, String email, String phone, Integer role) {
        this.username = username;
        this.password = password;
        this.fullName = fullName;
        this.email = email;
        this.phone = phone;
        this.role = role;
    }

    // UserDetails implementation
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        String roleName = getRoleString(role);
        return Collections.singletonList(new SimpleGrantedAuthority("ROLE_" + roleName));
    }
    
    // 辅助方法：将数字角色转换为字符串用于Spring Security
    private String getRoleString(Integer role) {
        switch (role) {
            case 1: return "ADMIN";
            case 2: return "TESTER"; 
            case 3: return "USER";
            default: return "USER";
        }
    }

    @Override    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return username;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return active;
    }

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public Integer getRole() {
        return role;
    }

    public void setRole(Integer role) {
        this.role = role;
    }

    public Boolean getActive() {
        return active;
    }

    public void setActive(Boolean active) {
        this.active = active;
    }

    public Boolean getIsOnline() {
        return isOnline;
    }

    public void setIsOnline(Boolean isOnline) {
        this.isOnline = isOnline;
    }

    public java.time.LocalDateTime getLastLoginTime() {
        return lastLoginTime;
    }

    public void setLastLoginTime(java.time.LocalDateTime lastLoginTime) {
        this.lastLoginTime = lastLoginTime;
    }
}