@echo off
echo ===================================
echo       HaiMan 应用打包程序
echo ===================================
echo.

REM 检查7-Zip是否已安装
where 7z >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    echo [警告] 未检测到7-Zip，将使用PowerShell创建ZIP文件
    set USE_POWERSHELL=1
) else (
    set USE_POWERSHELL=0
)

echo [信息] 准备打包HaiMan应用...
echo.

REM 创建时间戳
for /f "tokens=2 delims==" %%a in ('wmic OS Get localdatetime /value') do set dt=%%a
set TIMESTAMP=%dt:~0,8%-%dt:~8,6%

REM 设置打包名称
set PACKAGE_NAME=HaiMan-%TIMESTAMP%
set PACKAGE_ZIP=%PACKAGE_NAME%.zip

echo [信息] 创建打包文件: %PACKAGE_ZIP%

REM 使用PowerShell或7-Zip打包
if %USE_POWERSHELL%==1 (
    echo [信息] 使用PowerShell创建ZIP文件...
    powershell -Command "Compress-Archive -Path haiman.jar, application.properties, start.bat, stop.bat, config.bat, README.md -DestinationPath %PACKAGE_ZIP%"
) else (
    echo [信息] 使用7-Zip创建ZIP文件...
    7z a -tzip %PACKAGE_ZIP% haiman.jar application.properties start.bat stop.bat config.bat README.md
)

if %ERRORLEVEL% NEQ 0 (
    echo [错误] 打包过程中发生错误
    pause
    exit /b 1
)

echo.
echo [成功] 打包完成！文件已保存为: %cd%\%PACKAGE_ZIP%
echo.
echo 您可以将此ZIP文件复制到目标服务器并解压运行
pause
