# 用户登录记录功能集成指南

## 功能概述

此功能为海曼应用增加了完整的用户登录记录追踪系统，可以：

- 记录每个用户每天的登录活动
- 追踪用户在线状态和在线时长
- 提供每周登录统计图表（周一到周五）
- 实时监控当前在线用户
- 自动清理非活跃用户状态

## 数据库变更

### 1. 创建登录记录表

执行以下SQL文件来创建必要的数据库表：

```sql
-- 位置: haiman-backend/src/main/resources/sql/user_login_records.sql
```

这个SQL文件会：

- 创建 `user_login_records` 表
- 添加必要的索引和外键约束
- 插入示例测试数据

### 2. 表结构说明

```sql
user_login_records (
    id                    -- 主键
    user_id              -- 用户ID（外键关联 haiman_users.id）
    username             -- 用户名
    login_date           -- 登录日期
    first_login_time     -- 当天首次登录时间
    last_login_time      -- 当天最后登录时间
    login_count          -- 当天登录次数
    total_online_duration -- 当天总在线时长（分钟）
    is_currently_online   -- 当前是否在线
    last_activity_time    -- 最后活动时间
    created_at           -- 记录创建时间
    updated_at           -- 记录更新时间
)
```

## 后端代码集成

### 1. 新增的文件

- `UserLoginRecord.java` - 登录记录实体类
- `UserLoginRecordRepository.java` - 数据访问层
- `UserLoginRecordService.java` - 业务逻辑层
- `UserLoginRecordController.java` - API控制器

### 2. 需要集成到现有登录流程

在用户登录成功后调用登录记录功能：

```java
// 在认证成功的地方添加
@Autowired
private UserLoginRecordService loginRecordService;

// 登录成功后调用
loginRecordService.recordUserLogin(user.getId(), user.getUsername());
```

在用户登出时调用：

```java
// 登出时调用
loginRecordService.recordUserLogout(userId);
```

### 3. API接口

新增的REST API接口：

- `GET /api/login-records/weekly-stats` - 获取本周登录统计
- `GET /api/login-records/online-users` - 获取当前在线用户
- `POST /api/login-records/record-login` - 记录用户登录
- `POST /api/login-records/record-logout` - 记录用户登出
- `POST /api/login-records/update-activity` - 更新用户活动时间
- `POST /api/login-records/cleanup-inactive` - 清理非活跃用户

## 前端代码集成

### 1. API客户端更新

在 `src/services/api.ts` 中添加了 `loginRecordApi` 对象，提供：

- `getWeeklyStats()` - 获取周统计数据
- `getCurrentOnlineUsers()` - 获取在线用户
- `recordLogout(userId)` - 记录登出
- `updateActivity(userId)` - 更新活动时间

### 2. Dashboard组件更新

`src/pages/admin/dashboard/Dashboard.vue` 现在：

- 从真实API获取周登录统计数据
- 如果API调用失败，会回退到模拟数据
- 提供完整的登录活动可视化

## 部署和配置

### 1. 数据库初始化

```bash
# 1. 连接到MySQL数据库
mysql -u username -p database_name

# 2. 执行SQL脚本
source haiman-backend/src/main/resources/sql/user_login_records.sql
```

### 2. 应用配置

无需额外配置，新功能会自动通过Spring Boot的自动配置生效。

### 3. 定时任务（可选）

可以添加定时任务自动清理非活跃用户：

```java
@Scheduled(fixedRate = 300000) // 每5分钟执行一次
public void cleanupInactiveUsers() {
    loginRecordService.cleanupInactiveUsers();
}
```

## 使用示例

### 前端调用示例

```typescript
// 获取周统计数据
const weeklyStats = await loginRecordApi.getWeeklyStats()
console.log(weeklyStats)
// 输出: {
//   labels: ["周一", "周二", "周三", "周四", "周五"],
//   onlineUsers: [3, 4, 5, 3, 4],
//   loginUsers: [3, 4, 5, 3, 4],
//   offlineUsers: [2, 1, 0, 2, 1]
// }

// 获取在线用户
const onlineUsers = await loginRecordApi.getCurrentOnlineUsers()
```

### 后端调用示例

```java
@Autowired
private UserLoginRecordService loginRecordService;

// 记录用户登录
loginRecordService.recordUserLogin(1L, "admin");

// 获取周统计
Map<String, Object> stats = loginRecordService.getWeeklyLoginStats();
```

## 数据展示效果

仪表盘会显示：

1. **周一到周五登录趋势图**

   - 在线用户数（绿色线条）
   - 登录用户数（蓝色线条）
   - 离线用户数（红色线条）

2. **实时数据更新**
   - 用户登录/登出时自动更新统计
   - 显示每天的具体数值
   - 支持工具提示和交互

## 注意事项

1. **数据完整性**：确保现有用户表 `haiman_users` 中有足够的测试用户
2. **时区处理**：所有时间都使用服务器本地时区
3. **性能考虑**：大量用户时建议添加数据分页和缓存
4. **备用机制**：API调用失败时自动使用模拟数据保证功能可用

## 故障排除

1. **图表不显示数据**

   - 检查API接口是否正常响应
   - 查看浏览器控制台是否有错误信息
   - 确认数据库表已正确创建

2. **API调用失败**

   - 检查后端服务是否启动
   - 确认CORS配置正确
   - 验证用户token是否有效

3. **数据不准确**
   - 检查时区设置
   - 确认定时清理任务是否正常工作
   - 验证登录/登出逻辑是否正确调用

## 扩展功能建议

1. **用户活动热力图**：显示用户一天中的活跃时段
2. **部门统计**：按部门分组的登录统计
3. **长期趋势**：月度、季度登录趋势分析
4. **异常检测**：识别异常登录模式
5. **报表导出**：将统计数据导出为Excel或PDF
