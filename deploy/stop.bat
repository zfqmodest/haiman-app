@echo off
echo ===================================
echo        HaiMan 系统停止程序
echo ===================================
echo.

REM 查找并终止Java进程
echo [信息] 正在查找HaiMan应用进程...
for /f "tokens=1" %%i in ('wmic process where "commandline like '%%haiman.jar%%'" get processid 2^>nul ^| findstr [0-9]') do (
    echo [信息] 正在停止进程ID: %%i
    taskkill /F /PID %%i
)

echo.
echo [信息] HaiMan系统已停止运行
pause
