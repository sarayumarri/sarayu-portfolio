import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from './components/Nav';
import HomePage from './components/Home';
import AboutPage from './components/About';
import ExperiencePage from './components/Experience';
import ProjectsPage from './components/Projects';
import PixelHeart from './components/PixelHeart';

function App() {
  const [currentPage, setCurrentPage] = useState('Home');
  const [darkMode, setDarkMode] = useState(false);

  const pages = ['Home', 'About', 'Experience', 'Projects'];
  const pageIndex = pages.indexOf(currentPage);

  // Function to render the correct page
  const renderPage = () => {
    switch(currentPage) {
      case 'Home':
        return <HomePage darkMode={darkMode} />;
      case 'About':
        return <AboutPage darkMode={darkMode} />;
      case 'Experience':
        return <ExperiencePage darkMode={darkMode} />;
      case 'Projects':
        return <ProjectsPage darkMode={darkMode} />;
      default:
        return <HomePage darkMode={darkMode} />;
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: darkMode 
        ? 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f1419 100%)'
        : 'linear-gradient(135deg, #0a0e27 0%, #1a2a4a 50%, #0a0e27 100%)',
      position: 'relative',
      transition: 'background 0.5s ease',
    }}>
      {/* Navigation Bar - Always visible */}
      <Navigation 
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      {/* Page Content with smooth transitions */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {renderPage()}
        </motion.div>
      </AnimatePresence>

      {/* Pixel Heart Progress Indicator at bottom */}
      <div style={{
        position: 'fixed',
        bottom: '2rem',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: '0.5rem',
        zIndex: 1000,
      }}>
        {pages.map((page, index) => (
          <div 
            key={page} 
            onClick={() => setCurrentPage(page)} 
            style={{ cursor: 'pointer' }}
          >
            <PixelHeart filled={index <= pageIndex} darkMode={darkMode} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;