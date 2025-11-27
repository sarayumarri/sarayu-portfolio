import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const ProjectsPage = ({ darkMode }) => {
  // ADD ALL PROJECTS HERE!
  const projects = [
    {
      title: 'Kinexis (KnightHacks VIII) - Best App',
      date: 'October 2025 - October 2025',
      description: 'Kinexis is a client-side web application that transforms physical therapy by providing real-time skeletal tracking and automated progress reports using just a standard webcam. The platform measures joint angles, repetitions, and range of motion, delivering clinical-grade insights while maintaining user privacy and an engaging, patient-friendly interface. Built with a modern web stack and advanced Python-based computer vision tools, Kinexis streamlines clinician workflows and empowers patients with clear proof of improvement.',
      image: null,
      tags: ['HTML', 'CSS', 'JavaScript', 'Python', 'Flask', 'MediaPipe', 'OpenCV', 'NumPy', 'Pandas', 'Matplotlib', 'SQLite/PostgreSQL', 'Git'],
    },    
    {
      title: 'Like a Good Neighbor (ShellHacks 2025)',
      date: 'September 2025 - September 2025',
      description: 'Like a Good Neighbor is an RPG-inspired educational game that teaches college students about everyday risks and good habits through humor and interactive puzzles. Players navigate daily life, where small mistakes can lead to accidents like house fires or theft, emphasizing the consequences of seemingly simple decisions. Built in Godot with a visual-novel-inspired interface and hand-drawn assets, the game balances entertainment with learning in a lighthearted, approachable way.',
      image: null,
      tags: ['Godot', 'GDScript', 'Figma', 'Git'],
    },
    {
      title: 'CappuConnect (SASE Connect Hackathon 2025) - Best Non-AI Hack',
      date: 'October 2025 - October 2025',
      description: 'CappuConnect is a coffee-chat inspired networking platform designed to make professional development approachable and personalized. Users can discover like-minded peers, swipe to connect, and find events tailored to their skills and goals. Built with a modern full-stack approach, CappuConnect leverages real-time recommendations, secure authentication, and web scraping to create a seamless and engaging networking experience.',
      image: null,
      tags: ['Next.js', 'React', 'Typescript', 'Tailwind CSS', 'MongoDB', 'NextAuth','Git'],
    },
    {
      title: 'Not So Surelocks (UCF STEM Day 2024)',
      date: 'September 2024 - December 2024',
      description: 'The Not So Surelock project was a hands-on forensic science activity created for UCF STEM Day, designed to engage over 100 elementary and middle school students in interactive learning. Participants explored crime scene investigation techniques, analyzed evidence, and solved puzzles to understand the basics of forensic science in a fun and approachable way.',
      image: null,
      tags: ['Canva'],
    },
  ];

  return (
    <div style={{
      minHeight: '100vh',
      padding: 'clamp(6rem, 10vw, 8rem) clamp(1.5rem, 4vw, 3rem) 4rem',
      overflowY: 'auto',
    }}>
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto' 
      }}>
        
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
          Projects
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
          Here are some highlights of my work!
        </motion.p>

        {/* Projects Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 'clamp(1.5rem, 3vw, 2rem)',
        }}>
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;