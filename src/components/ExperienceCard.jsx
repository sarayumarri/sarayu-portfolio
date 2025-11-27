import { motion } from 'framer-motion';

const ExperienceCard = ({ logo, logoColor, title, company, date, description, tags, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5, boxShadow: '0 10px 40px rgba(255, 107, 157, 0.3)' }}
      style={{
        background: 'rgba(50, 60, 90, 0.6)',
        borderRadius: '20px',
        padding: '2rem',
        border: '2px solid rgba(255, 107, 157, 0.3)',
        backdropFilter: 'blur(10px)',
        transition: 'all 0.3s ease',
      }}
    >
      {/* Logo + Title */}
      <div style={{ 
        display: 'flex', 
        alignItems: 'flex-start', 
        gap: '1rem', 
        marginBottom: '1rem',
        flexWrap: 'wrap',
      }}>
        {/* Logo */}
        <div style={{
          minWidth: '60px',
          width: '60px',
          height: '60px',
          background: logoColor || '#FFD700',
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '2rem',
          flexShrink: 0,
        }}>
          {logo}
        </div>
        
        {/* Title + Company */}
        <div style={{ flex: 1, minWidth: '200px' }}>
          <h3 style={{
            fontFamily: '"Press Start 2P", cursive',
            fontSize: 'clamp(0.8rem, 2vw, 1rem)',
            color: 'white',
            marginBottom: '0.5rem',
            lineHeight: 1.4,
          }}>
            {title}
          </h3>
          <p style={{
            color: '#ff6b9d',
            fontSize: 'clamp(0.75rem, 1.5vw, 0.9rem)',
            fontWeight: 600,
          }}>
            {company}
          </p>
        </div>
      </div>

      {/* Date */}
      <p style={{
        color: 'rgba(255, 255, 255, 0.7)',
        fontSize: 'clamp(0.7rem, 1.3vw, 0.85rem)',
        marginBottom: '1rem',
      }}>
        {date}
      </p>

      {/* Description */}
      <p style={{
        color: 'white',
        fontSize: 'clamp(0.85rem, 1.6vw, 0.95rem)',
        lineHeight: 1.6,
        marginBottom: '1.5rem',
      }}>
        {description}
      </p>

      {/* Tags */}
      <div style={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        gap: '0.5rem' 
      }}>
        {tags.map((tag) => (
          <span
            key={tag}
            style={{
              padding: '0.4rem 0.8rem',
              background: 'rgba(255, 107, 157, 0.2)',
              border: '1px solid #ff6b9d',
              borderRadius: '20px',
              color: '#ff6b9d',
              fontSize: 'clamp(0.65rem, 1.2vw, 0.75rem)',
              fontWeight: 600,
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default ExperienceCard;