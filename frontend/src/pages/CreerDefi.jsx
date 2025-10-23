import React, { useState } from 'react';
import Menu from '../components/Menu';

const CreerDefi = () => {
  const [formData, setFormData] = useState({
    titre: '',
    description: '',
    sport: '',
    typeDefi: '',
    dateLimite: '',
    objectif: '',
    visibilite: 'amis',
    amisInvites: ['Marie L.', 'Thomas K.', 'Alex M.', 'Sophie D.', 'Lucas B.', 'Emma R.']
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const toggleAmiInvite = (ami) => {
    setFormData(prev => ({
      ...prev,
      amisInvites: prev.amisInvites.includes(ami)
        ? prev.amisInvites.filter(a => a !== ami)
        : [...prev.amisInvites, ami]
    }));
  };

  const styles = {
    app: {
      minHeight: '100vh',
      backgroundImage:"linear-gradient(90deg,rgba(255, 91, 23,0.8), rgba(255, 191, 0, 0.8 ))", 
      backgroundAttachment: 'fixed',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      paddingBottom: '120px',
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh", 
      position:'fixed',
    },
    container: {
      maxWidth: '800px',
      margin: '0 auto',
      padding: '20px',
      minHeight: 'calc(100vh - 250px)',
      overflowY: 'auto'
    },
    header: {
      textAlign: 'center',
      marginBottom: '25px'
    },
    pageTitle: {
      fontSize: '28px',
      fontWeight: '700',
      color: 'white',
      margin: '0 0 8px 0'
    },
    pageSubtitle: {
      fontSize: '14px',
      color: 'rgba(255,255,255,0.8)',
      margin: 0
    },
    contentCard: {
      backgroundColor: 'white',
      borderRadius: '12px',
      padding: '25px',
      boxShadow: '0 6px 20px rgba(0,0,0,0.15)',
      minHeight: 'calc(100vh - 190px)',
      maxHeight: '50vh',
      overflowY: 'auto'
    },
    sectionTitle: {
      fontSize: '18px',
      fontWeight: '600',
      color: '#1a1a1a',
      marginBottom: '20px'
    },
    formGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '25px',
      alignItems: 'start'
    },
    formGroup: {
      marginBottom: '18px'
    },
    label: {
      display: 'block',
      fontSize: '14px',
      fontWeight: '600',
      color: '#333',
      marginBottom: '6px'
    },
    requiredStar: {
      color: '#ff4444'
    },
    input: {
      width: '100%',
      padding: '10px 12px',
      border: '2px solid #e0e0e0',
      borderRadius: '8px',
      fontSize: '14px',
      transition: 'all 0.3s ease',
      boxSizing: 'border-box'
    },
    /* Date input: start from same base as text input but normalize appearance */
    dateInput: {
      width: '100%',
      padding: '10px 12px',
      border: '2px solid #e0e0e0',
      borderRadius: '8px',
      fontSize: '14px',
      transition: 'all 0.3s ease',
      boxSizing: 'border-box',
      // normalize native date pickers
      WebkitAppearance: 'none',
      MozAppearance: 'textfield',
      appearance: 'none',
      backgroundColor: 'white'
    },
    inputFocus: {
      borderColor: '#667eea',
      outline: 'none',
      boxShadow: '0 0 0 2px rgba(102, 126, 234, 0.1)'
    },
    textarea: {
      width: '100%',
      padding: '10px 12px',
      border: '2px solid #e0e0e0',
      borderRadius: '8px',
      fontSize: '14px',
      minHeight: '80px',
      resize: 'vertical',
      fontFamily: 'inherit',
      transition: 'all 0.3s ease',
      boxSizing: 'border-box'
    },
    select: {
      width: '100%',
      padding: '10px 12px',
      border: '2px solid #e0e0e0',
      borderRadius: '8px',
      fontSize: '14px',
      backgroundColor: 'white',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      boxSizing: 'border-box'
    },
    divider: {
      border: 'none',
      height: '1px',
      backgroundColor: '#e0e0e0',
      margin: '20px 0'
    },
    hintText: {
      fontSize: '12px',
      color: '#666',
      fontStyle: 'italic',
      marginTop: '6px'
    },
    // Styles pour les options de visibilité
    radioGroup: {
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    },
    radioOption: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      cursor: 'pointer'
    },
    radioInput: {
      width: '16px',
      height: '16px',
      accentColor: '#667eea'
    },
    radioLabel: {
      fontSize: '14px',
      color: '#333',
      cursor: 'pointer'
    },
    // Styles pour la liste d'amis
    friendsList: {
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      maxHeight: '180px',
      overflowY: 'auto',
      paddingRight: '5px'
    },
    friendItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      cursor: 'pointer',
      padding: '4px 0'
    },
    checkbox: {
      width: '16px',
      height: '16px',
      accentColor: '#667eea'
    },
    // Styles pour les boutons d'action
    actionButtons: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: '30px',
      paddingTop: '20px',
      borderTop: '1px solid #e0e0e0'
    },
    button: {
      padding: '10px 25px',
      border: 'none',
      borderRadius: '20px',
      fontSize: '14px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease'
    },
    cancelButton: {
      backgroundColor: 'transparent',
      color: '#666',
      border: '2px solid #e0e0e0'
    },
    createButton: {
      backgroundImage:"linear-gradient(90deg, #FF5B17, #FFC000)", 
      color: 'white'
    },
    // Styles pour les champs en ligne
    inlineFields: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '15px'
    }
  };

  return (
    <div style={styles.app}>
      <div style={styles.container}>
        {/* En-tête de la page */}
        <header style={styles.header}>
          <h1 style={styles.pageTitle}>Créer un défi</h1>
        </header>

        {/* Conteneur unique avec toutes les sections */}
        <div style={styles.contentCard}>
          {/* Grille principale avec les deux colonnes */}
          <div style={styles.formGrid}>
            {/* Colonne de gauche - Détails du défi */}
            <div>
              <h2 style={styles.sectionTitle}>Détails du défi</h2>
              
              <div style={styles.formGroup}>
                <label style={styles.label}>
                  Titre du défi <span style={styles.requiredStar}>*</span>
                </label>
                <input
                  type="text"
                  placeholder="Ex: Course 5km en moins de 25min"
                  style={styles.input}
                  value={formData.titre}
                  onChange={(e) => handleInputChange('titre', e.target.value)}
                  onFocus={(e) => e.target.style = {...styles.input, ...styles.inputFocus}}
                  onBlur={(e) => e.target.style = styles.input}
                />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>Description</label>
                <textarea
                  placeholder="Décris ton défi en quelques mots..."
                  style={styles.textarea}
                  value={formData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  onFocus={(e) => e.target.style = {...styles.textarea, ...styles.inputFocus}}
                  onBlur={(e) => e.target.style = styles.textarea}
                />
              </div>

              <hr style={styles.divider} />

              {/* Champs en ligne pour sport et type */}
              <div style={styles.inlineFields}>
                <div style={styles.formGroup}>
                  <label style={styles.label}>
                    Sport / Catégorie <span style={styles.requiredStar}>*</span>
                  </label>
                  <select
                    style={styles.select}
                    value={formData.sport}
                    onChange={(e) => handleInputChange('sport', e.target.value)}
                  >
                    <option value="">Choisir un sport</option>
                    <option value="course">Course à pied</option>
                    <option value="fitness">Fitness</option>
                    <option value="cyclisme">Cyclisme</option>
                    <option value="natation">Natation</option>
                    <option value="yoga">Yoga</option>
                  </select>
                </div>

                <div style={styles.formGroup}>
                  <label style={styles.label}>
                    Type de défi <span style={styles.requiredStar}>*</span>
                  </label>
                  <select
                    style={styles.select}
                    value={formData.typeDefi}
                    onChange={(e) => handleInputChange('typeDefi', e.target.value)}
                  >
                    <option value="">Type de mesure</option>
                    <option value="distance">Distance</option>
                    <option value="temps">Temps</option>
                    <option value="repetitions">Répétitions</option>
                    <option value="frequence">Fréquence</option>
                  </select>
                </div>
              </div>

              {/* Champs en ligne pour date et objectif */}
              <div style={styles.inlineFields}>
                <div style={styles.formGroup}>
                  <label style={styles.label}>
                      Date limite <span style={styles.requiredStar}>*</span>
                    </label>
                    {/* Use native date picker for better UX. Value will be stored as YYYY-MM-DD. */}
                    <input
                      type="date"
                      style={styles.input}
                      value={formData.dateLimite}
                      onChange={(e) => handleInputChange('dateLimite', e.target.value)}
                      onFocus={(e) => e.target.style = {...styles.input, ...styles.inputFocus}}
                      onBlur={(e) => e.target.style = styles.input}
                    />
                </div>

                <div style={styles.formGroup}>
                  <label style={styles.label}>
                    Objectif <span style={styles.requiredStar}>*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: 5, 25, 1000"
                    style={styles.input}
                    value={formData.objectif}
                    onChange={(e) => handleInputChange('objectif', e.target.value)}
                    onFocus={(e) => e.target.style = {...styles.input, ...styles.inputFocus}}
                    onBlur={(e) => e.target.style = styles.input}
                  />
                </div>
              </div>
              <div style={styles.hintText}>Sélectionnez d'abord le type de défi</div>
            </div>

            {/* Colonne de droite - Visibilité et invitations */}
            {/* <div> */}
              
              <div style={styles.radioGroup}>
              <h2 style={styles.sectionTitle}>Visibilité du défi</h2>
                <label style={styles.radioOption}>
                  <input
                    type="radio"
                    name="visibilite"
                    style={styles.radioInput}
                    checked={formData.visibilite === 'public'}
                    onChange={() => handleInputChange('visibilite', 'public')}
                  />
                  <span style={styles.radioLabel}>Public - Visible par tous</span>
                </label>
                
                <label style={styles.radioOption}>
                  <input
                    type="radio"
                    name="visibilite"
                    style={styles.radioInput}
                    checked={formData.visibilite === 'amis'}
                    onChange={() => handleInputChange('visibilite', 'amis')}
                  />
                  <span style={styles.radioLabel}>Amis seulement</span>
                </label>
                
                <label style={styles.radioOption}>
                  <input
                    type="radio"
                    name="visibilite"
                    style={styles.radioInput}
                    checked={formData.visibilite === 'prive'}
                    onChange={() => handleInputChange('visibilite', 'prive')}
                  />
                  <span style={styles.radioLabel}>Privé - Sur invitation</span>
                </label>
              {/* </div> */}

              <hr style={styles.divider} />

              <h3 style={{...styles.sectionTitle, fontSize: '16px', marginBottom: '15px'}}>
                Inviter des amis
              </h3>

              <div style={styles.friendsList}>
                {['Marie L.', 'Thomas K.', 'Alex M.', 'Sophie D.', 'Lucas B.', 'Emma R.'].map((ami) => (
                  <label key={ami} style={styles.friendItem}>
                    <input
                      type="checkbox"
                      style={styles.checkbox}
                      checked={formData.amisInvites.includes(ami)}
                      onChange={() => toggleAmiInvite(ami)}
                    />
                    <span style={styles.radioLabel}>{ami}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Boutons d'action en bas */}
          <div style={styles.actionButtons}>
            {/* <button
              style={{...styles.button, ...styles.cancelButton}}
              onClick={() => console.log('Annulation')}
            >
              Annuler
            </button> */}
            <button
              style={{...styles.button, ...styles.createButton, display: 'block', margin: 'auto'}}
              onClick={() => console.log('Défi créé:', formData)}
            >
              Créer le défi
            </button>
          </div>
        </div>
      </div>

      {/* Menu de navigation */}
      <Menu />
    </div>
  );
};

export default CreerDefi;