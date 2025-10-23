// contexts/NotificationContext.jsx
import React, { createContext, useContext, useState } from 'react';

const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'invitation',
      title: 'Invitation de défi',
      content: 'Marie L. t\'a invité à rejoindre le défi "Course 5km"',
      date: '16/12/2024',
      read: false,
      actions: ['Accepter', 'Refuser']
    },
    {
      id: 2,
      type: 'badge',
      title: 'Nouveau badge obtenu !',
      content: 'Félicitations ! Tu as débloqué le badge "Régularité"',
      date: '16/12/2024',
      read: false,
      actions: ['Marquer comme lu']
    },
    {
      id: 3,
      type: 'reminder',
      title: 'Rappel de défi',
      content: 'Le défi "10 000 pas quotidiens" se termine dans 2 jours',
      date: '16/12/2024',
      read: false,
      actions: ['Marquer comme lu']
    },
    {
      id: 4,
      type: 'comment',
      title: 'Nouveau commentaire',
      content: 'Thomas a commenté votre publication "Ma course du matin"',
      date: '15/12/2024',
      read: true,
      actions: ['Voir']
    },
    {
      id: 5,
      type: 'friend_request',
      title: 'Demande d\'ami',
      content: 'Sophie M. veut vous ajouter comme ami',
      date: '15/12/2024',
      read: true,
      actions: ['Accepter', 'Refuser']
    },
    {
      id: 6,
      type: 'ranking',
      title: 'Mise à jour du classement',
      content: 'Vous êtes maintenant 3ème au classement général !',
      date: '14/12/2024',
      read: true,
      actions: ['Voir le classement']
    }
  ]);

  const unreadCount = notifications.filter(notification => !notification.read).length;

  const markAllAsRead = () => {
    setNotifications(prev => prev.map(notif => ({ ...notif, read: true })));
  };

  const markAsRead = (notificationId) => {
    setNotifications(prev =>
      prev.map(notification =>
        notification.id === notificationId
          ? { ...notification, read: true }
          : notification
      )
    );
  };

  return (
    <NotificationContext.Provider value={{
      notifications,
      unreadCount,
      markAllAsRead,
      markAsRead,
      setNotifications
    }}>
      {children}
    </NotificationContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useNotifications = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error('useNotifications must be used within NotificationProvider');
  }
  return context;
};