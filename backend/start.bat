@echo off
echo.
echo ========================================
echo   GoUp Backend - Demarrage
echo ========================================
echo.

REM Verification Docker
docker info >nul 2>&1
if errorlevel 1 (
    echo [ERREUR] Docker n'est pas lance. Veuillez demarrer Docker.
    pause
    exit /b 1
)

REM Verification base de donnees
echo [INFO] Verification de la base de donnees PostgreSQL...
docker ps | findstr "go_up_db" >nul
if errorlevel 1 (
    echo [WARN] La base de donnees n'est pas lancee.
    echo [INFO] Demarrage de la base de donnees...
    cd ..\infra_db
    docker-compose up -d
    cd ..\backend
    echo [INFO] Attente du demarrage de PostgreSQL (10 secondes)...
    timeout /t 10 /nobreak >nul
) else (
    echo [OK] Base de donnees deja lancee
)

echo.
echo [INFO] Compilation du projet...
call mvn clean install -DskipTests

if errorlevel 1 (
    echo.
    echo [ERREUR] Erreur de compilation
    pause
    exit /b 1
)

echo.
echo [OK] Compilation reussie !
echo.
echo [INFO] Lancement de l'application...
echo [INFO] L'API sera disponible sur http://localhost:8080
echo.
call mvn spring-boot:run
