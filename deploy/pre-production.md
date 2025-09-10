# HaiMan 应用部署说明

## 部署文件说明

部署目录中包含以下文件：

1. **haiman.jar** - 应用主程序，包含前后端集成的可执行文件
2. **application.properties** - 应用配置文件，包含数据库连接等设置
3. **start.bat** - 启动脚本，用于启动应用
4. **stop.bat** - 停止脚本，用于停止应用
5. **config.bat** - 配置修改脚本，用于修改数据库连接等设置
6. **package.bat** - 打包脚本，用于生成可分发的ZIP包
7. **README.md** - 用户使用说明

## 部署步骤

### 本地开发测试部署

1. 确保已安装JDK 17或更高版本
2. 确保MySQL服务已启动并创建了`haiman`数据库
3. 使用`config.bat`修改数据库连接等配置
4. 运行`start.bat`启动应用
5. 浏览器访问 http://localhost:8081

### 生产环境部署

1. 运行`package.bat`生成可分发的ZIP包
2. 将ZIP包复制到目标服务器并解压
3. 使用`config.bat`修改数据库连接等配置
4. 运行`start.bat`启动应用
5. 确保防火墙已开放对应端口(默认8081)

## 注意事项

1. 应用默认使用`haiman`数据库，请确保该数据库存在或应用有权限创建
2. 数据库默认用户名为`root`，密码为`13938286218ZFQ`，请使用`config.bat`修改
3. 应用首次启动时会自动创建所需的表结构
4. 应用使用内嵌的Tomcat服务器，无需额外安装Web服务器
5. 日志文件保存在运行目录下的`haiman.log`文件中

## 技术架构

- 后端: Spring Boot 3.x、Spring Security、Spring Data JPA
- 前端: Vue.js、Vuestic UI
- 数据库: MySQL
- 构建工具: Maven、npm/Vite
- 部署方式: 前后端集成的可执行JAR

## 故障排除

如遇问题，请查看`haiman.log`日志文件或联系技术支持。
