import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section style={{
      minHeight: '80vh',
      padding: '6rem 2rem',
      background: 'linear-gradient(135deg, var(--amber-50) 0%, var(--warm-white) 50%, var(--seafoam-50) 100%)',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      {/* Decorative stars scattered around */}
      {[
        { top: '15%', left: '10%', size: 40, color: 'var(--seafoam-300)', delay: 0 },
        { top: '70%', right: '15%', size: 50, color: 'var(--amber-300)', delay: 0.2 },
        { bottom: '20%', left: '20%', size: 35, color: 'var(--seafoam-400)', delay: 0.4 },
      ].map((star, i) => (
        <motion.div
          key={i}
          initial={{ scale: 0, rotate: 0 }}
          whileInView={{ scale: 1, rotate: 360 }}
          transition={{ 
            delay: star.delay,
            duration: 1,
            ease: 'easeOut'
          }}
          viewport={{ once: true }}
          style={{
            position: 'absolute',
            top: star.top,
            left: star.left,
            right: star.right,
            bottom: star.bottom,
            opacity: 0.15,
          }}
        >
          <svg width={star.size} height={star.size} viewBox="0 0 60 60">
            <path
              d="M30 5L33.09 22.18L50 25L33.09 27.82L30 45L26.91 27.82L10 25L26.91 22.18L30 5Z"
              fill={star.color}
            />
          </svg>
        </motion.div>
      ))}

      <div style={{
        maxWidth: '800px',
        width: '100%',
        textAlign: 'center',
        position: 'relative',
        zIndex: 2,
      }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.5rem, 7vw, 4rem)',
            fontWeight: 700,
            color: 'var(--brown-900)',
            marginBottom: '1.5rem',
          }}>
            Let's Connect!
          </h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            style={{
              fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
              lineHeight: 1.7,
              color: 'var(--brown-800)',
              marginBottom: '3rem',
              maxWidth: '600px',
              margin: '0 auto 3rem',
            }}
          >
            I'm always excited to collaborate on new projects or just chat about tech and design.
            Feel free to reach out!
          </motion.p>
        </motion.div>

        {/* Contact links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1.5rem',
            justifyContent: 'center',
            marginBottom: '3rem',
          }}
        >
          {[
            { label: 'Email', icon: '✉️', link: 'mailto:your.email@example.com', bg: 'var(--amber-100)', border: 'var(--amber-400)' },
            { label: 'GitHub', icon: '💻', link: 'https://github.com/yourusername', bg: 'var(--seafoam-100)', border: 'var(--seafoam-400)' },
            { label: 'LinkedIn', icon: '👔', link: 'https://linkedin.com/in/yourusername', bg: 'var(--amber-100)', border: 'var(--amber-400)' },
          ].map((contact, index) => (
            <motion.a
              key={contact.label}
              href={contact.link}
              target={contact.link.startsWith('http') ? '_blank' : '_self'}
              rel={contact.link.startsWith('http') ? 'noopener noreferrer' : ''}
              initial={{ scale: 0, rotate: -10 }}
              whileInView={{ scale: 1, rotate: 0 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ 
                delay: 0.1 * index,
                type: 'spring',
                stiffness: 260,
                damping: 20 
              }}
              viewport={{ once: true }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.8rem',
                padding: '1rem 2rem',
                background: contact.bg,
                border: `3px solid ${contact.border}`,
                borderRadius: '50px',
                fontSize: '1.1rem',
                fontWeight: 600,
                color: 'var(--brown-900)',
                textDecoration: 'none',
                boxShadow: '4px 6px 16px rgba(0,0,0,0.1)',
                transition: 'all 0.2s ease',
              }}
            >
              <span style={{ fontSize: '1.5rem' }}>{contact.icon}</span>
              {contact.label}
            </motion.a>
          ))}
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          viewport={{ once: true }}
          style={{
            paddingTop: '2rem',
            color: 'var(--brown-700)',
            fontSize: '0.95rem',
          }}
        >
          <p>Built with ☕ and ⭐ by You</p>
          <p style={{ marginTop: '0.5rem', opacity: 0.7 }}>
            © {new Date().getFullYear()} All rights reserved
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;