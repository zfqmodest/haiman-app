@echo off
echo ===================================
echo    HaiMan 网络连接检测工具
echo ===================================
echo.

REM 获取本机IP地址
echo 正在获取本机网络信息...
ipconfig | findstr IPv4
echo.

REM 检测后端服务是否正常启动
set PORT=8081
echo 检查后端服务状态 (端口 %PORT%)...
netstat -ano | findstr :%PORT%
if %ERRORLEVEL% EQU 0 (
    echo [成功] 后端服务已正常启动在端口 %PORT%
) else (
    echo [失败] 后端服务未在端口 %PORT% 启动
)
echo.

REM 检测防火墙状态
echo 检查Windows防火墙状态...
netsh advfirewall show allprofiles state
echo.

REM 提供对外访问信息
echo 其他电脑访问本系统的信息:
echo -------------------------------
for /f "tokens=2 delims=:" %%a in ('ipconfig ^| findstr /r /c:"IPv4"') do (
    set ip=%%a
    set ip=!ip:~1!
    echo 1. 请确保其他电脑能够访问此IP: !ip!:%PORT%
    echo 2. 请在浏览器中访问: http://!ip!:%PORT%
)
echo.

REM 提供常见问题解决方案
echo 常见问题解决方法:
echo -------------------------------
echo 1. 确保启用了 Java 的网络访问权限
echo 2. 检查Windows防火墙是否阻止了Java程序
echo 3. 确保数据库服务能够正常访问
echo 4. 如使用内网穿透工具,请正确配置端口转发
echo.

pause
