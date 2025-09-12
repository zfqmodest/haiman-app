package com.haiman.backend.repository;

import com.haiman.backend.entity.UserLoginRecord;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Repository
public interface UserLoginRecordRepository extends JpaRepository<UserLoginRecord, Long> {
    
    /**
     * 根据用户ID和登录日期查找记录
     */
    Optional<UserLoginRecord> findByUserIdAndLoginDate(Long userId, LocalDate loginDate);
    
    /**
     * 获取指定日期范围内的所有登录记录
     */
    @Query("SELECT r FROM UserLoginRecord r WHERE r.loginDate BETWEEN :startDate AND :endDate ORDER BY r.loginDate")
    List<UserLoginRecord> findByLoginDateBetween(@Param("startDate") LocalDate startDate, @Param("endDate") LocalDate endDate);
    
    /**
     * 获取指定日期的所有登录记录
     */
    List<UserLoginRecord> findByLoginDate(LocalDate loginDate);
    
    /**
     * 获取当前在线用户记录
     */
    @Query("SELECT r FROM UserLoginRecord r WHERE r.isCurrentlyOnline = true")
    List<UserLoginRecord> findCurrentlyOnlineUsers();
    
    /**
     * 获取指定用户最近的登录记录
     */
    @Query("SELECT r FROM UserLoginRecord r WHERE r.userId = :userId ORDER BY r.loginDate DESC LIMIT :limit")
    List<UserLoginRecord> findRecentLoginsByUserId(@Param("userId") Long userId, @Param("limit") int limit);
    
    /**
     * 统计指定日期范围内每天的登录用户数
     */
    @Query("SELECT r.loginDate, COUNT(DISTINCT r.userId) FROM UserLoginRecord r " +
           "WHERE r.loginDate BETWEEN :startDate AND :endDate " +
           "GROUP BY r.loginDate ORDER BY r.loginDate")
    List<Object[]> countDailyLoginUsers(@Param("startDate") LocalDate startDate, @Param("endDate") LocalDate endDate);
    
    /**
     * 统计指定日期范围内每天的在线用户数（根据当天是否有登录记录）
     */
    @Query("SELECT r.loginDate, " +
           "COUNT(DISTINCT CASE WHEN r.isCurrentlyOnline = true THEN r.userId END) as onlineUsers, " +
           "COUNT(DISTINCT r.userId) as totalLoginUsers " +
           "FROM UserLoginRecord r " +
           "WHERE r.loginDate BETWEEN :startDate AND :endDate " +
           "GROUP BY r.loginDate ORDER BY r.loginDate")
    List<Object[]> countDailyOnlineUsers(@Param("startDate") LocalDate startDate, @Param("endDate") LocalDate endDate);
    
    /**
     * 获取本周（周一到周五）的登录统计数据
     */
    @Query("SELECT r.loginDate, " +
           "COUNT(DISTINCT CASE WHEN r.isCurrentlyOnline = true THEN r.userId END) as onlineUsers, " +
           "COUNT(DISTINCT r.userId) as loginUsers " +
           "FROM UserLoginRecord r " +
           "WHERE r.loginDate BETWEEN :monday AND :friday " +
           "GROUP BY r.loginDate ORDER BY r.loginDate")
    List<Object[]> getWeeklyLoginStats(@Param("monday") LocalDate monday, @Param("friday") LocalDate friday);
    
    /**
     * 统计指定日期范围内的记录数
     */
    long countByLoginDateBetween(LocalDate startDate, LocalDate endDate);
}
