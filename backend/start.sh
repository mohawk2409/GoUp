#!/bin/bash

echo "🚀 Démarrage de GoUp Backend"
echo "=============================="
echo ""

# Vérifier si Docker est lancé
if ! docker info > /dev/null 2>&1; then
    echo "❌ Docker n'est pas lancé. Veuillez démarrer Docker."
    exit 1
fi

# Vérifier si la base de données est lancée
echo "📊 Vérification de la base de données PostgreSQL..."
if ! docker ps | grep -q go_up_db; then
    echo "⚠️  La base de données n'est pas lancée."
    echo "🔧 Démarrage de la base de données..."
    cd ../infra_db
    docker-compose up -d
    cd ../backend
    echo "⏳ Attente du démarrage de PostgreSQL (10 secondes)..."
    sleep 10
else
    echo "✅ Base de données déjà lancée"
fi

echo ""
echo "🔨 Compilation du projet..."

# Utiliser le Maven Wrapper si disponible, sinon Maven système
if [ -f "./mvnw" ]; then
    echo "📦 Utilisation du Maven Wrapper..."
    chmod +x mvnw
    ./mvnw clean install -DskipTests
    COMPILE_STATUS=$?
elif command -v mvn &> /dev/null; then
    echo "📦 Utilisation de Maven système..."
    mvn clean install -DskipTests
    COMPILE_STATUS=$?
else
    echo ""
    echo "❌ Maven non trouvé sur ce système."
    echo ""
    echo "📋 Solutions possibles :"
    echo ""
    echo "1️⃣  Installer Maven sur WSL/Linux :"
    echo "   sudo apt-get update && sudo apt-get install maven"
    echo ""
    echo "2️⃣  Utiliser le script Windows (si sur Windows) :"
    echo "   start.bat"
    echo ""
    echo "3️⃣  Ouvrir avec un IDE (IntelliJ IDEA, Eclipse, VS Code avec extensions Java)"
    echo ""
    echo "4️⃣  Lancer directement avec Java si déjà compilé :"
    echo "   java -jar target/backend-1.0.0.jar"
    echo ""
    exit 1
fi

if [ $COMPILE_STATUS -eq 0 ]; then
    echo ""
    echo "✅ Compilation réussie !"
    echo ""
    echo "🚀 Lancement de l'application..."
    echo "📍 L'API sera disponible sur http://localhost:8080"
    echo ""
    
    if [ -f "./mvnw" ]; then
        ./mvnw spring-boot:run
    else
        mvn spring-boot:run
    fi
else
    echo ""
    echo "❌ Erreur de compilation"
    exit 1
fi
