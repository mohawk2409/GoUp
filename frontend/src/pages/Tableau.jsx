import React from 'react';
import Menu from '../components/Menu.jsx';
import Gradient from '../components/Gradient.jsx';

function Tableau(){
  // Styles
  const styles = {
    app: {
      minHeight: '100vh',
      position: "fixed",
      backgroundImage:"linear-gradient(90deg,rgba(255, 91, 23,0.8), rgba(255, 191, 0, 0.8 ))", 
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh", 
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      paddingBottom: '80px',
      overflowY: 'auto' // ← Défilement vertical pour toute l'application
    },
    container: {
      maxWidth: '800px',
      margin: '0 auto',
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      gap: '25px',
      minHeight: 'calc(100vh - 80px)' // ← Hauteur minimale pour permettre le défilement
    },
    header: {
      marginBottom: '10px'
    },
    pageTitle: {
      fontSize: '32px',
      fontWeight: '700',
      color: 'white',
      marginBottom: '5px'
    },
    pageSubtitle: {
      fontSize: '16px',
      color: 'white'
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '20px',
      marginBottom: '10px'
    },
    statCard: {
      backgroundColor: 'white',
      borderRadius: '12px',
      padding: '25px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
      textAlign: 'center',
      transition: 'transform 0.2s ease'
    },
    statNumber: {
      fontSize: '36px',
      fontWeight: 'bold',
      color:"transparent",
      backgroundImage:"linear-gradient(90deg, #FF5B17, #FFC000)", 
      backgroundClip: "text",
      display: 'block',
      marginBottom: '8px'
    },
    statLabel: {
      fontSize: '14px',
      color: '#666',
      fontWeight: '500'
    },
    levelSection: {
      backgroundColor: 'white',
      borderRadius: '12px',
      padding: '30px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
      marginBottom: '10px'
    },
    levelHeader: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      marginBottom: '20px'
    },
    levelIcon: {
      fontSize: '24px',
      color: '#ff6b6b'
    },
    levelTitle: {
      fontSize: '20px',
      fontWeight: '600',
      color: '#1a1a1a'
    },
    progressSection: {
      marginBottom: '15px'
    },
    progressLabel: {
      fontSize: '14px',
      color: '#666',
      marginBottom: '8px',
      fontWeight: '500'
    },
    progressBar: {
      width: '100%',
      height: '12px',
      backgroundColor: '#e9ecef',
      borderRadius: '10px',
      overflow: 'hidden',
      marginBottom: '8px'
    },
    progressFill: {
      height: '100%',
      backgroundImage:"linear-gradient(90deg, #FF5B17, #FFC000)", 
      borderRadius: '10px',
      width: '85%' // 850/1000 = 85%
    },
    progressText: {
      fontSize: '14px',
      color: '#666',
      marginBottom: '10px'
    },
    motivationText: {
      fontSize: '16px',
      color: '#4a6cf7',
      fontWeight: '600',
      fontStyle: 'italic'
    },
    activitiesSection: {
      backgroundColor: 'white',
      borderRadius: '12px',
      padding: '30px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
    },
    activitiesTitle: {
      fontSize: '24px',
      fontWeight: '600',
      color: '#1a1a1a',
      marginBottom: '20px'
    },
    activityList: {
      display: 'flex',
      flexDirection: 'column',
      gap: '20px'
    },
    activityItem: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      paddingBottom: '20px',
      borderBottom: '1px solid #eaeaea'
    },
    activityContent: {
      flex: 1
    },
    activityTitle: {
      fontSize: '16px',
      fontWeight: '600',
      color: '#1a1a1a',
      marginBottom: '4px'
    },
    activityDescription: {
      fontSize: '14px',
      color: '#666'
    },
    activityPoints: {
      fontSize: '14px',
      fontWeight: '600',
      color: '#28a745',
      textAlign: 'right'
    }
  };

  // Données des activités récentes
  const recentActivities = [
    {
      id: 1,
      title: "Course 5km",
      description: "Défi complété • 15/12/2024",
      points: "+50 pts"
    },
    {
      id: 2,
      title: "10 000 pas quotidiens",
      description: "Défi rejoint • 14/12/2024",
      points: ""
    },
    {
      id: 3,
      title: "50 pompes",
      description: "Défi complété • 13/12/2024",
      points: "+30 pts"
    },
    {
      id: 4,
      title: "Yoga matinal",
      description: "Défi créé • 12/12/2024",
      points: "+20 pts"
    },
    {
      id: 5,
      title: "Natation 1km",
      description: "Défi complété • 11/12/2024",
      points: "+40 pts"
    },
  ];

  return (
    <div style={styles.app}>
      <div style={styles.container}>
        {/* En-tête de la page */}
        <header style={styles.header}>
          <h1 style={styles.pageTitle}>Tableau de bord</h1>
          <p style={styles.pageSubtitle}>Suivi de tes performances, défis et progression</p>
        </header>

        {/* 1. Section Points et Statistiques */}
        <div style={styles.statsGrid}>
          <div style={styles.statCard}>
            <span style={styles.statNumber}>12</span>
            <span style={styles.statLabel}>Défis complétés</span>
          </div>
          <div style={styles.statCard}>
            <span style={styles.statNumber}>3</span>
            <span style={styles.statLabel}>Défis actifs</span>
          </div>
          <div style={styles.statCard}>
            <span style={styles.statNumber}>850</span>
            <span style={styles.statLabel}>Points total</span>
          </div>
          <div style={styles.statCard}>
            <span style={styles.statNumber}>7</span>
            <span style={styles.statLabel}>Jours consécutifs</span>
          </div>
        </div>

        {/* 2. Section Niveau et Progression */}
        <div style={styles.levelSection}>
          <div style={styles.levelHeader}>
            <h2 style={styles.levelTitle}>Niveau 5</h2>
          </div>
          
          <div style={styles.progressSection}>
            <div style={styles.progressLabel}>Progression vers le niveau 6</div>
            <div style={styles.progressBar}>
              <div style={styles.progressFill}></div>
            </div>
            <div style={styles.progressText}>850/1000 points</div>
          </div>
          
        </div>

        {/* 3. Section Activités récentes */}
        <div style={styles.activitiesSection}>
          <h2 style={styles.activitiesTitle}>Activités récentes</h2>
          
          <div style={styles.activityList}>
            {recentActivities.map((activity) => (
              <div key={activity.id} style={styles.activityItem}>
                <div style={styles.activityContent}>
                  <div style={styles.activityTitle}>{activity.title}</div>
                  <div style={styles.activityDescription}>{activity.description}</div>
                </div>
                {activity.points && (
                  <div style={styles.activityPoints}>{activity.points}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Barre de navigation fixe en bas */}
      <Menu/>
    </div>
  );
};


export default Tableau