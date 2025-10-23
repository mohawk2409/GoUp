import React from 'react';
import Notifications from '../pages/Notifications'
import { useNotifications } from '../context/NotificationContext';
import { Link, useLocation } from "react-router-dom";




function Menu(){
    const location = useLocation(); // récupère l’URL actuelle
    // const unreadCount = Notifications.filter(notification => !notification.read).length;
    
    const { unreadCount } = useNotifications();
    
    const styles = {
        bottomNav: {
      position: "fixed",
      bottom: '1%',
      left: '20%',
      right: '20%',
      display: 'flex',
      borderRadius:'20px',
      justifyContent: 'center',
      gap: '40px',
      padding: '20px',
      backgroundColor: 'white',
      borderTop: '1px solid #eaeaea',
      marginTop: '30px',
      boxShadow:'0 4px 15px rgba(0,0,0,0.12)'
    },
    navItem: {
      background: 'none',
      border: 'none',
      fontSize: '15px',
      color: '#666',
      cursor: 'pointer',
      padding: '8px 16px',
      borderRadius: '6px',
      transition: 'all 0.2s ease'
    },
    navItemActive: {
      color:"transparent",
      backgroundImage:"linear-gradient(90deg, #FF5B17, #FFC000)", 
      backgroundClip: "text",
      fontWeight: '600',
      backgroundColor: '#f0f4ff'
    },
    navItemCreate: {
      backgroundImage:"linear-gradient(90deg, #FF5B17, #FFC000)",  
      color: 'white',
      borderRadius: '25px',
      padding: '10px 20px',
      fontSize: '14px',
      fontWeight: '600'
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
    const isActive = (path) => (location.pathname === path ? styles.navItemActive : {});
    return <>
          <nav style={styles.bottomNav}>
        <Link to="/PagePrincipale">
        <button style={{
          ...styles.navItem,
          ...isActive("/PagePrincipale")
        }}>
          <i className="pi pi-home"style={{marginRight:"8px"}}/>
          Accueil</button>
        </Link>
        
        <Link to="/Tableau">
        <button style={{...styles.navItem,...isActive("/Tableau")}}><i className="pi pi-trophy"style={{marginRight:"8px"}}/>Tableau</button>
        </Link>
        <Link to="/CreerDefi">
        <button style={{
          ...styles.navItem,
          ...styles.navItemCreate
        }}>+</button>
        </Link>
            <Link to="/Notifications">
                <button style={{
                    ...styles.navItem,
                    ...isActive("/Notifications"),
                    position: 'relative' // ← Important pour le positionnement du badge
                }}>
                    <i className="pi pi-bell" style={{marginRight: "8px"}}/>
                    Notifications
                    {unreadCount > 0 && (
                        <span style={styles.notificationDot}>
                            {unreadCount}
                        </span>
                    )}
                </button>
            </Link>   
            <Link to="/Profil">
        <button style={{...styles.navItem,...isActive("/Profil")}}><i className="pi pi-trophy"style={{marginRight:"8px"}}/>Mon profil</button>
        </Link>
      </nav>
    </>
}

export default Menu