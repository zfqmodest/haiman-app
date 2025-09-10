@echo off
echo ===================================
echo     HaiMan 数据库配置修改程序
echo ===================================
echo.

set CONFIG_FILE=application.properties
set TEMP_FILE=application.properties.tmp

echo 当前数据库配置:
type %CONFIG_FILE% | findstr "spring.datasource"
echo.

:MENU
echo 请选择要修改的选项:
echo 1. 修改数据库连接地址
echo 2. 修改数据库名称
echo 3. 修改用户名
echo 4. 修改密码
echo 5. 修改服务器端口
echo 6. 检测网络连接
echo 7. 查看当前IP
echo 8. 配置允许远程访问
echo 0. 退出
echo.

set /p CHOICE=请输入选项数字: 

if "%CHOICE%"=="1" goto DB_HOST
if "%CHOICE%"=="2" goto DB_NAME
if "%CHOICE%"=="3" goto DB_USER
if "%CHOICE%"=="4" goto DB_PASS
if "%CHOICE%"=="5" goto SERVER_PORT
if "%CHOICE%"=="6" goto NETWORK_CHECK
if "%CHOICE%"=="7" goto SHOW_IP
if "%CHOICE%"=="8" goto REMOTE_ACCESS
if "%CHOICE%"=="0" goto EXIT

echo 无效选项，请重新选择
goto MENU

:DB_HOST
set /p DB_HOST=请输入数据库服务器地址和端口(默认127.0.0.1:3306): 
if "%DB_HOST%"=="" set DB_HOST=127.0.0.1:3306
powershell -Command "(Get-Content %CONFIG_FILE%) -replace 'jdbc:mysql://[^/]+/', 'jdbc:mysql://%DB_HOST%/' | Set-Content %TEMP_FILE%"
move /y %TEMP_FILE% %CONFIG_FILE% > nul
echo 数据库地址已更新为: %DB_HOST%
goto MENU

:DB_NAME
set /p DB_NAME=请输入数据库名称(默认haiman): 
if "%DB_NAME%"=="" set DB_NAME=haiman
powershell -Command "(Get-Content %CONFIG_FILE%) -replace '/[^?]+\?', '/%DB_NAME%?' | Set-Content %TEMP_FILE%"
move /y %TEMP_FILE% %CONFIG_FILE% > nul
echo 数据库名称已更新为: %DB_NAME%
goto MENU

:DB_USER
set /p DB_USER=请输入数据库用户名(默认root): 
if "%DB_USER%"=="" set DB_USER=root
powershell -Command "(Get-Content %CONFIG_FILE%) -replace 'spring.datasource.username=.*', 'spring.datasource.username=%DB_USER%' | Set-Content %TEMP_FILE%"
move /y %TEMP_FILE% %CONFIG_FILE% > nul
echo 数据库用户名已更新为: %DB_USER%
goto MENU

:DB_PASS
set /p DB_PASS=请输入数据库密码: 
powershell -Command "(Get-Content %CONFIG_FILE%) -replace 'spring.datasource.password=.*', 'spring.datasource.password=%DB_PASS%' | Set-Content %TEMP_FILE%"
move /y %TEMP_FILE% %CONFIG_FILE% > nul
echo 数据库密码已更新
goto MENU

:SERVER_PORT
set /p SERVER_PORT=请输入服务器端口(默认8081): 
if "%SERVER_PORT%"=="" set SERVER_PORT=8081
powershell -Command "(Get-Content %CONFIG_FILE%) -replace 'server.port=.*', 'server.port=%SERVER_PORT%' | Set-Content %TEMP_FILE%"
move /y %TEMP_FILE% %CONFIG_FILE% > nul
echo 服务器端口已更新为: %SERVER_PORT%
goto MENU

:NETWORK_CHECK
call network-check.bat
goto MENU

:SHOW_IP
echo.
echo 本机IP地址:
ipconfig | findstr IPv4
echo.
echo 对外访问地址应为: http://[以上任一IP地址]:%SERVER_PORT%
echo.
pause
goto MENU

:REMOTE_ACCESS
echo.
echo 配置允许远程访问...
echo 1. 确保server.address=0.0.0.0
powershell -Command "(Get-Content %CONFIG_FILE%) -replace 'server.address=.*', 'server.address=0.0.0.0' | Set-Content %TEMP_FILE%"
move /y %TEMP_FILE% %CONFIG_FILE% > nul

echo 2. 添加forward-headers配置
findstr /i "server.forward-headers-strategy" %CONFIG_FILE% > nul
if %ERRORLEVEL% NEQ 0 (
    powershell -Command "(Get-Content %CONFIG_FILE%) -replace 'server.address=0.0.0.0', 'server.address=0.0.0.0\nserver.forward-headers-strategy=native' | Set-Content %TEMP_FILE%"
    move /y %TEMP_FILE% %CONFIG_FILE% > nul
)
echo 3. 已完成远程访问配置
echo.
pause
goto MENU

:EXIT
echo.
echo 配置已保存，退出程序
pause
