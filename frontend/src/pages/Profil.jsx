import React, { useState } from 'react';
import Menu from '../components/Menu';

const Profil = () => {
  const [activeSection, setActiveSection] = useState('profil');

  // Données du profil
  const profileData = {
    name: "Anis",
    level: 5,
    points: 850,
    challenges: 12,
    friends: 23,
    activeChallenges: 3,
    favoriteSports: ["Course à pied", "Fitness", "Cyclisme"]
  };

  // Styles
  const styles = {
    app: {
      // CHANGEMENT: Fond fixe avec dégradé
      position :'fixed',
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh", 
      backgroundImage:"linear-gradient(90deg,rgba(255, 91, 23,0.8), rgba(255, 191, 0, 0.8 ))", 
      backgroundAttachment: 'fixed',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      paddingBottom: '120px'
    },
    container: {
      maxWidth: '800px',
      margin: '0 auto',
      padding: '20px',
      minHeight: 'calc(100vh - 100px)',
      overflowY: 'auto'
    },
    header: {
      textAlign: 'center',
      marginBottom: '30px'
    },
    profileHeader: {
      display: 'flex',
      alignItems: 'center',
      gap: '20px',
      marginBottom: '30px',
      backgroundColor: 'white',
      padding: '25px',
      borderRadius: '15px',
      boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
    },
    avatar: {
      width: '80px',
      height: '80px',
      borderRadius: '50%',
      backgroundImage:"linear-gradient(90deg, #FF5B17, #FFC000)", 
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontSize: '32px',
      fontWeight: 'bold'
    },
    profileInfo: {
      flex: 1
    },
    profileName: {
      fontSize: '24px',
      fontWeight: '700',
      color: '#1a1a1a',
      margin: '0 0 5px 0'
    },
    profileLevel: {
      fontSize: '16px',
      color: '#666',
      margin: '0 0 15px 0'
    },
    editButton: {
      backgroundImage:"linear-gradient(90deg, #FF5B17, #FFC000)",       color: 'white',
      border: 'none',
      borderRadius: '20px',
      padding: '8px 20px',
      fontSize: '14px',
      fontWeight: '600',
      cursor: 'pointer'
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '15px',
      marginBottom: '30px'
    },
    statCard: {
      backgroundColor: 'white',
      borderRadius: '12px',
      padding: '20px',
      textAlign: 'center',
      boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
    },
    statNumber: {
      fontSize: '28px',
      fontWeight: 'bold',
      color:"transparent",
      backgroundImage:"linear-gradient(90deg, #FF5B17, #FFC000)", 
      backgroundClip: "text",
      display: 'block',
      marginBottom: '5px'
    },
    statLabel: {
      fontSize: '14px',
      color: '#666',
      fontWeight: '500'
    },
    sportsSection: {
      backgroundColor: 'white',
      borderRadius: '12px',
      padding: '25px',
      marginBottom: '30px',
      boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
    },
    sectionTitle: {
      fontSize: '20px',
      fontWeight: '600',
      color: '#1a1a1a',
      marginBottom: '15px'
    },
    sportsList: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '10px'
    },
    sportTag: {
      backgroundImage:"linear-gradient(90deg, #FF5B17, #FFC000)", //A changer   
      padding: '8px 16px',
      color: 'white',
      borderRadius: '20px',
      fontSize: '14px',
      fontWeight: '500'
    },
    // Styles pour les autres sections
    sectionNav: {
      display: 'flex',
      gap: '20px',
      marginBottom: '30px',
      borderBottom: '1px solid rgba(255,255,255,0.3)',
      paddingBottom: '15px'
    },
    navButton: {
      background: 'none',
      border: 'none',
      fontSize: '16px',
      color: 'white',
      cursor: 'pointer',
      padding: '10px 0',
      fontWeight: '500',
      position: 'relative'
    },
    navButtonActive: {
      color: 'white',
      fontWeight: '600'
    },
    navButtonActiveAfter: {
      content: '""',
      position: 'absolute',
      bottom: '-16px',
      left: 0,
      right: 0,
      height: '3px',
      backgroundColor: 'white',
      borderRadius: '2px'
    },
    contentSection: {
      backgroundColor: 'white',
      borderRadius: '12px',
      padding: '25px',
      boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
      maxHeight: '40vh',
      overflowY: 'auto'
    },
    subsection: {
      marginBottom: '25px'
    },
    subsectionTitle: {
      fontSize: '18px',
      fontWeight: '600',
      color: '#1a1a1a',
      marginBottom: '15px'
    },
    settingItem: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '15px 0',
      borderBottom: '1px solid #f0f0f0'
    },
    settingLabel: {
      fontSize: '16px',
      color: '#333'
    },
    checkbox: {
      width: '20px',
      height: '20px',
      color:"transparent",
      backgroundImage:"linear-gradient(90deg, #FF5B17, #FFC000)", 
      backgroundClip: "text"
    },
    logoutButton: {
      backgroundColor: '#ff4444',
      color: 'white',
      border: 'none',
      borderRadius: '8px',
      padding: '12px 24px',
      fontSize: '16px',
      fontWeight: '600',
      cursor: 'pointer',
      width: '100%',
      marginTop: '20px'
    }
  };

  // Rendu de la section active
  const renderActiveSection = () => {
    switch (activeSection) {
      case 'notifications':
        return (
          <div style={styles.contentSection}>
            <div style={styles.subsection}>
              <h3 style={styles.subsectionTitle}>Défis et invitations</h3>
              <div style={styles.settingItem}>
                <span style={styles.settingLabel}>Activités des amis</span>
                <input type="checkbox" style={styles.checkbox} defaultChecked />
              </div>
              <div style={styles.settingItem}>
                <span style={styles.settingLabel}>Réalisations</span>
                <input type="checkbox" style={styles.checkbox} defaultChecked />
              </div>
              <div style={styles.settingItem}>
                <span style={styles.settingLabel}>Rappels quotidiens</span>
                <input type="checkbox" style={styles.checkbox} defaultChecked />
              </div>
            </div>
            
            <div style={styles.subsection}>
              <h3 style={styles.subsectionTitle}>Confidentialité</h3>
              <div style={styles.settingItem}>
                <span style={styles.settingLabel}>Profil public</span>
                <input type="checkbox" style={styles.checkbox} defaultChecked />
              </div>
              <div style={styles.settingItem}>
                <span style={styles.settingLabel}>Afficher les statistiques</span>
                <input type="checkbox" style={styles.checkbox} defaultChecked />
              </div>
              <div style={styles.settingItem}>
                <span style={styles.settingLabel}>Demandes d'amis</span>
                <input type="checkbox" style={styles.checkbox} defaultChecked />
              </div>
            </div>
          </div>
        );

      case 'parametres':
        return (
          <div style={styles.contentSection}>
            <div style={styles.subsection}>
              <h3 style={styles.subsectionTitle}>Paramètres avancés</h3>
              <div style={styles.settingItem}>
                <span style={styles.settingLabel}>Connecter des applications</span>
                <input type="checkbox" style={styles.checkbox} />
              </div>
              <div style={styles.settingItem}>
                <span style={styles.settingLabel}>Exporter mes données</span>
                <input type="checkbox" style={styles.checkbox} defaultChecked />
              </div>
              <div style={styles.settingItem}>
                <span style={styles.settingLabel}>Notifications par email</span>
                <input type="checkbox" style={styles.checkbox} defaultChecked />
              </div>
            </div>
            
            <button style={styles.logoutButton}>
              Se déconnecter
            </button>
          </div>
        );

      default: // Profil
        return (
          <>
            <div style={styles.statsGrid}>
              <div style={styles.statCard}>
                <span style={styles.statNumber}>{profileData.challenges}</span>
                <span style={styles.statLabel}>Défis</span>
              </div>
              <div style={styles.statCard}>
                <span style={styles.statNumber}>{profileData.friends}</span>
                <span style={styles.statLabel}>Amis</span>
              </div>
              <div style={styles.statCard}>
                <span style={styles.statNumber}>{profileData.activeChallenges}</span>
                <span style={styles.statLabel}>Actifs</span>
              </div>
            </div>

            <div style={styles.sportsSection}>
              <h2 style={styles.sectionTitle}>Sports favoris</h2>
              <div style={styles.sportsList}>
                {profileData.favoriteSports.map((sport, index) => (
                  <span key={index} style={styles.sportTag}>
                    {sport}
                  </span>
                ))}
              </div>
            </div>
          </>
        );
    }
  };

  return (
    <div style={styles.app}>
      <div style={styles.container}>
        {/* En-tête du profil */}
        <div style={styles.profileHeader}>
          <div style={styles.avatar}>
            {profileData.name.charAt(0)}
          </div>
          <div style={styles.profileInfo}>
            <h1 style={styles.profileName}>{profileData.name}</h1>
            <p style={styles.profileLevel}>
              Niveau {profileData.level} • {profileData.points} points
            </p>
            <button style={styles.editButton}>
              Modifier le profil
            </button>
          </div>
        </div>

        {/* Navigation entre sections */}
        <nav style={styles.sectionNav}>
          <button 
            style={{
              ...styles.navButton,
              ...(activeSection === 'profil' && styles.navButtonActive)
            }}
            onClick={() => setActiveSection('profil')}
          >
            Profil
            {activeSection === 'profil' && <div style={styles.navButtonActiveAfter} />}
          </button>
          <button 
            style={{
              ...styles.navButton,
              ...(activeSection === 'notifications' && styles.navButtonActive)
            }}
            onClick={() => setActiveSection('notifications')}
          >
            Notifications
            {activeSection === 'notifications' && <div style={styles.navButtonActiveAfter} />}
          </button>
          <button 
            style={{
              ...styles.navButton,
              ...(activeSection === 'parametres' && styles.navButtonActive)
            }}
            onClick={() => setActiveSection('parametres')}
          >
            Paramètres
            {activeSection === 'parametres' && <div style={styles.navButtonActiveAfter} />}
          </button>
        </nav>

        {/* Contenu de la section active */}
        {renderActiveSection()}
      </div>
            
      {/* Menu de navigation */}
      <Menu />
    </div>
  );
};

export default Profil;  