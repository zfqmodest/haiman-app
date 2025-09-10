@echo off
echo ===================================
echo    HaiMan 前端API配置工具
echo ===================================
echo.

set ENV_FILE=.env.development.local

REM 获取本机IP地址
for /f "tokens=2 delims=:" %%a in ('ipconfig ^| findstr /r /c:"IPv4"') do (
    set ip=%%a
    set ip=!ip:~1!
    goto :found_ip
)

:found_ip
echo 检测到本机IP地址: %ip%
echo.

REM 提示用户输入后端地址
echo 请选择配置方式:
echo 1. 使用本机IP (http://%ip%:8081/api)
echo 2. 使用localhost (http://localhost:8081/api)
echo 3. 手动输入完整API地址
echo.

set /p CHOICE=请输入选项(1-3): 

if "%CHOICE%"=="1" (
    set API_URL=http://%ip%:8081/api
) else if "%CHOICE%"=="2" (
    set API_URL=http://localhost:8081/api
) else if "%CHOICE%"=="3" (
    set /p API_URL=请输入完整的API地址(例如 http://192.168.1.100:8081/api): 
) else (
    echo 无效选择，使用默认地址 http://localhost:8081/api
    set API_URL=http://localhost:8081/api
)

echo.
echo 将使用API地址: %API_URL%

REM 创建或更新配置文件
echo VITE_API_BASE_URL=%API_URL%> %ENV_FILE%
echo 配置已保存到 %ENV_FILE%
echo.
echo 请重新启动前端应用以应用更改
echo.

pause
