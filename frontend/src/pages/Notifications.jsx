// import { useState } from 'react';
import Menu from '../components/Menu.jsx';
import { Link } from "react-router-dom";
import { useNotifications } from '../context/NotificationContext';

//Faire un système de message non lu et la variable count compte le nombre de message non lu
function Notifications(){
    // État des notifications

    const { notifications, unreadCount, markAllAsRead, markAsRead } = useNotifications();   

// Styles
const styles = {
    app: {
      minHeight: '100vh',
      // backgroundColor: '#f8f9fa',
      backgroundImage:"linear-gradient(90deg,rgba(255, 91, 23,0.8), rgba(255, 191, 0, 0.8 ))", 
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh", 
      position: 'fixed',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      paddingBottom: '80px'
    },
    container: {
      maxWidth: '600px',
      margin: '0 auto',
      padding: '20px',

    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '20px'
    },
    pageTitle: {
      fontSize: '28px',
      fontWeight: '700',
      color: 'white',
      margin: 0
    },
    unreadBadge: {
      backgroundColor: '#ff4444',
      color: 'white',
      borderRadius: '12px',
      padding: '4px 12px',
      fontSize: '14px',
      fontWeight: '600'
    },
    markAllButton: {
      backgroundColor: 'transparent',
      border: 'none',
      color: '#4a6cf7',
      fontSize: '14px',
      fontWeight: '600',
      cursor: 'pointer',
      padding: '8px 0',
      marginBottom: '20px',
      width: '100%',
      textAlign: 'left'
    },
    notificationsList: {
      display: 'flex',
      flexDirection: 'column',
      gap: '15px',
      minHeight: 'calc(100vh - 230px)',
      maxHeight: '20vh',  
      overflowY: 'auto' // ← Active le défilement du contenu
    },
    notificationCard: {
      backgroundColor: 'white',
      borderRadius: '12px',
      padding: '20px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
      border: '2px solid transparent',
      transition: 'all 0.3s ease'
    },
    notificationCardUnread: {
      backgroundColor: '#fef68aff',
      opacity: 1,
      border: '2px solid #ff9717ff', 
    },
    notificationHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: '10px'
    },
    notificationTitle: {
      fontSize: '16px',
      fontWeight: '600',
      color: '#1a1a1a',
      margin: 0,
      marginBottom: '5px'
    },
    notificationDate: {
      fontSize: '12px',
      color: '#666',
      margin: 0
    },
    notificationContent: {
      fontSize: '14px',
      color: '#555',
      lineHeight: '1.4',
      marginBottom: '15px'
    },
    notificationActions: {
      display: 'flex',
      gap: '10px',
      flexWrap: 'wrap'
    },
    actionButton: {
      backgroundImage:"linear-gradient(90deg, #FF5B17, #FFC000)", 
      color: 'white',
      border: 'none',
      borderRadius: '20px',
      padding: '8px 16px',
      fontSize: '12px',
      fontWeight: '500',
      cursor: 'pointer',
      transition: 'all 0.2s ease'
    },
    actionButtonSecondary: {
      backgroundColor: 'transparent',
      color: '#666',
      border: '1px solid #ddd'
    },
    divider: {
      border: 'none',
      height: '1px',
      backgroundColor: '#eaeaea',
      margin: '20px 0'
    },
    bottomNav: {
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '40px',
      padding: '20px',
      backgroundColor: 'white',
      borderTop: '1px solid #eaeaea',
      boxShadow: '0 -2px 10px rgba(0,0,0,0.1)',
      zIndex: 1000
    },
    navItem: {
      background: 'none',
      border: 'none',
      fontSize: '15px',
      color: '#666',
      cursor: 'pointer',
      padding: '10px 20px',
      borderRadius: '8px',
      transition: 'all 0.2s ease',
      minWidth: '120px',
      textAlign: 'center',
      position: 'relative'
    },
    navItemActive: {
      color: '#4a6cf7',
      fontWeight: '600',
      backgroundColor: '#f0f4ff'
    },
    navItemCreate: {
      backgroundColor: '#4a6cf7',
      color: 'white',
      borderRadius: '25px',
      padding: '12px 24px',
      fontSize: '14px',
      fontWeight: '600',
      boxShadow: '0 2px 8px rgba(74, 108, 247, 0.3)'
    },
    notificationDot: {
      position: 'absolute',
      top: '8px',
      right: '8px',
      backgroundColor: '#ff4444',
      color: 'white',
      borderRadius: '50%',
      width: '18px',
      height: '18px',
      fontSize: '10px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 'bold'
    }
  };

  return (
    <div style={styles.app}>
      <div style={styles.container}>
        {/* En-tête de la page */}
        <header style={styles.header}>
          <h1 style={styles.pageTitle}>Notifications</h1>
          {unreadCount > 0 && (
            <span style={styles.unreadBadge}>
              {unreadCount} nouvelle{unreadCount > 1 ? 's' : ''}
            </span>
          )}
        </header>

        {/* Bouton "Tout marquer comme lu" */}
        {unreadCount > 0 && (
          <button 
            style={styles.markAllButton}
            onClick={markAllAsRead}
          >
            Tout marquer comme lu
          </button>
        )}

        {/* Liste des notifications */}
        <div style={styles.notificationsList}>
          {notifications.map((notification) => (
            <div 
              key={notification.id}
              style={{
                ...styles.notificationCard,
                ...(!notification.read ? styles.notificationCardUnread : {})
              }}
            >
              <div style={styles.notificationHeader}>
                <div>
                  <h3 style={styles.notificationTitle}>{notification.title}</h3>
                  <p style={styles.notificationDate}>{notification.date}</p>
                </div>
              </div>
              
              <p style={styles.notificationContent}>{notification.content}</p>
              
              <div style={styles.notificationActions}>
                {notification.actions.map((action, index) => (
                  <button
                    key={index}
                    style={{
                      ...styles.actionButton,
                      ...(action === 'Refuser' || action === 'Marquer comme lu' ? styles.actionButtonSecondary : {})
                    }}
                    onClick={() => {
                      if (action === 'Marquer comme lu') {
                        markAsRead(notification.id);
                      }
                      // Ajouter d'autres actions ici selon le type de bouton
                    }}
                    onMouseOver={(e) => {
                      e.target.style.transform = 'translateY(-1px)';
                      e.target.style.boxShadow = '0 2px 4px rgba(0,0,0,0.2)';
                    }}
                    onMouseOut={(e) => {
                      e.target.style.transform = 'translateY(0)';
                      e.target.style.boxShadow = 'none';
                    }}
                  >
                    {action}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Menu/>
      </div>
  );
}

export default Notifications