const Footer = ({ darkMode }) => {
    return (
      <footer style={{
        padding: '2rem',
        margin: 0,
        textAlign: 'center',
        borderTop: '2px solid rgba(255, 107, 157, 0.3)',
        background: darkMode 
          ? 'rgba(20, 30, 50, 0.8)' 
          : 'rgba(15, 25, 45, 0.8)',
        backdropFilter: 'blur(10px)',
      }}>
        <p style={{
          fontFamily: '"Press Start 2P", cursive',
          fontSize: 'clamp(0.6rem, 1.5vw, 0.8rem)',
          color: 'white',
          marginBottom: '0.5rem',
          lineHeight: 1.6,
        }}>
          Built with ⭐ by Sarayu Marri
        </p>
        
        <p style={{
          color: 'rgba(255, 255, 255, 0.6)',
          fontSize: 'clamp(0.6rem, 1.2vw, 0.75rem)',
          margin: 0,
        }}>
          © {new Date().getFullYear()} All rights reserved
        </p>
      </footer>
    );
  };
  
  export default Footer;