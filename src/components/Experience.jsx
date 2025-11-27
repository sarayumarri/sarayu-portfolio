import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';

const ExperiencePage = ({ darkMode }) => {
  // ADD ALL YOUR EXPERIENCES HERE!
  const experiences = [
    {
      logo: '🎓',
      logoColor: '#FFD700',
      title: 'TEAM LEADER',
      company: 'UCF Burnett Honors College',
      date: 'August 2025 - Present',
      description: 'Mentored a cohort of 17 students by leading weekly post-lecture discussions on career development, industry insights, and college success, while fostering reflection and community. Attended weekly meetings to reflect on breakout sessions, share challenges and successes, and receive feedback to improve discussion quality and student engagement.',
      tags: ['Leadership', 'Communication', 'Education'],
    },
    {
      logo: '🎓',
      logoColor: '#FFD700',
      title: 'HONORS ORIENTATION AMBASSADOR',
      company: 'UCF First Year Experience',
      date: 'May 2025 - July 2025',
      description: 'Met one-on-one with 20+ incoming students to evaluate high school credits, select courses, and prepare for academic success; delivered personalized support at orientation to ensure a smooth transition to college life.',
      tags: ['Communication', 'Education', 'Excel'],
    },
    {
      logo: '⚡',
      logoColor: '#9b59b6',
      title: 'KNIGHTHACKS DESIGNER',
      company: 'March 2025 - Present',
      date: 'March 2025 - Present',
      description: 'Partnered with development team to plan and execute a large-scale hackathon, contributing to event logistics, branding, merchandise, website design, and designing official event logo.',
      tags: ['Figma', 'Illustrator', 'Canva', 'PowerPoint'],
    },
    {
      logo: '🎓',
      logoColor: '#FFD700',
      title: 'HONORS CONGRESS',
      company: 'UCF Burnett Honors College',
      date: 'September 2024 - May 2025',
      description: 'Served on the Social and Fundraising Committees, organizing events to foster community among honors students, facilitating networking opportunities, and leading fundraising efforts to support nonprofit organizations.',
      tags: ['Organization', 'Communication', 'Education', 'Canva', 'PowerPoint'],
    },
    // ADD MORE EXPERIENCES HERE!
  ];

  return (
    <div style={{
      minHeight: '100vh',
      padding: 'clamp(6rem, 10vw, 8rem) clamp(1.5rem, 4vw, 3rem) 4rem',
      overflowY: 'auto',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Page Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            fontFamily: '"Press Start 2P", cursive',
            fontSize: 'clamp(1.5rem, 5vw, 2.5rem)',
            color: '#ff6b9d',
            marginBottom: '1rem',
            textShadow: '0 0 20px rgba(255, 107, 157, 0.5)',
          }}
        >
          Experience
        </motion.h2>
        
        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          style={{
            color: 'white',
            fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
            marginBottom: '3rem',
            lineHeight: 1.6,
          }}
        >
          During my time at UCF, I have taken on diverse roles and opportunities to strengthen both my leadership and technical skills.
        </motion.p>

        {/* Experience Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 'clamp(1.5rem, 3vw, 2rem)',
        }}>
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} {...exp} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;