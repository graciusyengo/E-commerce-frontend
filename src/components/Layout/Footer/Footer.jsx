import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.left}>
          <p>© 2024 Mon Application. Tous droits réservés.</p>
        </div>
        <div style={styles.right}>
          <a href="#terms" style={styles.link}>Conditions d'utilisation</a>
          <a href="#privacy" style={styles.link}>Politique de confidentialité</a>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#128A69',
    color: 'white',
    padding: '20px 0',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    width: '100%',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column', // Empile les éléments verticalement pour les petits écrans
    justifyContent: 'center',
    alignItems: 'center',
  },
  left: {
    marginBottom: '10px', // Espace en bas pour les petits écrans
    textAlign: 'center',
  },
  right: {
    display: 'flex',
    flexDirection: 'column', // Liens empilés pour les petits écrans
    textAlign: 'center',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    marginBottom: '10px', // Espacement entre les liens sur mobile
  },
  // Media query pour les grands écrans (au-dessus de 768px)
  '@media (min-width: 768px)': {
    container: {
      flexDirection: 'row', // Disposition horizontale pour les écrans plus larges
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    left: {
      textAlign: 'left', // Réalignement à gauche
      marginBottom: '0', // Supprime le margin-bottom pour les écrans larges
    },
    right: {
      flexDirection: 'row', // Liens en ligne pour les grands écrans
    },
    link: {
      margin: '0 15px', // Espacement horizontal entre les liens
    },
  },
};

export default Footer;


