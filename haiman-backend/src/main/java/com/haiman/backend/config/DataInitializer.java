// package com.haiman.backend.config;

// import com.haiman.backend.entity.User;
// import com.haiman.backend.repository.UserRepository;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.boot.CommandLineRunner;
// import org.springframework.security.crypto.password.PasswordEncoder;
// import org.springframework.stereotype.Component;

// @Component
// public class DataInitializer implements CommandLineRunner {
    
//     @Autowired
//     private UserRepository userRepository;
    
//     @Autowired
//     private PasswordEncoder passwordEncoder;
    
//     @Override
//     public void run(String... args) throws Exception {
//         if (userRepository.count() == 0) {
//             // Create admin user
//             User admin = new User();
//             admin.setUsername("admin");
//             admin.setPassword(passwordEncoder.encode("123456"));
//             admin.setFullName("管理员");
//             admin.setEmail("admin@haiman.com");
//             admin.setPhone("13800000001");
//             admin.setRole(1); // 1: 管理员
//             userRepository.save(admin);
            
//             // Create test user
//             User test = new User();
//             test.setUsername("test");
//             test.setPassword(passwordEncoder.encode("123456"));
//             test.setFullName("测试用户");
//             test.setEmail("test@haiman.com");
//             test.setPhone("13800000002");
//             test.setRole(3); // 3: 普通人员
//             userRepository.save(test);
            
//             System.out.println("初始用户创建完成");
//             System.out.println("admin / 123456");
//             System.out.println("test / 123456");
//         }
//     }
// }