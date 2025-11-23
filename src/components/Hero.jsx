import { motion } from 'framer-motion';
import StarBurst from './StarBurst';

const Hero = ({ scrollProgress }) => {
  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      padding: '2rem',
      background: 'linear-gradient(135deg, var(--amber-50) 0%, var(--seafoam-50) 100%)',
    }}>
      {/* Decorative background elements */}
      <div style={{
        position: 'absolute',
        top: '10%',
        right: '10%',
        width: '300px',
        height: '300px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, var(--seafoam-200) 0%, transparent 70%)',
        opacity: 0.4,
        filter: 'blur(60px)',
      }} />
      
      <div style={{
        position: 'absolute',
        bottom: '15%',
        left: '5%',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, var(--amber-200) 0%, transparent 70%)',
        opacity: 0.3,
        filter: 'blur(80px)',
      }} />

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          textAlign: 'center',
          marginBottom: '3rem',
          zIndex: 2,
        }}
      >
        <motion.h1
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.5rem, 8vw, 5rem)',
            fontWeight: 700,
            color: 'var(--brown-900)',
            marginBottom: '1rem',
            letterSpacing: '-0.02em',
          }}
        >
          Your Name
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
            color: 'var(--brown-700)',
            fontWeight: 500,
            letterSpacing: '0.05em',
          }}
        >
          CS & Digital Media Developer
        </motion.p>
      </motion.div>

      {/* Center image with star burst */}
      <div style={{
        position: 'relative',
        zIndex: 5,
      }}>
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          style={{
            position: 'relative',
            width: 'clamp(250px, 40vw, 400px)',
            height: 'clamp(250px, 40vw, 400px)',
            borderRadius: '50%',
            overflow: 'hidden',
            border: '6px solid var(--warm-white)',
            boxShadow: '0 20px 60px rgba(42, 37, 32, 0.2)',
            background: 'var(--seafoam-100)',
          }}
        >
          {/* Placeholder - replace with your actual image */}
          <div style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, var(--amber-200) 0%, var(--seafoam-200) 100%)',
            fontSize: '1.2rem',
            color: 'var(--brown-800)',
            fontWeight: 600,
            textAlign: 'center',
            padding: '2rem',
          }}>
            Replace with<br/>your image
          </div>
        </motion.div>

        {/* Star burst animation */}
        <StarBurst scrollProgress={scrollProgress} />
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        style={{
          position: 'absolute',
          bottom: '3rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
          color: 'var(--brown-700)',
          fontSize: '0.9rem',
          fontWeight: 500,
        }}
      >
        <span>Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        >
          ↓
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;