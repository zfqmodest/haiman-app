@echo off
echo ===================================
echo        HaiMan 系统启动程序
echo ===================================
echo.

REM 检查Java是否已安装
java -version >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    echo [错误] 未检测到Java环境，请先安装Java 17或更高版本
    echo 您可以从以下地址下载: https://adoptium.net/
    pause
    exit /b 1
)

REM 检查数据库连接，如有需要修改配置
echo [信息] 准备连接到MySQL数据库...
echo 默认配置:
echo   - 地址: localhost:3306
echo   - 数据库名: haiman
echo   - 用户名: root
echo   - 密码: 13938286218ZFQ
echo.
echo 如需修改数据库配置，请按Ctrl+C中断，并编辑application.properties文件
timeout /t 5

REM 设置端口
set PORT=8081

REM 启动应用
echo [信息] 正在启动HaiMan系统，这可能需要几秒钟...

REM 显示IP地址信息
echo [信息] 网络连接信息:
for /f "tokens=2 delims=:" %%a in ('ipconfig ^| findstr /r /c:"IPv4"') do (
    set ip=%%a
    set ip=!ip:~1!
    echo - 本机访问地址: http://localhost:%PORT%
    echo - 局域网访问地址: http://!ip!:%PORT%
)

start "" http://localhost:%PORT%
echo [信息] 正在启动服务...
java -jar haiman.jar --server.port=%PORT%

echo.
echo 如果应用没有自动打开，请手动访问: http://localhost:%PORT%
echo 如果其他电脑无法访问，请运行 network-check.bat 进行诊断
