# 📚 GoUp API - Exemples de Requêtes/Réponses

Guide complet avec exemples réels pour l'intégration frontend.  
Base URL: `http://localhost:8080/api`

---

## 📋 Table des matières

1. [Authentification & Utilisateurs](#1-authentification--utilisateurs)
2. [Gestion des Amis](#2-gestion-des-amis)
3. [Sports](#3-sports)
4. [Défis](#4-défis)
5. [Participations](#5-participations)
6. [Commentaires](#6-commentaires)
7. [Likes](#7-likes)
8. [Notifications](#8-notifications)
9. [Scénarios Complets](#9-scénarios-complets)

---

## 1. Authentification & Utilisateurs

### 1.1 Inscription d'un nouvel utilisateur

**Requête**
```http
POST /api/users/register
Content-Type: application/json

{
  "nomUtilisateur": "alice",
  "email": "alice@example.com",
  "motDePasse": "password123"
}
```

**Réponse - Succès (201 Created)**
```json
{
  "id": 1,
  "nomUtilisateur": "alice",
  "email": "alice@example.com",
  "dateInscription": "2025-10-21T14:30:25.123456",
  "totalDefisCreees": 0,
  "totalDefisParticipes": 0,
  "totalDefisTermines": 0,
  "distanceTotale": 0.0,
  "tempsTotalMinutes": 0,
  "repetitionsTotales": 0
}
```

**Réponse - Erreur: Email déjà utilisé (400 Bad Request)**
```json
{
  "error": "Bad Request",
  "message": "Cet email est déjà utilisé"
}
```

---

### 1.2 Connexion d'un utilisateur

**Requête**
```http
POST /api/users/login
Content-Type: application/json

{
  "identifiant": "alice@example.com",
  "motDePasse": "password123"
}
```

**Réponse - Succès (200 OK)**
```json
{
  "id": 1,
  "nomUtilisateur": "alice",
  "email": "alice@example.com",
  "dateInscription": "2025-10-21T14:30:25.123456",
  "totalDefisCreees": 2,
  "totalDefisParticipes": 5,
  "totalDefisTermines": 1,
  "distanceTotale": 15000.0,
  "tempsTotalMinutes": 120,
  "repetitionsTotales": 250
}
```

**Réponse - Erreur: Mot de passe incorrect (401 Unauthorized)**
```json
{
  "error": "Unauthorized",
  "message": "Mot de passe incorrect"
}
```

---

### 1.3 Obtenir le profil d'un utilisateur

**Requête**
```http
GET /api/users/1
```

**Réponse - Succès (200 OK)**
```json
{
  "id": 1,
  "nomUtilisateur": "alice",
  "email": "alice@example.com",
  "dateInscription": "2025-10-21T14:30:25.123456",
  "totalDefisCreees": 2,
  "totalDefisParticipes": 5,
  "totalDefisTermines": 1,
  "distanceTotale": 15000.0,
  "tempsTotalMinutes": 120,
  "repetitionsTotales": 250
}
```

**Réponse - Erreur: Utilisateur introuvable (404 Not Found)**
```json
{
  "error": "Not Found",
  "message": "Utilisateur non trouvé"
}
```

---

### 1.4 Lister tous les utilisateurs

**Requête**
```http
GET /api/users
```

**Réponse - Succès (200 OK)**
```json
[
  {
    "id": 1,
    "nomUtilisateur": "alice",
    "email": "alice@example.com",
    "dateInscription": "2025-10-21T14:30:25.123456",
    "totalDefisCreees": 2,
    "totalDefisParticipes": 5,
    "totalDefisTermines": 1,
    "distanceTotale": 15000.0,
    "tempsTotalMinutes": 120,
    "repetitionsTotales": 250
  },
  {
    "id": 2,
    "nomUtilisateur": "bob",
    "email": "bob@example.com",
    "dateInscription": "2025-10-21T15:00:00.000000",
    "totalDefisCreees": 0,
    "totalDefisParticipes": 3,
    "totalDefisTermines": 0,
    "distanceTotale": 8000.0,
    "tempsTotalMinutes": 45,
    "repetitionsTotales": 100
  }
]
```

---

## 2. Gestion des Amis

### 2.1 Ajouter un ami

**Requête**
```http
POST /api/users/1/friends/2
```

**Réponse - Succès (200 OK)**
```
(Corps vide)
```

**Réponse - Erreur: Déjà amis (400 Bad Request)**
```json
{
  "error": "Bad Request",
  "message": "Ces utilisateurs sont déjà amis"
}
```

**Réponse - Erreur: Auto-ajout (400 Bad Request)**
```json
{
  "error": "Bad Request",
  "message": "Un utilisateur ne peut pas s'ajouter lui-même comme ami"
}
```

---

### 2.2 Lister les amis d'un utilisateur

**Requête**
```http
GET /api/users/1/friends
```

**Réponse - Succès (200 OK)**
```json
[
  {
    "id": 2,
    "nomUtilisateur": "bob",
    "email": "bob@example.com",
    "dateInscription": "2025-10-21T15:00:00.000000",
    "totalDefisCreees": 0,
    "totalDefisParticipes": 3,
    "totalDefisTermines": 0,
    "distanceTotale": 8000.0,
    "tempsTotalMinutes": 45,
    "repetitionsTotales": 100
  },
  {
    "id": 3,
    "nomUtilisateur": "charlie",
    "email": "charlie@example.com",
    "dateInscription": "2025-10-21T16:00:00.000000",
    "totalDefisCreees": 1,
    "totalDefisParticipes": 2,
    "totalDefisTermines": 1,
    "distanceTotale": 25000.0,
    "tempsTotalMinutes": 200,
    "repetitionsTotales": 500
  }
]
```

---

### 2.3 Retirer un ami

**Requête**
```http
DELETE /api/users/1/friends/2
```

**Réponse - Succès (200 OK)**
```
(Corps vide)
```

---

## 3. Sports

### 3.1 Lister tous les sports disponibles

**Requête**
```http
GET /api/sports
```

**Réponse - Succès (200 OK)**
```json
[
  {
    "id": 1,
    "nom": "Course à pied",
    "categorie": "Cardio"
  },
  {
    "id": 2,
    "nom": "Sprint",
    "categorie": "Cardio"
  },
  {
    "id": 3,
    "nom": "Marathon",
    "categorie": "Cardio"
  },
  {
    "id": 4,
    "nom": "Vélo",
    "categorie": "Cardio"
  },
  {
    "id": 7,
    "nom": "Pompes",
    "categorie": "Musculation"
  },
  {
    "id": 8,
    "nom": "Tractions",
    "categorie": "Musculation"
  },
  {
    "id": 14,
    "nom": "Yoga",
    "categorie": "Bien-être"
  },
  {
    "id": 16,
    "nom": "Randonnée",
    "categorie": "Plein air"
  }
]
```

---

### 3.2 Obtenir un sport par ID

**Requête**
```http
GET /api/sports/1
```

**Réponse - Succès (200 OK)**
```json
{
  "id": 1,
  "nom": "Course à pied",
  "categorie": "Cardio"
}
```

---

### 3.3 Lister les sports par catégorie

**Requête**
```http
GET /api/sports/categorie/Cardio
```

**Réponse - Succès (200 OK)**
```json
[
  {
    "id": 1,
    "nom": "Course à pied",
    "categorie": "Cardio"
  },
  {
    "id": 2,
    "nom": "Sprint",
    "categorie": "Cardio"
  },
  {
    "id": 3,
    "nom": "Marathon",
    "categorie": "Cardio"
  },
  {
    "id": 4,
    "nom": "Vélo",
    "categorie": "Cardio"
  },
  {
    "id": 5,
    "nom": "VTT",
    "categorie": "Cardio"
  },
  {
    "id": 6,
    "nom": "Natation",
    "categorie": "Cardio"
  }
]
```

---

## 4. Défis

### 4.1 Créer un défi de distance (running)

**Requête**
```http
POST /api/challenges?userId=1
Content-Type: application/json

{
  "nom": "Défi Running Octobre",
  "description": "Courir 50 km en octobre",
  "sportId": 1,
  "type": "DISTANCE",
  "objectif": 50000,
  "dateDebut": "2025-10-15T00:00:00",
  "dateFin": "2025-10-31T23:59:59",
  "visibilite": "PUBLIC"
}
```

**Réponse - Succès (201 Created)**
```json
{
  "id": 1,
  "nom": "Défi Running Octobre",
  "description": "Courir 50 km en octobre",
  "sportNom": "Course à pied",
  "sportCategorie": "Cardio",
  "type": "DISTANCE",
  "objectif": 50000,
  "dateDebut": "2025-10-15T00:00:00",
  "dateFin": "2025-10-31T23:59:59",
  "createurNom": "alice",
  "createurId": 1,
  "visibilite": "PUBLIC",
  "dateCreation": "2025-10-21T14:45:30.987654",
  "nombreParticipants": 0,
  "nombreLikes": 0,
  "nombreCommentaires": 0
}
```

---

### 4.2 Créer un défi de répétitions (pompes)

**Requête**
```http
POST /api/challenges?userId=1
Content-Type: application/json

{
  "nom": "100 Pompes Challenge",
  "description": "Réaliser 100 pompes en 30 jours",
  "sportId": 7,
  "type": "REPETITION",
  "objectif": 100,
  "dateDebut": "2025-10-15T00:00:00",
  "dateFin": "2025-11-15T23:59:59",
  "visibilite": "PUBLIC"
}
```

**Réponse - Succès (201 Created)**
```json
{
  "id": 2,
  "nom": "100 Pompes Challenge",
  "description": "Réaliser 100 pompes en 30 jours",
  "sportNom": "Pompes",
  "sportCategorie": "Musculation",
  "type": "REPETITION",
  "objectif": 100,
  "dateDebut": "2025-10-15T00:00:00",
  "dateFin": "2025-11-15T23:59:59",
  "createurNom": "alice",
  "createurId": 1,
  "visibilite": "PUBLIC",
  "dateCreation": "2025-10-21T14:46:00.123456",
  "nombreParticipants": 0,
  "nombreLikes": 0,
  "nombreCommentaires": 0
}
```

---

### 4.3 Créer un défi de temps (yoga)

**Requête**
```http
POST /api/challenges?userId=2
Content-Type: application/json

{
  "nom": "Défi Yoga 10h",
  "description": "10 heures de yoga ce mois-ci",
  "sportId": 14,
  "type": "TEMPS",
  "objectif": 600,
  "dateDebut": "2025-10-15T00:00:00",
  "dateFin": "2025-10-31T23:59:59",
  "visibilite": "FRIENDS_ONLY"
}
```

**Réponse - Succès (201 Created)**
```json
{
  "id": 3,
  "nom": "Défi Yoga 10h",
  "description": "10 heures de yoga ce mois-ci",
  "sportNom": "Yoga",
  "sportCategorie": "Bien-être",
  "type": "TEMPS",
  "objectif": 600,
  "dateDebut": "2025-10-15T00:00:00",
  "dateFin": "2025-10-31T23:59:59",
  "createurNom": "bob",
  "createurId": 2,
  "visibilite": "FRIENDS_ONLY",
  "dateCreation": "2025-10-21T14:47:00.789012",
  "nombreParticipants": 0,
  "nombreLikes": 0,
  "nombreCommentaires": 0
}
```

---

### 4.4 Obtenir un défi par ID (avec compteurs)

**Requête**
```http
GET /api/challenges/1
```

**Réponse - Succès (200 OK)**
```json
{
  "id": 1,
  "nom": "Défi Running Octobre",
  "description": "Courir 50 km en octobre",
  "sportNom": "Course à pied",
  "sportCategorie": "Cardio",
  "type": "DISTANCE",
  "objectif": 50000,
  "dateDebut": "2025-10-15T00:00:00",
  "dateFin": "2025-10-31T23:59:59",
  "createurNom": "alice",
  "createurId": 1,
  "visibilite": "PUBLIC",
  "dateCreation": "2025-10-21T14:45:30.987654",
  "nombreParticipants": 5,
  "nombreLikes": 12,
  "nombreCommentaires": 8
}
```

---

### 4.5 Lister tous les défis

**Requête**
```http
GET /api/challenges
```

**Réponse - Succès (200 OK)**
```json
[
  {
    "id": 1,
    "nom": "Défi Running Octobre",
    "description": "Courir 50 km en octobre",
    "sportNom": "Course à pied",
    "sportCategorie": "Cardio",
    "type": "DISTANCE",
    "objectif": 50000,
    "dateDebut": "2025-10-15T00:00:00",
    "dateFin": "2025-10-31T23:59:59",
    "createurNom": "alice",
    "createurId": 1,
    "visibilite": "PUBLIC",
    "dateCreation": "2025-10-21T14:45:30.987654",
    "nombreParticipants": 5,
    "nombreLikes": 12,
    "nombreCommentaires": 8
  },
  {
    "id": 2,
    "nom": "100 Pompes Challenge",
    "description": "Réaliser 100 pompes en 30 jours",
    "sportNom": "Pompes",
    "sportCategorie": "Musculation",
    "type": "REPETITION",
    "objectif": 100,
    "dateDebut": "2025-10-15T00:00:00",
    "dateFin": "2025-11-15T23:59:59",
    "createurNom": "alice",
    "createurId": 1,
    "visibilite": "PUBLIC",
    "dateCreation": "2025-10-21T14:46:00.123456",
    "nombreParticipants": 3,
    "nombreLikes": 7,
    "nombreCommentaires": 5
  }
]
```

---

### 4.6 Lister les défis actifs (en cours)

**Requête**
```http
GET /api/challenges/active
```

**Réponse - Succès (200 OK)**
```json
[
  {
    "id": 1,
    "nom": "Défi Running Octobre",
    "description": "Courir 50 km en octobre",
    "sportNom": "Course à pied",
    "sportCategorie": "Cardio",
    "type": "DISTANCE",
    "objectif": 50000,
    "dateDebut": "2025-10-15T00:00:00",
    "dateFin": "2025-10-31T23:59:59",
    "createurNom": "alice",
    "createurId": 1,
    "visibilite": "PUBLIC",
    "dateCreation": "2025-10-21T14:45:30.987654",
    "nombreParticipants": 5,
    "nombreLikes": 12,
    "nombreCommentaires": 8
  }
]
```

---

### 4.7 Lister les défis créés par un utilisateur

**Requête**
```http
GET /api/challenges/user/1
```

**Réponse - Succès (200 OK)**
```json
[
  {
    "id": 1,
    "nom": "Défi Running Octobre",
    "description": "Courir 50 km en octobre",
    "sportNom": "Course à pied",
    "sportCategorie": "Cardio",
    "type": "DISTANCE",
    "objectif": 50000,
    "dateDebut": "2025-10-15T00:00:00",
    "dateFin": "2025-10-31T23:59:59",
    "createurNom": "alice",
    "createurId": 1,
    "visibilite": "PUBLIC",
    "dateCreation": "2025-10-21T14:45:30.987654",
    "nombreParticipants": 5,
    "nombreLikes": 12,
    "nombreCommentaires": 8
  },
  {
    "id": 2,
    "nom": "100 Pompes Challenge",
    "description": "Réaliser 100 pompes en 30 jours",
    "sportNom": "Pompes",
    "sportCategorie": "Musculation",
    "type": "REPETITION",
    "objectif": 100,
    "dateDebut": "2025-10-15T00:00:00",
    "dateFin": "2025-11-15T23:59:59",
    "createurNom": "alice",
    "createurId": 1,
    "visibilite": "PUBLIC",
    "dateCreation": "2025-10-21T14:46:00.123456",
    "nombreParticipants": 3,
    "nombreLikes": 7,
    "nombreCommentaires": 5
  }
]
```

---

### 4.8 Changer la visibilité d'un défi

**Requête**
```http
PUT /api/challenges/1/visibility?visibility=FRIENDS_ONLY
```

**Réponse - Succès (200 OK)**
```
(Corps vide)
```

---

## 5. Participations

### 5.1 Rejoindre un défi

**Requête**
```http
POST /api/participations?userId=2&challengeId=1
```

**Réponse - Succès (201 Created)**
```json
{
  "id": 1,
  "userNom": "bob",
  "userId": 2,
  "challengeNom": "Défi Running Octobre",
  "challengeId": 1,
  "dateInscription": "2025-10-21T15:00:00.123456",
  "tempsMinutes": 0,
  "distanceMetres": 0.0,
  "repetitions": 0,
  "termine": false,
  "derniereMiseAJour": "2025-10-21T15:00:00.123456"
}
```

---

### 5.2 Mettre à jour sa progression (distance)

**Requête**
```http
PUT /api/participations?userId=2&challengeId=1
Content-Type: application/json

{
  "distanceMetres": 5000
}
```

**Réponse - Succès (200 OK)**
```json
{
  "id": 1,
  "userNom": "bob",
  "userId": 2,
  "challengeNom": "Défi Running Octobre",
  "challengeId": 1,
  "dateInscription": "2025-10-21T15:00:00.123456",
  "tempsMinutes": 0,
  "distanceMetres": 5000.0,
  "repetitions": 0,
  "termine": false,
  "derniereMiseAJour": "2025-10-21T15:30:00.654321"
}
```

---

### 5.3 Mettre à jour sa progression (répétitions)

**Requête**
```http
PUT /api/participations?userId=2&challengeId=2
Content-Type: application/json

{
  "repetitions": 20
}
```

**Réponse - Succès (200 OK)**
```json
{
  "id": 2,
  "userNom": "bob",
  "userId": 2,
  "challengeNom": "100 Pompes Challenge",
  "challengeId": 2,
  "dateInscription": "2025-10-21T15:10:00.000000",
  "tempsMinutes": 0,
  "distanceMetres": 0.0,
  "repetitions": 20,
  "termine": false,
  "derniereMiseAJour": "2025-10-21T16:00:00.111111"
}
```

---

### 5.4 Mettre à jour sa progression (temps)

**Requête**
```http
PUT /api/participations?userId=1&challengeId=3
Content-Type: application/json

{
  "tempsMinutes": 60
}
```

**Réponse - Succès (200 OK)**
```json
{
  "id": 3,
  "userNom": "alice",
  "userId": 1,
  "challengeNom": "Défi Yoga 10h",
  "challengeId": 3,
  "dateInscription": "2025-10-21T15:20:00.000000",
  "tempsMinutes": 60,
  "distanceMetres": 0.0,
  "repetitions": 0,
  "termine": false,
  "derniereMiseAJour": "2025-10-21T16:20:00.222222"
}
```

---

### 5.5 Obtenir les participations d'un utilisateur

**Requête**
```http
GET /api/participations/user/2
```

**Réponse - Succès (200 OK)**
```json
[
  {
    "id": 1,
    "userNom": "bob",
    "userId": 2,
    "challengeNom": "Défi Running Octobre",
    "challengeId": 1,
    "dateInscription": "2025-10-21T15:00:00.123456",
    "tempsMinutes": 0,
    "distanceMetres": 5000.0,
    "repetitions": 0,
    "termine": false,
    "derniereMiseAJour": "2025-10-21T15:30:00.654321"
  },
  {
    "id": 2,
    "userNom": "bob",
    "userId": 2,
    "challengeNom": "100 Pompes Challenge",
    "challengeId": 2,
    "dateInscription": "2025-10-21T15:10:00.000000",
    "tempsMinutes": 0,
    "distanceMetres": 0.0,
    "repetitions": 20,
    "termine": false,
    "derniereMiseAJour": "2025-10-21T16:00:00.111111"
  }
]
```

---

### 5.6 Obtenir les participants d'un défi

**Requête**
```http
GET /api/participations/challenge/1
```

**Réponse - Succès (200 OK)**
```json
[
  {
    "id": 1,
    "userNom": "bob",
    "userId": 2,
    "challengeNom": "Défi Running Octobre",
    "challengeId": 1,
    "dateInscription": "2025-10-21T15:00:00.123456",
    "tempsMinutes": 0,
    "distanceMetres": 5000.0,
    "repetitions": 0,
    "termine": false,
    "derniereMiseAJour": "2025-10-21T15:30:00.654321"
  },
  {
    "id": 4,
    "userNom": "charlie",
    "userId": 3,
    "challengeNom": "Défi Running Octobre",
    "challengeId": 1,
    "dateInscription": "2025-10-21T16:00:00.000000",
    "tempsMinutes": 0,
    "distanceMetres": 12000.0,
    "repetitions": 0,
    "termine": false,
    "derniereMiseAJour": "2025-10-21T17:00:00.333333"
  }
]
```

---

### 5.7 Obtenir une participation spécifique

**Requête**
```http
GET /api/participations?userId=2&challengeId=1
```

**Réponse - Succès (200 OK)**
```json
{
  "id": 1,
  "userNom": "bob",
  "userId": 2,
  "challengeNom": "Défi Running Octobre",
  "challengeId": 1,
  "dateInscription": "2025-10-21T15:00:00.123456",
  "tempsMinutes": 0,
  "distanceMetres": 5000.0,
  "repetitions": 0,
  "termine": false,
  "derniereMiseAJour": "2025-10-21T15:30:00.654321"
}
```

---

## 6. Commentaires

### 6.1 Créer un commentaire sur un défi

**Requête**
```http
POST /api/comments?userId=2&challengeId=1
Content-Type: application/json

{
  "texte": "Super défi ! J'ai hâte de commencer 🏃"
}
```

**Réponse - Succès (201 Created)**
```json
{
  "id": 1,
  "texte": "Super défi ! J'ai hâte de commencer 🏃",
  "auteurNom": "bob",
  "auteurId": 2,
  "challengeId": 1,
  "dateCreation": "2025-10-21T15:05:00.987654",
  "nombreLikes": 0
}
```

---

### 6.2 Obtenir les commentaires d'un défi

**Requête**
```http
GET /api/comments/challenge/1
```

**Réponse - Succès (200 OK)**
```json
[
  {
    "id": 1,
    "texte": "Super défi ! J'ai hâte de commencer 🏃",
    "auteurNom": "bob",
    "auteurId": 2,
    "challengeId": 1,
    "dateCreation": "2025-10-21T15:05:00.987654",
    "nombreLikes": 3
  },
  {
    "id": 2,
    "texte": "Merci ! Bon courage à tous 💪",
    "auteurNom": "alice",
    "auteurId": 1,
    "challengeId": 1,
    "dateCreation": "2025-10-21T15:10:00.123456",
    "nombreLikes": 5
  },
  {
    "id": 3,
    "texte": "J'ai déjà fait 5 km aujourd'hui !",
    "auteurNom": "charlie",
    "auteurId": 3,
    "challengeId": 1,
    "dateCreation": "2025-10-21T16:30:00.555555",
    "nombreLikes": 2
  }
]
```

---

### 6.3 Supprimer un commentaire

**Requête**
```http
DELETE /api/comments/1?userId=2
```

**Réponse - Succès (200 OK)**
```
(Corps vide)
```

**Réponse - Erreur: Pas l'auteur (400 Bad Request)**
```json
{
  "error": "Bad Request",
  "message": "Seul l'auteur peut supprimer ce commentaire"
}
```

---

## 7. Likes

### 7.1 Liker un défi

**Requête**
```http
POST /api/likes/challenge/1?userId=2
```

**Réponse - Succès (200 OK)**
```
(Corps vide)
```

---

### 7.2 Retirer un like d'un défi

**Requête**
```http
DELETE /api/likes/challenge/1?userId=2
```

**Réponse - Succès (200 OK)**
```
(Corps vide)
```

---

### 7.3 Compter les likes d'un défi

**Requête**
```http
GET /api/likes/challenge/1/count
```

**Réponse - Succès (200 OK)**
```
12
```

---

### 7.4 Liker un commentaire

**Requête**
```http
POST /api/likes/comment/1?userId=1
```

**Réponse - Succès (200 OK)**
```
(Corps vide)
```

---

### 7.5 Compter les likes d'un commentaire

**Requête**
```http
GET /api/likes/comment/1/count
```

**Réponse - Succès (200 OK)**
```
5
```

---

## 8. Notifications

### 8.1 Obtenir les notifications d'un utilisateur

**Requête**
```http
GET /api/notifications/user/1
```

**Réponse - Succès (200 OK)**
```json
[
  {
    "id": 1,
    "type": "NOUVELLE_PARTICIPATION",
    "contenu": "bob participe à votre défi : Défi Running Octobre",
    "dateCreation": "2025-10-21T15:00:00.123456",
    "lu": false
  },
  {
    "id": 2,
    "type": "NOUVEAU_COMMENTAIRE",
    "contenu": "bob a commenté votre défi : Défi Running Octobre",
    "dateCreation": "2025-10-21T15:05:00.987654",
    "lu": false
  },
  {
    "id": 3,
    "type": "NOUVELLE_PARTICIPATION",
    "contenu": "charlie participe à votre défi : Défi Running Octobre",
    "dateCreation": "2025-10-21T16:00:00.000000",
    "lu": true
  }
]
```

---

### 8.2 Obtenir les notifications non lues

**Requête**
```http
GET /api/notifications/user/1/unread
```

**Réponse - Succès (200 OK)**
```json
[
  {
    "id": 1,
    "type": "NOUVELLE_PARTICIPATION",
    "contenu": "bob participe à votre défi : Défi Running Octobre",
    "dateCreation": "2025-10-21T15:00:00.123456",
    "lu": false
  },
  {
    "id": 2,
    "type": "NOUVEAU_COMMENTAIRE",
    "contenu": "bob a commenté votre défi : Défi Running Octobre",
    "dateCreation": "2025-10-21T15:05:00.987654",
    "lu": false
  }
]
```

---

### 8.3 Marquer une notification comme lue

**Requête**
```http
PUT /api/notifications/1/read
```

**Réponse - Succès (200 OK)**
```
(Corps vide)
```

---

### 8.4 Marquer toutes les notifications comme lues

**Requête**
```http
PUT /api/notifications/user/1/read-all
```

**Réponse - Succès (200 OK)**
```
(Corps vide)
```

---

## 9. Scénarios Complets

### Scénario 1: Alice s'inscrit et crée un défi

#### Étape 1: Inscription
```http
POST /api/users/register
Content-Type: application/json

{
  "nomUtilisateur": "alice",
  "email": "alice@example.com",
  "motDePasse": "password123"
}
```

**Réponse:**
```json
{
  "id": 1,
  "nomUtilisateur": "alice",
  "email": "alice@example.com",
  "dateInscription": "2025-10-21T14:30:25.123456",
  "totalDefisCreees": 0,
  "totalDefisParticipes": 0,
  "totalDefisTermines": 0,
  "distanceTotale": 0.0,
  "tempsTotalMinutes": 0,
  "repetitionsTotales": 0
}
```

#### Étape 2: Lister les sports disponibles
```http
GET /api/sports
```

**Réponse:**
```json
[
  {
    "id": 1,
    "nom": "Course à pied",
    "categorie": "Cardio"
  },
  ...
]
```

#### Étape 3: Créer un défi
```http
POST /api/challenges?userId=1
Content-Type: application/json

{
  "nom": "Défi Running Octobre",
  "description": "Courir 50 km en octobre",
  "sportId": 1,
  "type": "DISTANCE",
  "objectif": 50000,
  "dateDebut": "2025-10-15T00:00:00",
  "dateFin": "2025-10-31T23:59:59",
  "visibilite": "PUBLIC"
}
```

**Réponse:**
```json
{
  "id": 1,
  "nom": "Défi Running Octobre",
  "description": "Courir 50 km en octobre",
  "sportNom": "Course à pied",
  "sportCategorie": "Cardio",
  "type": "DISTANCE",
  "objectif": 50000,
  "dateDebut": "2025-10-15T00:00:00",
  "dateFin": "2025-10-31T23:59:59",
  "createurNom": "alice",
  "createurId": 1,
  "visibilite": "PUBLIC",
  "dateCreation": "2025-10-21T14:45:30.987654",
  "nombreParticipants": 0,
  "nombreLikes": 0,
  "nombreCommentaires": 0
}
```

---

### Scénario 2: Bob rejoint le défi d'Alice et progresse

#### Étape 1: Bob s'inscrit
```http
POST /api/users/register
Content-Type: application/json

{
  "nomUtilisateur": "bob",
  "email": "bob@example.com",
  "motDePasse": "password123"
}
```

**Réponse:**
```json
{
  "id": 2,
  "nomUtilisateur": "bob",
  "email": "bob@example.com",
  "dateInscription": "2025-10-21T15:00:00.000000",
  "totalDefisCreees": 0,
  "totalDefisParticipes": 0,
  "totalDefisTermines": 0,
  "distanceTotale": 0.0,
  "tempsTotalMinutes": 0,
  "repetitionsTotales": 0
}
```

#### Étape 2: Bob consulte les défis actifs
```http
GET /api/challenges/active
```

**Réponse:**
```json
[
  {
    "id": 1,
    "nom": "Défi Running Octobre",
    "description": "Courir 50 km en octobre",
    "sportNom": "Course à pied",
    "sportCategorie": "Cardio",
    "type": "DISTANCE",
    "objectif": 50000,
    "dateDebut": "2025-10-15T00:00:00",
    "dateFin": "2025-10-31T23:59:59",
    "createurNom": "alice",
    "createurId": 1,
    "visibilite": "PUBLIC",
    "dateCreation": "2025-10-21T14:45:30.987654",
    "nombreParticipants": 0,
    "nombreLikes": 0,
    "nombreCommentaires": 0
  }
]
```

#### Étape 3: Bob rejoint le défi
```http
POST /api/participations?userId=2&challengeId=1
```

**Réponse:**
```json
{
  "id": 1,
  "userNom": "bob",
  "userId": 2,
  "challengeNom": "Défi Running Octobre",
  "challengeId": 1,
  "dateInscription": "2025-10-21T15:00:00.123456",
  "tempsMinutes": 0,
  "distanceMetres": 0.0,
  "repetitions": 0,
  "termine": false,
  "derniereMiseAJour": "2025-10-21T15:00:00.123456"
}
```

#### Étape 4: Bob met à jour sa progression (5 km)
```http
PUT /api/participations?userId=2&challengeId=1
Content-Type: application/json

{
  "distanceMetres": 5000
}
```

**Réponse:**
```json
{
  "id": 1,
  "userNom": "bob",
  "userId": 2,
  "challengeNom": "Défi Running Octobre",
  "challengeId": 1,
  "dateInscription": "2025-10-21T15:00:00.123456",
  "tempsMinutes": 0,
  "distanceMetres": 5000.0,
  "repetitions": 0,
  "termine": false,
  "derniereMiseAJour": "2025-10-21T15:30:00.654321"
}
```

#### Étape 5: Bob commente le défi
```http
POST /api/comments?userId=2&challengeId=1
Content-Type: application/json

{
  "texte": "Super défi ! J'ai hâte de commencer 🏃"
}
```

**Réponse:**
```json
{
  "id": 1,
  "texte": "Super défi ! J'ai hâte de commencer 🏃",
  "auteurNom": "bob",
  "auteurId": 2,
  "challengeId": 1,
  "dateCreation": "2025-10-21T15:05:00.987654",
  "nombreLikes": 0
}
```

#### Étape 6: Alice vérifie ses notifications
```http
GET /api/notifications/user/1/unread
```

**Réponse:**
```json
[
  {
    "id": 1,
    "type": "NOUVELLE_PARTICIPATION",
    "contenu": "bob participe à votre défi : Défi Running Octobre",
    "dateCreation": "2025-10-21T15:00:00.123456",
    "lu": false
  },
  {
    "id": 2,
    "type": "NOUVEAU_COMMENTAIRE",
    "contenu": "bob a commenté votre défi : Défi Running Octobre",
    "dateCreation": "2025-10-21T15:05:00.987654",
    "lu": false
  }
]
```

---

### Scénario 3: Alice et Bob deviennent amis

#### Étape 1: Alice ajoute Bob comme ami
```http
POST /api/users/1/friends/2
```

**Réponse:**
```
(Corps vide - 200 OK)
```

#### Étape 2: Vérifier les amis d'Alice
```http
GET /api/users/1/friends
```

**Réponse:**
```json
[
  {
    "id": 2,
    "nomUtilisateur": "bob",
    "email": "bob@example.com",
    "dateInscription": "2025-10-21T15:00:00.000000",
    "totalDefisCreees": 0,
    "totalDefisParticipes": 1,
    "totalDefisTermines": 0,
    "distanceTotale": 5000.0,
    "tempsTotalMinutes": 0,
    "repetitionsTotales": 0
  }
]
```

#### Étape 3: Bob crée un défi visible uniquement par ses amis
```http
POST /api/challenges?userId=2
Content-Type: application/json

{
  "nom": "Défi Vélo entre amis",
  "description": "30 km de vélo ensemble",
  "sportId": 4,
  "type": "DISTANCE",
  "objectif": 30000,
  "dateDebut": "2025-10-22T00:00:00",
  "dateFin": "2025-10-29T23:59:59",
  "visibilite": "FRIENDS_ONLY"
}
```

**Réponse:**
```json
{
  "id": 4,
  "nom": "Défi Vélo entre amis",
  "description": "30 km de vélo ensemble",
  "sportNom": "Vélo",
  "sportCategorie": "Cardio",
  "type": "DISTANCE",
  "objectif": 30000,
  "dateDebut": "2025-10-22T00:00:00",
  "dateFin": "2025-10-29T23:59:59",
  "createurNom": "bob",
  "createurId": 2,
  "visibilite": "FRIENDS_ONLY",
  "dateCreation": "2025-10-21T17:00:00.111111",
  "nombreParticipants": 0,
  "nombreLikes": 0,
  "nombreCommentaires": 0
}
```

#### Étape 4: Alice voit les défis visibles pour elle (publics + amis)
```http
GET /api/challenges/visible/1
```

**Réponse:**
```json
[
  {
    "id": 1,
    "nom": "Défi Running Octobre",
    "visibilite": "PUBLIC",
    ...
  },
  {
    "id": 4,
    "nom": "Défi Vélo entre amis",
    "visibilite": "FRIENDS_ONLY",
    "createurNom": "bob",
    ...
  }
]
```

---

## 🎯 Notes pour l'intégration Frontend

### Gestion de l'authentification
- Après login réussi, stocker `userId` dans le state/context React
- Passer `userId` dans les requêtes qui nécessitent l'identification
- Pas de JWT pour l'instant (à implémenter en production)

### Gestion des états de chargement
```javascript
// Exemple React
const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);

const fetchData = async () => {
  setLoading(true);
  setError(null);
  try {
    const response = await fetch('http://localhost:8080/api/challenges');
    const data = await response.json();
    // Traiter les données
  } catch (err) {
    setError(err.message);
  } finally {
    setLoading(false);
  }
};
```

### Gestion des dates
```javascript
// Parser les dates ISO8601
const date = new Date("2025-10-21T14:30:25.123456");

// Formater pour l'affichage
const formattedDate = date.toLocaleDateString('fr-FR', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit'
});
```

### Calcul de progression
```javascript
// Pour un défi de distance
const progressPercentage = (participation.distanceMetres / challenge.objectif) * 100;

// Pour un défi de temps
const progressPercentage = (participation.tempsMinutes / challenge.objectif) * 100;

// Pour un défi de répétitions
const progressPercentage = (participation.repetitions / challenge.objectif) * 100;
```

### Polling pour les notifications
```javascript
// Vérifier les nouvelles notifications toutes les 30 secondes
useEffect(() => {
  const interval = setInterval(() => {
    fetch(`http://localhost:8080/api/notifications/user/${userId}/unread`)
      .then(res => res.json())
      .then(notifications => {
        setUnreadCount(notifications.length);
      });
  }, 30000);
  
  return () => clearInterval(interval);
}, [userId]);
```

### Types TypeScript (optionnel)
```typescript
interface UserDTO {
  id: number;
  nomUtilisateur: string;
  email: string;
  dateInscription: string;
  totalDefisCreees: number;
  totalDefisParticipes: number;
  totalDefisTermines: number;
  distanceTotale: number;
  tempsTotalMinutes: number;
  repetitionsTotales: number;
}

interface ChallengeDTO {
  id: number;
  nom: string;
  description: string;
  sportNom: string;
  sportCategorie: string;
  type: 'DISTANCE' | 'TEMPS' | 'REPETITION';
  objectif: number;
  dateDebut: string;
  dateFin: string;
  createurNom: string;
  createurId: number;
  visibilite: 'PUBLIC' | 'FRIENDS_ONLY' | 'PRIVATE';
  dateCreation: string;
  nombreParticipants: number;
  nombreLikes: number;
  nombreCommentaires: number;
}

interface ParticipationDTO {
  id: number;
  userNom: string;
  userId: number;
  challengeNom: string;
  challengeId: number;
  dateInscription: string;
  tempsMinutes: number;
  distanceMetres: number;
  repetitions: number;
  termine: boolean;
  derniereMiseAJour: string;
}
```

---

**📝 Dernière mise à jour:** 21 octobre 2025  
**🔗 Base URL:** http://localhost:8080/api  
**📦 Version:** 1.0.0
