import { motion } from 'framer-motion';

const About = () => {
  return (
    <section style={{
      minHeight: '100vh',
      padding: '6rem 2rem',
      background: 'var(--warm-white)',
      position: 'relative',
    }}>
      {/* Decorative star in corner */}
      <motion.div
        initial={{ rotate: 0, scale: 0 }}
        whileInView={{ rotate: 360, scale: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        viewport={{ once: true }}
        style={{
          position: 'absolute',
          top: '4rem',
          right: '4rem',
          opacity: 0.15,
        }}
      >
        <svg width="120" height="120" viewBox="0 0 120 120">
          <path
            d="M60 10L66.18 44.36L100 50L66.18 55.64L60 90L53.82 55.64L20 50L53.82 44.36L60 10Z"
            fill="var(--amber-400)"
          />
        </svg>
      </motion.div>

      <div style={{
        maxWidth: '900px',
        margin: '0 auto',
      }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 6vw, 3.5rem)',
            fontWeight: 700,
            color: 'var(--brown-900)',
            marginBottom: '2rem',
            position: 'relative',
            display: 'inline-block',
          }}>
            About Me
            <div style={{
              position: 'absolute',
              bottom: '-10px',
              left: 0,
              width: '60%',
              height: '4px',
              background: 'linear-gradient(90deg, var(--amber-400) 0%, var(--seafoam-400) 100%)',
              borderRadius: '2px',
            }} />
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          style={{
            fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
            lineHeight: 1.8,
            color: 'var(--brown-800)',
            marginBottom: '3rem',
          }}
        >
          <p style={{ marginBottom: '1.5rem' }}>
            Hey there! I'm a CS and Digital Media major who loves bringing creative ideas to life through code.
            I'm passionate about building experiences that are both beautiful and functional.
          </p>
          <p>
            When I'm not coding, you can find me [add your hobbies/interests here]. 
            I believe the best work happens when creativity meets technical skill, and I'm always excited 
            to explore new technologies and design trends.
          </p>
        </motion.div>

        {/* Skills section with sticker-like tags */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.5rem, 4vw, 2rem)',
            fontWeight: 600,
            color: 'var(--brown-900)',
            marginBottom: '1.5rem',
          }}>
            Skills & Tools
          </h3>
          
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1rem',
          }}>
            {[
              'React', 'JavaScript', 'Python', 'CSS/Tailwind',
              'Node.js', 'Git', 'Figma', 'UI/UX Design',
              'Three.js', 'Framer Motion'
            ].map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ scale: 0, rotate: -10 }}
                whileInView={{ scale: 1, rotate: 0 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ 
                  delay: 0.05 * index,
                  type: 'spring',
                  stiffness: 260,
                  damping: 20 
                }}
                viewport={{ once: true }}
                style={{
                  padding: '0.8rem 1.5rem',
                  background: index % 2 === 0 ? 'var(--amber-100)' : 'var(--seafoam-100)',
                  border: `2px solid ${index % 2 === 0 ? 'var(--amber-300)' : 'var(--seafoam-300)'}`,
                  borderRadius: '50px',
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: 'var(--brown-900)',
                  cursor: 'default',
                  boxShadow: '2px 4px 12px rgba(0,0,0,0.08)',
                  transition: 'transform 0.2s ease',
                }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
