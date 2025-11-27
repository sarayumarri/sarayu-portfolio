import { motion } from 'framer-motion';

const ProjectCard = ({ title, date, description, image, tags, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ y: -8, boxShadow: '0 12px 40px rgba(255, 107, 157, 0.3)' }}
      style={{
        background: 'rgba(50, 60, 90, 0.6)',
        borderRadius: '20px',
        padding: '2rem',
        border: '2px solid rgba(255, 107, 157, 0.3)',
        backdropFilter: 'blur(10px)',
        transition: 'all 0.3s ease',
      }}
    >
      {/* Project Title */}
      <h3 style={{
        fontFamily: '"Press Start 2P", cursive',
        fontSize: 'clamp(1rem, 2.5vw, 1.3rem)',
        color: 'white',
        marginBottom: '0.5rem',
        lineHeight: 1.4,
      }}>
        {title}
      </h3>

      {/* Date */}
      <p style={{
        color: '#ff6b9d',
        fontSize: 'clamp(0.7rem, 1.5vw, 0.85rem)',
        fontWeight: 600,
        marginBottom: '1rem',
      }}>
        {date}
      </p>

      {/* Description */}
      <p style={{
        color: 'white',
        fontSize: 'clamp(0.85rem, 1.8vw, 0.95rem)',
        lineHeight: 1.6,
        marginBottom: '1.5rem',
      }}>
        {description}
      </p>

      {/* Image placeholder */}
      {image && (
        <div style={{
          width: '100%',
          height: '200px',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          borderRadius: '12px',
          marginBottom: '1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: '0.9rem',
          fontWeight: 600,
        }}>
          {image || 'Project Image'}
        </div>
      )}

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

export default ProjectCard;