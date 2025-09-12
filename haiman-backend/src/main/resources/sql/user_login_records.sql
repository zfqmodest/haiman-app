-- 用户登录记录表
-- 用于追踪用户每天的登录状态、在线时长等统计信息

CREATE TABLE user_login_records (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    user_id BIGINT NOT NULL COMMENT '用户ID',
    username VARCHAR(50) NOT NULL COMMENT '用户名',
    login_date DATE NOT NULL COMMENT '登录日期',
    first_login_time DATETIME COMMENT '当天首次登录时间',
    last_login_time DATETIME COMMENT '当天最后登录时间',
    login_count INT NOT NULL DEFAULT 1 COMMENT '当天登录次数',
    total_online_duration BIGINT NOT NULL DEFAULT 0 COMMENT '当天总在线时长(分钟)',
    is_currently_online BOOLEAN NOT NULL DEFAULT FALSE COMMENT '当前是否在线',
    last_activity_time DATETIME COMMENT '最后活动时间',
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '记录创建时间',
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '记录更新时间',
    
    -- 索引
    INDEX idx_user_date (user_id, login_date),
    INDEX idx_login_date (login_date),
    INDEX idx_currently_online (is_currently_online),
    INDEX idx_last_activity (last_activity_time),
    
    -- 外键约束
    CONSTRAINT fk_user_login_records_user_id 
        FOREIGN KEY (user_id) 
        REFERENCES haiman_users(id) 
        ON DELETE CASCADE ON UPDATE CASCADE,
    
    -- 唯一约束：每个用户每天只能有一条记录
    UNIQUE KEY uk_user_date (user_id, login_date)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='用户登录记录表';

-- 示例数据插入（可选，用于测试）
-- 注意：这里需要确保 user_id 在 haiman_users 表中存在

-- 插入本周的示例数据（假设用户ID 1-5 存在）
INSERT INTO user_login_records (user_id, username, login_date, first_login_time, last_login_time, login_count, total_online_duration, is_currently_online, last_activity_time) VALUES
-- 周一数据
(1, 'admin', CURDATE() - INTERVAL (WEEKDAY(CURDATE())) DAY, CONCAT(CURDATE() - INTERVAL (WEEKDAY(CURDATE())) DAY, ' 08:30:00'), CONCAT(CURDATE() - INTERVAL (WEEKDAY(CURDATE())) DAY, ' 17:45:00'), 2, 480, false, CONCAT(CURDATE() - INTERVAL (WEEKDAY(CURDATE())) DAY, ' 17:45:00')),
(2, 'tester1', CURDATE() - INTERVAL (WEEKDAY(CURDATE())) DAY, CONCAT(CURDATE() - INTERVAL (WEEKDAY(CURDATE())) DAY, ' 09:00:00'), CONCAT(CURDATE() - INTERVAL (WEEKDAY(CURDATE())) DAY, ' 18:00:00'), 1, 450, false, CONCAT(CURDATE() - INTERVAL (WEEKDAY(CURDATE())) DAY, ' 18:00:00')),
(3, 'user1', CURDATE() - INTERVAL (WEEKDAY(CURDATE())) DAY, CONCAT(CURDATE() - INTERVAL (WEEKDAY(CURDATE())) DAY, ' 08:45:00'), CONCAT(CURDATE() - INTERVAL (WEEKDAY(CURDATE())) DAY, ' 17:30:00'), 1, 405, false, CONCAT(CURDATE() - INTERVAL (WEEKDAY(CURDATE())) DAY, ' 17:30:00')),

-- 周二数据
(1, 'admin', CURDATE() - INTERVAL (WEEKDAY(CURDATE()) - 1) DAY, CONCAT(CURDATE() - INTERVAL (WEEKDAY(CURDATE()) - 1) DAY, ' 08:15:00'), CONCAT(CURDATE() - INTERVAL (WEEKDAY(CURDATE()) - 1) DAY, ' 18:30:00'), 1, 495, false, CONCAT(CURDATE() - INTERVAL (WEEKDAY(CURDATE()) - 1) DAY, ' 18:30:00')),
(2, 'tester1', CURDATE() - INTERVAL (WEEKDAY(CURDATE()) - 1) DAY, CONCAT(CURDATE() - INTERVAL (WEEKDAY(CURDATE()) - 1) DAY, ' 09:30:00'), CONCAT(CURDATE() - INTERVAL (WEEKDAY(CURDATE()) - 1) DAY, ' 17:45:00'), 2, 420, false, CONCAT(CURDATE() - INTERVAL (WEEKDAY(CURDATE()) - 1) DAY, ' 17:45:00')),
(4, 'user2', CURDATE() - INTERVAL (WEEKDAY(CURDATE()) - 1) DAY, CONCAT(CURDATE() - INTERVAL (WEEKDAY(CURDATE()) - 1) DAY, ' 10:00:00'), CONCAT(CURDATE() - INTERVAL (WEEKDAY(CURDATE()) - 1) DAY, ' 16:30:00'), 1, 390, false, CONCAT(CURDATE() - INTERVAL (WEEKDAY(CURDATE()) - 1) DAY, ' 16:30:00')),

-- 周三数据
(1, 'admin', CURDATE() - INTERVAL (WEEKDAY(CURDATE()) - 2) DAY, CONCAT(CURDATE() - INTERVAL (WEEKDAY(CURDATE()) - 2) DAY, ' 08:00:00'), CONCAT(CURDATE() - INTERVAL (WEEKDAY(CURDATE()) - 2) DAY, ' 19:00:00'), 1, 540, false, CONCAT(CURDATE() - INTERVAL (WEEKDAY(CURDATE()) - 2) DAY, ' 19:00:00')),
(2, 'tester1', CURDATE() - INTERVAL (WEEKDAY(CURDATE()) - 2) DAY, CONCAT(CURDATE() - INTERVAL (WEEKDAY(CURDATE()) - 2) DAY, ' 08:45:00'), CONCAT(CURDATE() - INTERVAL (WEEKDAY(CURDATE()) - 2) DAY, ' 17:15:00'), 1, 450, false, CONCAT(CURDATE() - INTERVAL (WEEKDAY(CURDATE()) - 2) DAY, ' 17:15:00')),
(3, 'user1', CURDATE() - INTERVAL (WEEKDAY(CURDATE()) - 2) DAY, CONCAT(CURDATE() - INTERVAL (WEEKDAY(CURDATE()) - 2) DAY, ' 09:15:00'), CONCAT(CURDATE() - INTERVAL (WEEKDAY(CURDATE()) - 2) DAY, ' 18:00:00'), 1, 465, false, CONCAT(CURDATE() - INTERVAL (WEEKDAY(CURDATE()) - 2) DAY, ' 18:00:00')),
(5, 'user3', CURDATE() - INTERVAL (WEEKDAY(CURDATE()) - 2) DAY, CONCAT(CURDATE() - INTERVAL (WEEKDAY(CURDATE()) - 2) DAY, ' 10:30:00'), CONCAT(CURDATE() - INTERVAL (WEEKDAY(CURDATE()) - 2) DAY, ' 15:45:00'), 1, 315, false, CONCAT(CURDATE() - INTERVAL (WEEKDAY(CURDATE()) - 2) DAY, ' 15:45:00')),

-- 周四数据
(1, 'admin', CURDATE() - INTERVAL (WEEKDAY(CURDATE()) - 3) DAY, CONCAT(CURDATE() - INTERVAL (WEEKDAY(CURDATE()) - 3) DAY, ' 08:30:00'), CONCAT(CURDATE() - INTERVAL (WEEKDAY(CURDATE()) - 3) DAY, ' 18:45:00'), 2, 510, false, CONCAT(CURDATE() - INTERVAL (WEEKDAY(CURDATE()) - 3) DAY, ' 18:45:00')),
(2, 'tester1', CURDATE() - INTERVAL (WEEKDAY(CURDATE()) - 3) DAY, CONCAT(CURDATE() - INTERVAL (WEEKDAY(CURDATE()) - 3) DAY, ' 09:00:00'), CONCAT(CURDATE() - INTERVAL (WEEKDAY(CURDATE()) - 3) DAY, ' 17:30:00'), 1, 420, false, CONCAT(CURDATE() - INTERVAL (WEEKDAY(CURDATE()) - 3) DAY, ' 17:30:00')),
(4, 'user2', CURDATE() - INTERVAL (WEEKDAY(CURDATE()) - 3) DAY, CONCAT(CURDATE() - INTERVAL (WEEKDAY(CURDATE()) - 3) DAY, ' 08:15:00'), CONCAT(CURDATE() - INTERVAL (WEEKDAY(CURDATE()) - 3) DAY, ' 16:45:00'), 1, 450, false, CONCAT(CURDATE() - INTERVAL (WEEKDAY(CURDATE()) - 3) DAY, ' 16:45:00')),

-- 周五数据
(1, 'admin', CURDATE() - INTERVAL (WEEKDAY(CURDATE()) - 4) DAY, CONCAT(CURDATE() - INTERVAL (WEEKDAY(CURDATE()) - 4) DAY, ' 08:45:00'), CONCAT(CURDATE() - INTERVAL (WEEKDAY(CURDATE()) - 4) DAY, ' 17:00:00'), 1, 435, false, CONCAT(CURDATE() - INTERVAL (WEEKDAY(CURDATE()) - 4) DAY, ' 17:00:00')),
(2, 'tester1', CURDATE() - INTERVAL (WEEKDAY(CURDATE()) - 4) DAY, CONCAT(CURDATE() - INTERVAL (WEEKDAY(CURDATE()) - 4) DAY, ' 09:30:00'), CONCAT(CURDATE() - INTERVAL (WEEKDAY(CURDATE()) - 4) DAY, ' 16:30:00'), 1, 360, false, CONCAT(CURDATE() - INTERVAL (WEEKDAY(CURDATE()) - 4) DAY, ' 16:30:00')),
(3, 'user1', CURDATE() - INTERVAL (WEEKDAY(CURDATE()) - 4) DAY, CONCAT(CURDATE() - INTERVAL (WEEKDAY(CURDATE()) - 4) DAY, ' 08:00:00'), CONCAT(CURDATE() - INTERVAL (WEEKDAY(CURDATE()) - 4) DAY, ' 17:45:00'), 1, 525, false, CONCAT(CURDATE() - INTERVAL (WEEKDAY(CURDATE()) - 4) DAY, ' 17:45:00')),
(4, 'user2', CURDATE() - INTERVAL (WEEKDAY(CURDATE()) - 4) DAY, CONCAT(CURDATE() - INTERVAL (WEEKDAY(CURDATE()) - 4) DAY, ' 10:00:00'), CONCAT(CURDATE() - INTERVAL (WEEKDAY(CURDATE()) - 4) DAY, ' 15:30:00'), 1, 330, false, CONCAT(CURDATE() - INTERVAL (WEEKDAY(CURDATE()) - 4) DAY, ' 15:30:00')),
(5, 'user3', CURDATE() - INTERVAL (WEEKDAY(CURDATE()) - 4) DAY, CONCAT(CURDATE() - INTERVAL (WEEKDAY(CURDATE()) - 4) DAY, ' 09:15:00'), CONCAT(CURDATE() - INTERVAL (WEEKDAY(CURDATE()) - 4) DAY, ' 16:45:00'), 1, 390, false, CONCAT(CURDATE() - INTERVAL (WEEKDAY(CURDATE()) - 4) DAY, ' 16:45:00'));

-- 如果今天是工作日，插入一些当天在线的用户
INSERT INTO user_login_records (user_id, username, login_date, first_login_time, last_login_time, login_count, total_online_duration, is_currently_online, last_activity_time)
SELECT 1, 'admin', CURDATE(), CONCAT(CURDATE(), ' 08:30:00'), NOW(), 1, 0, true, NOW()
WHERE WEEKDAY(CURDATE()) < 5  -- 0=周一, 4=周五
ON DUPLICATE KEY UPDATE
    last_login_time = NOW(),
    login_count = login_count + 1,
    is_currently_online = true,
    last_activity_time = NOW();

INSERT INTO user_login_records (user_id, username, login_date, first_login_time, last_login_time, login_count, total_online_duration, is_currently_online, last_activity_time)
SELECT 2, 'tester1', CURDATE(), CONCAT(CURDATE(), ' 09:00:00'), NOW(), 1, 0, true, NOW()
WHERE WEEKDAY(CURDATE()) < 5
ON DUPLICATE KEY UPDATE
    last_login_time = NOW(),
    login_count = login_count + 1,
    is_currently_online = true,
    last_activity_time = NOW();
