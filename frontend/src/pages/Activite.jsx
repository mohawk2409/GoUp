import React, { useState } from 'react';
import Menu from '../components/Menu';

const Activite = () => {
  const [commentText, setCommentText] = useState('');

  // Données du défi
  const challengeData = {
    title: "ML Course 5km en moins de 25min",
    author: "Marie L.",
    description: "Défi pour améliorer nos temps sur 5km !",
    tags: ["Course à pied", "Temps"],
    progress: "8/15",
    status: "en cours",
    participants: 12 // ← Nombre de participants ajouté
  };

  // Classement des participants
  const ranking = [
    { position: 1, initials: "ML", name: "Marie L.", progress: 85, isLeader: true },
    { position: 2, initials: "TK", name: "Thomas K.", progress: 72, isLeader: false },
    { position: 3, initials: "AM", name: "Alex M.", progress: 68, isLeader: false }
  ];

  // Commentaires
  const comments = [
    {
      id: 1,
      author: "Thomas K.",
      content: "Super défi ! J'ai déjà fait 3km ce matin",
      date: "16/12/2024 09:30:00",
      replies: 3
    },
    {
      id: 2,
      author: "Sophie D.",
      content: "Quelqu'un pour courir ensemble demain ?",
      date: "16/12/2024 08:15:00",
      replies: 2
    },
    {
      id: 3,
      author: "Marie L.",
      content: "Allez les amis, on peut le faire ! 😊",
      date: "15/12/2024 20:45:00",
      replies: 5
    }
  ];

  const styles = {
    app: {
      minHeight: '100vh',
      backgroundImage:"linear-gradient(90deg,rgba(255, 91, 23,0.8), rgba(255, 191, 0, 0.8 ))", 
      backgroundAttachment: 'fixed',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      paddingBottom: '120px',
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh", 
    },
    container: {
      maxWidth: '7  00px',
      margin: '0 auto',
      padding: '20px',
      minHeight: 'calc(100vh - 150px)',
      overflowY: 'auto',
      maxHeight: '50vh',
    },
    contentCard: {
      backgroundColor: 'white',
      borderRadius: '12px',
      padding: '25px',
      boxShadow: '0 6px 20px rgba(0,0,0,0.15)',
      marginBottom: '20px'
    },
    pageTitle: {
      fontSize: '32px',
      fontWeight: '700',
      color: 'white',
      marginTop: '25px'
    },
    sectionTitle: {
      fontSize: '18px',
      fontWeight: '600',
      color: '#1a1a1a',
      marginBottom: '15px'
    },
    challengeHeader: {
      marginBottom: '20px'
    },
    challengeTitle: {
      fontSize: '20px',
      fontWeight: '600',
      color: '#1a1a1a',
      margin: '0 0 5px 0'
    },
    challengeAuthor: {
      fontSize: '14px',
      color: '#666',
      margin: '0 0 15px 0'
    },
    challengeDescription: {
      fontSize: '15px',
      color: '#555',
      lineHeight: '1.5',
      marginBottom: '20px'
    },
    participantsCount: {
      fontSize: '14px',
      color:"transparent",
      backgroundImage:"linear-gradient(90deg, #FF5B17, #FFC000)", 
      backgroundClip: "text",
      fontWeight: '600',
      marginBottom: '15px'
    },
    tagsContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '10px',
      marginBottom: '20px'
    },
    tag: {
      backgroundColor: '#f0f0f0',
      padding: '6px 12px',
      borderRadius: '15px',
      fontSize: '13px',
      color: '#555'
    },
    divider: {
      border: 'none',
      height: '1px',
      backgroundColor: '#eaeaea',
      margin: '25px 0'
    },
    // Styles pour le classement
    rankingList: {
      display: 'flex',
      flexDirection: 'column',
      gap: '15px'
    },
    rankingItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '15px',
      padding: '12px',
      backgroundColor: '#f8f9fa',
      borderRadius: '10px'
    },
    rankPosition: {
      fontSize: '16px',
      fontWeight: '600',
      color:"transparent",
      backgroundImage:"linear-gradient(90deg, #FF5B17, #FFC000)", 
      backgroundClip: "text",
      minWidth: '30px'
    },
    avatar: {
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      backgroundImage:"linear-gradient(90deg, #FF5B17, #FFC000)", 
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontSize: '14px',
      fontWeight: '600'
    },
    userInfo: {
      flex: 1
    },
    userName: {
      fontSize: '14px',
      fontWeight: '600',
      color: '#1a1a1a',
      margin: '0 0 2px 0'
    },
    userFullName: {
      fontSize: '12px',
      color: '#666',
      margin: 0
    },
    progressBar: {
      width: '80px',
      height: '6px',
      backgroundColor: '#e0e0e0',
      borderRadius: '3px',
      overflow: 'hidden'
    },
    progressFill: {
      height: '100%',
      backgroundImage:"linear-gradient(90deg, #FF5B17, #FFC000)", 
      borderRadius: '3px'
    },
    progressText: {
      fontSize: '12px',
      color: '#666',
      fontWeight: '500',
      minWidth: '35px',
      textAlign: 'right'
    },
    leaderBadge: {
      backgroundColor: '#ffd700',
      color: '#333',
      fontSize: '10px',
      fontWeight: '600',
      padding: '2px 6px',
      borderRadius: '8px',
      marginLeft: '8px'
    },
    // Styles pour les commentaires
    commentsList: {
      display: 'flex',
      flexDirection: 'column',
      gap: '20px'
    },
    commentItem: {
      paddingBottom: '20px',
      borderBottom: '1px solid #eaeaea'
    },
    commentHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: '8px'
    },
    commentAuthor: {
      fontSize: '15px',
      fontWeight: '600',
      color: '#1a1a1a',
      margin: 0
    },
    commentDate: {
      fontSize: '12px',
      color: '#666',
      margin: 0
    },
    commentContent: {
      fontSize: '14px',
      color: '#555',
      lineHeight: '1.4',
      marginBottom: '10px'
    },
    replyButton: {
      backgroundColor: 'transparent',
      border: 'none',
      color:"transparent",
      backgroundImage:"linear-gradient(90deg, #FF5B17, #FFC000)", 
      backgroundClip: "text",
      fontSize: '12px',
      fontWeight: '500',
      cursor: 'pointer',
      padding: 0
    },
    // Zone de commentaire
    commentForm: {
      marginTop: '25px'
    },
    commentInput: {
      width: '100%',
      padding: '12px 16px',
      border: '2px solid #e0e0e0',
      borderRadius: '10px',
      fontSize: '14px',
      minHeight: '80px',
      resize: 'vertical',
      fontFamily: 'inherit',
      boxSizing: 'border-box',
      marginBottom: '15px'
    },
    submitButton: {
      backgroundImage:"linear-gradient(90deg, #FF5B17, #FFC000)", 
      color: 'white',
      border: 'none',
      borderRadius: '20px',
      padding: '10px 25px',
      fontSize: '14px',
      fontWeight: '600',
      cursor: 'pointer'
    },
    submitButtonDisabled: {
      opacity: 0.5,
      cursor: 'not-allowed'
    }
  };

  return (
    <div style={styles.app}>
     <h1 style={{...styles.pageTitle, textAlign:'center'}}>Détails du défi</h1>
      <div style={styles.container}>
        {/* Section Détails du défi */}
        <div style={styles.contentCard}>
          
          <div style={styles.challengeHeader}>
            <h2 style={styles.challengeTitle}>{challengeData.title}</h2>
            <p style={styles.challengeAuthor}>Créé par {challengeData.author}</p>
            <p style={styles.challengeDescription}>{challengeData.description}</p>
            
            {/* Nombre de participants ajouté */}
            <div style={styles.participantsCount}>
              {challengeData.participants} participants
            </div>
            
            <div style={styles.tagsContainer}>
              {challengeData.tags.map((tag, index) => (
                <span key={index} style={styles.tag}>
                  {tag}
                </span>
              ))}
              <span style={styles.tag}>Terminé</span>
            </div>
          </div>

          <hr style={styles.divider} />

          {/* Classement */}
          <h3 style={styles.sectionTitle}>Classement</h3>
          <div style={styles.rankingList}>
            {ranking.map((user) => (
              <div key={user.position} style={styles.rankingItem}>
                <span style={styles.rankPosition}>{user.position}</span>
                <div style={styles.avatar}>{user.initials}</div>
                <div style={styles.userInfo}>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <p style={styles.userName}>{user.name}</p>
                    {user.isLeader && (
                      <span style={styles.leaderBadge}>Leader</span>
                    )}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={styles.progressBar}>
                      <div 
                        style={{
                          ...styles.progressFill,
                          width: `${user.progress}%`
                        }}
                      />
                    </div>
                    <span style={styles.progressText}>{user.progress}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section Commentaires */}
        <div style={styles.contentCard}>
          <h2 style={styles.pageTitle}>Commentaires ({comments.length})</h2>
          
          <div style={styles.commentsList}>
            {comments.map((comment) => (
              <div key={comment.id} style={styles.commentItem}>
                <div style={styles.commentHeader}>
                  <h4 style={styles.commentAuthor}>{comment.author}</h4>
                  <p style={styles.commentDate}>{comment.date}</p>
                </div>
                <p style={styles.commentContent}>{comment.content}</p>
                <button style={styles.replyButton}>
                  {comment.replies} Répondre
                </button>
              </div>
            ))}
          </div>

          <hr style={styles.divider} />

          {/* Zone d'ajout de commentaire */}
          <div style={styles.commentForm}>
            <textarea
              style={styles.commentInput}
              placeholder="Ajouter un commentaire..."
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
            />
            <button 
              style={{
                ...styles.submitButton,
                ...(!commentText.trim() && styles.submitButtonDisabled)
              }}
              disabled={!commentText.trim()}
            >
              Publier le commentaire
            </button>
          </div>
        </div>
      </div>

      {/* Menu de navigation */}
      <Menu />
    </div>
  );
};

export default Activite;