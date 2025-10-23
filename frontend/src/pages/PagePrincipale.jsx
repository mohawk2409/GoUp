import React from "react";
import { useState } from 'react';
import Menu from '../components/Menu.jsx';
import "primereact/resources/themes/lara-light-blue/theme.css";
import "primereact/resources/primereact.min.css";
import 'primeicons/primeicons.css';
import { Link } from "react-router-dom";
import { PrimeIcons } from 'primereact/api';

function PagePrincipale(){
  // Données des défis du jour
  const [dailyChallenges, setDailyChallenges] = useState([
    {
      id: 1,
      title: "ML Course 5km en moins de 25min",
      author: "Par Marie L.",
      participants: ["Anis", "Marie", "Thomas", "Sophie"],
      description: "Défi pour améliorer nos temps sur 5km ! Objectif : courir 5km en moins de 25 minutes. Partagez vos progrès et astuces avec la communauté.",
      tags: ["Course à pied", "Temps", "Endurance"],
      progress: "8/15",
      deadline: "31/12/2024",
      points: 12,
      difficulty: 5,
      joined: false
    },
    {
      id: 2,
      title: "Yoga quotidien - 30 jours de transformation",
      author: "Par Sophie T.",
      participants: ["Anis", "Léa", "Thomas", "Paul", "Emma"],
      description: "Pratique du yoga chaque jour pendant un mois pour améliorer sa souplesse et réduire le stress. Sessions de 20 minutes par jour.",
      tags: ["Yoga", "Souplesse", "Méditation"],
      progress: "12/30",
      deadline: "15/11/2024",
      points: 20,
      difficulty: 3,
      joined: true
    },
    {
      id: 3,
      title: "Challenge 100 pompes par jour",
      author: "Par Marc D.",
      participants: ["Anis", "Paul", "Luc", "Jean"],
      description: "Augmenter progressivement jusqu'à 100 pompes quotidiennes. Programme d'entraînement progressif sur 4 semaines.",
      tags: ["Musculation", "Force", "Upper body"],
      progress: "45/100",
      deadline: "30/11/2024",
      points: 15,
      difficulty: 4,
      joined: false
    },
    {
      id: 4,
      title: "Marche 10 000 pas par jour",
      author: "Par Claire M.",
      participants: ["Anis", "Marie", "Julie", "Pierre"],
      description: "Atteindre l'objectif des 10 000 pas quotidiens pour une meilleure santé cardiovasculaire.",
      tags: ["Marche", "Santé", "Cardio"],
      progress: "22/30",
      deadline: "20/12/2024",
      points: 10,
      difficulty: 2,
      joined: true
    },
    {
      id: 5,
      title: "Meditation mindfulness - 21 jours",
      author: "Par David L.",
      participants: ["Anis", "Sophie", "Thomas"],
      description: "Pratique de la méditation mindfulness pendant 21 jours consécutifs pour développer une habitude durable.",
      tags: ["Méditation", "Wellness", "Mental"],
      progress: "15/21",
      deadline: "10/12/2024",
      points: 18,
      difficulty: 2,
      joined: false
    }
  ]);

  // Rejoindre un défi
  const joinChallenge = (challengeId) => {
    setDailyChallenges(prevChallenges => 
      prevChallenges.map(challenge => 
        challenge.id === challengeId 
          ? { ...challenge, joined: !challenge.joined } 
          : challenge
      )
    );
  };
  const noUnderline = {
    textDecoration: 'none',
    color: 'inherit'
  };

  // Styles
  const styles = {
    app: {
      backgroundImage:"linear-gradient(90deg,rgba(255, 91, 23,0.8), rgba(255, 191, 0, 0.8 ))", 
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh", 
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      zIndex: -1 
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '20px',
      display: 'grid',
      gridTemplateColumns: '300px 1fr',
      gap: '30px'
    },
    sidebar: {
      backgroundColor: 'white',
      borderRadius: '12px',
      padding: '30px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      height: 'fit-content'
    },
    greeting: {
      h1: {
        fontSize: '28px',
        marginBottom: '8px',
        color: '#1a1a1a'
      },
      p: {
        color: '#666',
        fontSize: '16px',
        marginBottom: '30px'
      }
    },
    stats: {
      display: 'flex',
      flexDirection: 'column',
      gap: '20px'
    },
    stat: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      padding: '15px',
      backgroundColor: '#f8f9fa',
      borderRadius: '8px'
    },
    statNumber: {
      fontSize: '32px',
      fontWeight: 'bold',
      color:"transparent",
      backgroundImage:"linear-gradient(90deg, #FF5B17, #FFC000)", 
      backgroundClip: "text"
    },
    statLabel: {
      fontSize: '14px',
      color: '#666',
      marginTop: '5px'
    },
    mainContent: {
      display: 'flex',
      flexDirection: 'column',
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '10px'
    },
    sectionTitle: {
      fontSize: '50px',
      color: 'white',
    },
    challengesGrid: {
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      maxHeight: '70vh',
      overflowY: 'auto',
      paddingRight: '10px'
    },
    challengeCard: {
      backgroundColor: 'white',
      borderRadius: '12px',
      padding: '25px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
      transition: 'all 0.3s ease',
      border: '1px solid #eaeaea',
      cursor: 'pointer'
    },
    challengeHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: '15px'
    },
    challengeTitle: {
      fontSize: '20px',
      fontWeight: '600',
      color: '#1a1a1a',
      marginBottom: '5px'
    },
    challengeAuthor: {
      fontSize: '14px',
      color: '#666'
    },
    challengeParticipants: {
      fontSize: '14px',
      color:"transparent",
      backgroundImage:"linear-gradient(90deg, #FF5B17, #FFC000)", 
      backgroundClip: "text",
      fontWeight: '500'
    },
    challengeDescription: {
      fontSize: '15px',
      color: '#555',
      lineHeight: '1.5',
      marginBottom: '20px'
    },
    challengeTags: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '10px',
      marginBottom: '20px'
    },
    tag: {
      backgroundColor: '#f0f0f0',
      padding: '6px 12px',
      borderRadius: '20px',
      fontSize: '13px',
      color: '#555'
    },
    tagCompleted: {
      backgroundColor: '#e6f7ee',
      color: '#2e7d32'
    },
    challengeDetails: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gap: '15px',
      marginBottom: '20px'
    },
    detail: {
      display: 'flex',
      flexDirection: 'column'
    },
    detailLabel: {
      fontSize: '12px',
      color: '#666',
      textTransform: 'uppercase',
      fontWeight: '500',
      marginBottom: '4px'
    },
    detailValue: {
      fontSize: '16px',
      fontWeight: '600',
      color: '#1a1a1a'
    },
    challengeFooter: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingTop: '15px',
      borderTop: '1px solid #eaeaea'
    },
    challengeMetrics: {
      display: 'flex',
      gap: '25px'
    },
    metric: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    metricValue: {
      fontSize: '18px',
      fontWeight: 'bold',
      color:"transparent",
      backgroundImage:"linear-gradient(90deg, #FF5B17, #FFC000)", 
      backgroundClip: "text",
    },
    metricLabel: {
      fontSize: '13px',
      color: '#666',
      marginTop: '2px'
    },
    joinButton: {
      backgroundImage:"linear-gradient(90deg, #FF5B17, #FFC000)", 
      color: 'white',
      border: 'none',
      borderRadius: '25px',
      padding: '10px 25px',
      fontSize: '14px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.2s ease'
    },
    joinButtonJoined: {
      backgroundColor: '#e0e0e0',
      color: '#666'
    },
  };

  return (
    <div style={styles.app}>
      <div style={styles.container}>
        {/* Sidebar avec statistiques */}
        <aside style={styles.sidebar}>
          <div style={styles.greeting}>
            <h1 style={styles.greeting.h1}>Bonjour, Pablo !</h1>
            <p style={styles.greeting.p}>Prêt pour de nouveaux défis ?</p>
          </div>
          
          <div style={styles.stats}>
            <div style={styles.stat}>
              <span style={styles.statNumber}>3</span>
              <span style={styles.statLabel}>Défis actifs</span>
            </div>
            <div style={styles.stat}>
              <span style={styles.statNumber}>12</span>
              <span style={styles.statLabel}>Défis complétés</span>
            </div>
            <div style={styles.stat}>
              <span style={styles.statNumber}>850</span>
              <span style={styles.statLabel}>Points</span>
            </div>
          </div>
        </aside>

        {/* Contenu principal */}
        <main style={styles.mainContent}>
          <div style={styles.header}>
            <h1 style={styles.sectionTitle}>Défis du jour</h1>
          </div>
          
          {/* Grille des défis avec défilement vertical */}
          <Link to="/Activite" style={noUnderline}>
          <div style={styles.challengesGrid}>
            {dailyChallenges.map((challenge) => (
              <div 
                key={challenge.id}
                style={styles.challengeCard}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.12)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)';
                }}
              >
                <div style={styles.challengeHeader}>
                  <div>
                    <h3 style={styles.challengeTitle}>{challenge.title}</h3>
                    <p style={styles.challengeAuthor}>{challenge.author}</p>
                  </div>
                  <div style={styles.challengeParticipants}>
                    {challenge.participants.length} participants
                  </div>
                </div>
                
                <p style={styles.challengeDescription}>{challenge.description}</p>
                
                <div style={styles.challengeTags}>
                  {challenge.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      style={{
                        ...styles.tag,
                        ...(tag === 'Temps' ? styles.tagCompleted : {})
                      }}
                    >
                      {tag === 'Temps' ? '✓ ' : ''}{tag}
                    </span>
                  ))}
                </div>
                
                <div style={styles.challengeDetails}>
                  <div style={styles.detail}>
                    <span style={styles.detailLabel}>Progression</span>
                    <span style={styles.detailValue}>{challenge.progress}</span>
                  </div>
                  <div style={styles.detail}>
                    <span style={styles.detailLabel}>Date limite</span>
                    <span style={styles.detailValue}>{challenge.deadline}</span>
                  </div>
                  <div style={styles.detail}>
                    <span style={styles.detailLabel}>Difficulté</span>
                    <span style={styles.detailValue}>
                      {'★'.repeat(challenge.difficulty)}{'☆'.repeat(5-challenge.difficulty)}
                    </span>
                  </div>
                </div>
                
                <div style={styles.challengeFooter}>
                  <div style={styles.challengeMetrics}>
                    <div style={styles.metric}>
                      <span style={styles.metricValue}>{challenge.points}</span>
                      <span style={styles.metricLabel}>Points</span>
                    </div>
                  </div>
                  
                  <button 
                    style={{
                      ...styles.joinButton,
                      ...(challenge.joined ? styles.joinButtonJoined : {})
                    }}
                    onClick={() => joinChallenge(challenge.id)}
                    onMouseOver={(e) => {
                      e.target.style.transform = 'translateY(-1px)';
                      e.target.style.boxShadow = '0 4px 8px rgba(0,0,0,0.15)';
                    }}
                    onMouseOut={(e) => {
                      e.target.style.transform = 'translateY(0)';
                      e.target.style.boxShadow = 'none';
                    }}
                  >
                    {challenge.joined ? '✓ Défi rejoint' : 'Rejoindre le défi'}
                  </button>
                </div>
              </div>
            ))}
          </div>
          </Link>
        </main>
      </div>

      {/* Barre de navigation inférieure */}
      <Menu/>
    </div>
  );
}




export default PagePrincipale