import { motion } from 'framer-motion';

const HomePage = ({ darkMode }) => {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '2rem',
      paddingTop: '8rem',
    }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ textAlign: 'center' }}
      >
        <h1 style={{
          fontFamily: '"Press Start 2P", cursive',
          fontSize: 'clamp(1rem, 3vw, 1.5rem)',
          color: '#ff6b9d',
          marginBottom: '2rem',
          textShadow: '0 0 20px rgba(255, 107, 157, 0.5)',
        }}>
          Hi, my name is
        </h1>
        
        <h2 style={{
          fontFamily: '"Press Start 2P", cursive',
          fontSize: 'clamp(2rem, 8vw, 5rem)',
          color: 'white',
          marginBottom: '2rem',
          textShadow: '4px 4px 0px rgba(255, 107, 157, 0.3)',
          lineHeight: 1.3,
        }}>
          SARAYU MARRI
        </h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          style={{
            fontFamily: '"Press Start 2P", cursive',
            fontSize: 'clamp(1rem, 2vw, 1.5rem)',
            color: '#ff6b9d',
            textShadow: '0 0 10px rgba(255, 107, 157, 0.3)',
          }}
        >
          Welcome!
        </motion.p>
      </motion.div>
    </div>
  );
};

export default HomePage;