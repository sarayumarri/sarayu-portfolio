import { motion } from 'framer-motion';
import TypingAnimation from './TypingAnimation';

const HomePage = ({ darkMode }) => {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '2rem',
      paddingTop: '4rem',
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

        {/* Typing Animation Component */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <TypingAnimation darkMode={darkMode} />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          style={{
            fontFamily: '"Press Start 2P", cursive',
            fontSize: 'clamp(0.8rem, 1.5vw, 1rem)',
            color: 'white',
            marginTop: '2rem',
          }}
        >
          Welcome!
        </motion.p>
      </motion.div>
    </div>
  );
};

export default HomePage;