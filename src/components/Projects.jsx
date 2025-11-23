import { motion } from 'framer-motion';

const ProjectCard = ({ title, description, tags, link, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      style={{
        background: 'var(--warm-white)',
        borderRadius: '16px',
        padding: '2.5rem',
        border: '2px solid var(--amber-200)',
        boxShadow: '4px 8px 24px rgba(139, 90, 43, 0.1)',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        position: 'relative',
        overflow: 'hidden',
      }}
      onClick={() => link && window.open(link, '_blank')}
    >
      {/* Decorative corner star */}
      <div style={{
        position: 'absolute',
        top: '1rem',
        right: '1rem',
        opacity: 0.2,
      }}>
        <svg width="30" height="30" viewBox="0 0 30 30">
          <path
            d="M15 2L16.545 11.09L25 12.5L16.545 13.91L15 23L13.455 13.91L5 12.5L13.455 11.09L15 2Z"
            fill="var(--seafoam-400)"
          />
        </svg>
      </div>

      <h3 style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(1.5rem, 3vw, 2rem)',
        fontWeight: 700,
        color: 'var(--brown-900)',
        marginBottom: '1rem',
      }}>
        {title}
      </h3>

      <p style={{
        fontSize: '1.1rem',
        lineHeight: 1.7,
        color: 'var(--brown-800)',
        marginBottom: '1.5rem',
      }}>
        {description}
      </p>

      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '0.5rem',
      }}>
        {tags.map((tag) => (
          <span
            key={tag}
            style={{
              padding: '0.4rem 1rem',
              background: 'var(--seafoam-50)',
              border: '1px solid var(--seafoam-300)',
              borderRadius: '20px',
              fontSize: '0.9rem',
              fontWeight: 500,
              color: 'var(--brown-800)',
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: 'Project One',
      description: 'A full-stack application that does amazing things. Built with modern technologies and creative design.',
      tags: ['React', 'Node.js', 'MongoDB'],
      link: 'https://github.com/yourusername/project1',
    },
    {
      title: 'Project Two',
      description: 'An interactive experience combining code and creativity. Features smooth animations and intuitive UX.',
      tags: ['JavaScript', 'Three.js', 'CSS'],
      link: 'https://github.com/yourusername/project2',
    },
    {
      title: 'Project Three',
      description: 'A design-focused application showcasing my skills in both development and visual design.',
      tags: ['React', 'Framer Motion', 'Figma'],
      link: 'https://github.com/yourusername/project3',
    },
  ];

  return (
    <section style={{
      minHeight: '100vh',
      padding: '6rem 2rem',
      background: 'linear-gradient(180deg, var(--warm-white) 0%, var(--seafoam-50) 100%)',
      position: 'relative',
    }}>
      {/* Floating decorative elements */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 6,
          ease: 'easeInOut'
        }}
        style={{
          position: 'absolute',
          top: '20%',
          left: '5%',
          opacity: 0.1,
        }}
      >
        <svg width="80" height="80" viewBox="0 0 80 80">
          <path
            d="M40 5L44.72 29.64L70 34L44.72 38.36L40 63L35.28 38.36L10 34L35.28 29.64L40 5Z"
            fill="var(--amber-400)"
          />
        </svg>
      </motion.div>

      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
      }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{
            textAlign: 'center',
            marginBottom: '4rem',
          }}
        >
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 6vw, 3.5rem)',
            fontWeight: 700,
            color: 'var(--brown-900)',
            marginBottom: '1rem',
          }}>
            Featured Projects
          </h2>
          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
            color: 'var(--brown-700)',
            maxWidth: '600px',
            margin: '0 auto',
          }}>
            A collection of work that showcases my passion for creative development
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem',
        }}>
          {projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          style={{
            textAlign: 'center',
            marginTop: '4rem',
          }}
        >
          <motion.a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              display: 'inline-block',
              padding: '1rem 2.5rem',
              background: 'linear-gradient(135deg, var(--amber-400) 0%, var(--amber-600) 100%)',
              color: 'white',
              fontSize: '1.1rem',
              fontWeight: 600,
              borderRadius: '50px',
              textDecoration: 'none',
              boxShadow: '0 8px 20px rgba(212, 130, 32, 0.3)',
              border: '2px solid var(--amber-600)',
            }}
          >
            View All Projects on GitHub →
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;