package com.haiman.backend.controller;

import com.haiman.backend.entity.User;
import com.haiman.backend.repository.UserRepository;
import com.haiman.backend.service.UserDetailsServiceImpl;
import com.haiman.backend.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(originPatterns = {"http://localhost:*", "http://127.0.0.1:*"}, allowCredentials = "true")
public class AuthController {
    
    @Autowired
    private AuthenticationManager authenticationManager;
    
    @Autowired
    private UserDetailsServiceImpl userDetailsService;
    
    @Autowired
    private UserRepository userRepository;
    
    @Autowired
    private PasswordEncoder passwordEncoder;
    
    @Autowired
    private JwtUtil jwtUtil;
    
    @PostMapping("/login")
    public ResponseEntity<Map<String, Object>> login(@RequestBody Map<String, String> loginRequest) {
        Map<String, Object> response = new HashMap<>();
        
        try {
            String username = loginRequest.get("username");
            String password = loginRequest.get("password");
            
            Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(username, password)
            );
            
            User user = (User) authentication.getPrincipal();
            
            // 更新用户在线状态和最后登录时间
            user.setIsOnline(true);
            user.setLastLoginTime(LocalDateTime.now());
            userRepository.save(user);
            
            String token = jwtUtil.generateToken(user.getUsername());
            
            response.put("success", true);
            Map<String, Object> data = new HashMap<>();
            data.put("token", token);
            data.put("username", user.getUsername());
            data.put("fullName", user.getFullName());
            data.put("role", user.getRole());
            response.put("data", data);
            
            return ResponseEntity.ok(response);
            
        } catch (AuthenticationException e) {            response.put("success", false);
            response.put("message", "用户名或密码错误");
            return ResponseEntity.badRequest().body(response);
        }
    }
    
    @PostMapping("/logout")
    public ResponseEntity<Map<String, Object>> logout() {
        Map<String, Object> response = new HashMap<>();
        
        try {
            // 获取当前认证的用户
            Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
            if (authentication != null && authentication.getPrincipal() instanceof User) {
                User user = (User) authentication.getPrincipal();
                // 设置用户为离线状态
                user.setIsOnline(false);
                userRepository.save(user);
            }
        } catch (Exception e) {
            // 即使更新状态失败，也不影响登出
            System.err.println("Failed to update user online status during logout: " + e.getMessage());
        }
        
        response.put("success", true);
        response.put("message", "退出登录成功");
        return ResponseEntity.ok(response);
    }
    
    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping("/register/admin")
    public ResponseEntity<Map<String, Object>> registerUser(@RequestBody Map<String, String> userRequest) {
        Map<String, Object> response = new HashMap<>();
        
        try {
            String username = userRequest.get("username");
            String password = userRequest.get("password");
            String fullName = userRequest.get("fullName");
            String email = userRequest.get("email");
            String phone = userRequest.get("phone");
            String roleStr = userRequest.get("role");
            Integer role = roleStr != null ? Integer.parseInt(roleStr) : 3; // 默认为普通人员
            
            // 检查用户名是否已存在
            if (userDetailsService.userExists(username)) {
                response.put("success", false);
                response.put("message", "用户名已存在");
                return ResponseEntity.badRequest().body(response);
            }
            
            // 创建新用户
            User newUser = new User();
            newUser.setUsername(username);
            newUser.setPassword(passwordEncoder.encode(password));
            newUser.setFullName(fullName);
            newUser.setEmail(email);
            newUser.setPhone(phone);
            newUser.setRole(role);
            newUser.setActive(true);
            
            User savedUser = userDetailsService.saveUser(newUser);
            
            response.put("success", true);
            response.put("message", "用户创建成功");
            Map<String, Object> userData = new HashMap<>();
            userData.put("id", savedUser.getId());
            userData.put("username", savedUser.getUsername());
            userData.put("fullName", savedUser.getFullName());
            userData.put("email", savedUser.getEmail());
            userData.put("phone", savedUser.getPhone());
            userData.put("role", savedUser.getRole());
            userData.put("active", savedUser.getActive());
            response.put("data", userData);
            
            return ResponseEntity.ok(response);
            
        } catch (Exception e) {
            response.put("success", false);
            response.put("message", "创建用户失败: " + e.getMessage());
            return ResponseEntity.badRequest().body(response);
        }
    }
    
    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/users")
    public ResponseEntity<Map<String, Object>> getAllUsers() {
        Map<String, Object> response = new HashMap<>();
        
        try {
            List<User> users = userDetailsService.getAllUsers();
            
            // 转换为安全的用户数据格式，不包含密码
            List<Map<String, Object>> userList = users.stream().map(user -> {
                Map<String, Object> userData = new HashMap<>();
                userData.put("id", user.getId());
                userData.put("username", user.getUsername());
                userData.put("fullName", user.getFullName());
                userData.put("email", user.getEmail());
                userData.put("phone", user.getPhone());
                userData.put("role", user.getRole());
                userData.put("active", user.getActive());
                userData.put("isOnline", user.getIsOnline());
                userData.put("lastLoginTime", user.getLastLoginTime());
                return userData;
            }).toList();
            
            response.put("success", true);
            response.put("data", userList);
            response.put("total", userList.size());
            
            return ResponseEntity.ok(response);
            
        } catch (Exception e) {
            response.put("success", false);
            response.put("message", "获取用户列表失败: " + e.getMessage());
            return ResponseEntity.badRequest().body(response);
        }
    }
    
    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("/users/{id}")
    public ResponseEntity<Map<String, Object>> deleteUser(@PathVariable Long id) {
        Map<String, Object> response = new HashMap<>();
        
        // 添加调试日志
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        System.out.println("Current user: " + auth.getName());
        System.out.println("Authorities: " + auth.getAuthorities());
        System.out.println("Attempting to delete user with ID: " + id);
        
        try {
            // 首先检查要删除的用户是否是管理员
            User userToDelete = userDetailsService.findById(id);
            if (userToDelete != null && userToDelete.getRole() == 1) {
                response.put("success", false);
                response.put("message", "不能删除管理员用户");
                return ResponseEntity.badRequest().body(response);
            }
            
            boolean deleted = userDetailsService.deleteUser(id);
            
            if (deleted) {
                response.put("success", true);
                response.put("message", "用户删除成功");
            } else {
                response.put("success", false);
                response.put("message", "用户不存在或删除失败");
                return ResponseEntity.badRequest().body(response);
            }
            
            return ResponseEntity.ok(response);
            
        } catch (Exception e) {
            response.put("success", false);
            response.put("message", "删除用户失败: " + e.getMessage());
            return ResponseEntity.badRequest().body(response);
        }
    }
    
    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping("/users/{id}")
    public ResponseEntity<Map<String, Object>> updateUser(@PathVariable Long id, @RequestBody Map<String, Object> userData) {
        Map<String, Object> response = new HashMap<>();
        
        try {
            // 检查用户是否存在
            User existingUser = userDetailsService.findById(id);
            if (existingUser == null) {
                response.put("success", false);
                response.put("message", "用户不存在");
                return ResponseEntity.badRequest().body(response);
            }
            
            // 更新用户信息
            if (userData.containsKey("fullName")) {
                existingUser.setFullName((String) userData.get("fullName"));
            }
            
            if (userData.containsKey("email")) {
                existingUser.setEmail((String) userData.get("email"));
            }
            
            if (userData.containsKey("phone")) {
                existingUser.setPhone((String) userData.get("phone"));
            }
            
            if (userData.containsKey("role")) {
                existingUser.setRole(Integer.valueOf(userData.get("role").toString()));
            }
            
            if (userData.containsKey("active")) {
                existingUser.setActive((Boolean) userData.get("active"));
            }
            
            // 如果提供了新密码，则更新密码
            if (userData.containsKey("password") && !((String) userData.get("password")).isEmpty()) {
                existingUser.setPassword(passwordEncoder.encode((String) userData.get("password")));
            }
            
            // 保存更新后的用户
            User updatedUser = userDetailsService.saveUser(existingUser);
            
            response.put("success", true);
            response.put("message", "用户更新成功");
            Map<String, Object> userResponse = new HashMap<>();
            userResponse.put("id", updatedUser.getId());
            userResponse.put("username", updatedUser.getUsername());
            userResponse.put("fullName", updatedUser.getFullName());
            userResponse.put("email", updatedUser.getEmail());
            userResponse.put("phone", updatedUser.getPhone());
            userResponse.put("role", updatedUser.getRole());
            userResponse.put("active", updatedUser.getActive());
            response.put("data", userResponse);
            
            return ResponseEntity.ok(response);
            
        } catch (Exception e) {
            response.put("success", false);
            response.put("message", "更新用户失败: " + e.getMessage());
            return ResponseEntity.badRequest().body(response);
        }
    }
}