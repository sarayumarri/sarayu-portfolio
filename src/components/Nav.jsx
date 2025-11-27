import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation = ({ currentPage, setCurrentPage, darkMode, setDarkMode }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pages = ['Home', 'About', 'Experience', 'Projects'];
  
  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      background: darkMode 
        ? 'rgba(20, 30, 50, 0.95)' 
        : 'rgba(15, 25, 45, 0.95)',
      backdropFilter: 'blur(10px)',
      padding: '1rem 1.5rem',
      borderBottom: '2px solid rgba(255, 107, 157, 0.3)',
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        
        {/* Logo - Metallic Heart */}
        <div 
          style={{ 
            width: '50px', 
            height: '50px', 
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }} 
          onClick={() => setCurrentPage('Home')}
          >

            <img 
              src="/images/metalicheart.png" 
              alt="Logo"
              style={{
                width: '45px',
                height: '45px',
                objectFit: 'contain',
              }}
            />
          </div>

        {/* Desktop Navigation - Hidden on mobile */}
        <div style={{ 
          display: 'flex', 
          gap: '2rem', 
          alignItems: 'center',
          '@media (maxWidth: 768px)': { display: 'none' }
        }}>
          {/* Only show on desktop (we'll handle with window width check below) */}
          {window.innerWidth > 768 && (
            <>
              {pages.map((page) => (
                <motion.button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    background: 'none',
                    border: 'none',
                    fontFamily: '"Press Start 2P", cursive',
                    fontSize: '0.75rem',
                    fontWeight: 'normal',
                    color: currentPage === page ? '#ff6b9d' : 'white',
                    cursor: 'pointer',
                    textShadow: currentPage === page ? '0 0 10px #ff6b9d' : 'none',
                    transition: 'all 0.3s ease',
                    padding: '0.5rem',
                  }}
                >
                  {page}
                </motion.button>
              ))}

              {/* Dark/Light Mode Toggle */}
              <motion.button
                onClick={() => setDarkMode(!darkMode)}
                whileHover={{ scale: 1.1, rotate: 180 }}
                whileTap={{ scale: 0.9 }}
                style={{
                  background: 'rgba(255, 107, 157, 0.2)',
                  border: '2px solid #ff6b9d',
                  width: '40px',
                  height: '40px',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.2rem',
                  transition: 'all 0.3s ease',
                }}
              >
                {darkMode ? '☀️' : '🌙'}
              </motion.button>
            </>
          )}
        </div>

        {/* Right side - Social icons + Hamburger (mobile) */}
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          
          {/* Social Icons - Always visible */}
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
            {/* Resume */}
            <motion.a
              href="/images/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, y: -3 }}
              whileTap={{ scale: 0.9 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '36px',
                height: '36px',
                background: 'rgba(255, 107, 157, 0.2)',
                borderRadius: '8px',
                cursor: 'pointer',
                textDecoration: 'none',
              }}
              title="Resume"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" />
                <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" stroke="#1a2a4a" strokeWidth="1" />
              </svg>
            </motion.a>

            {/* LinkedIn */}
            <motion.a
              href="https://www.linkedin.com/in/sarayumarri/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, y: -3 }}
              whileTap={{ scale: 0.9 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '36px',
                height: '36px',
                background: 'rgba(255, 107, 157, 0.2)',
                borderRadius: '8px',
                cursor: 'pointer',
                textDecoration: 'none',
              }}
              title="LinkedIn"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </motion.a>

            {/* GitHub */}
            <motion.a
              href="https://github.com/sarayumarri"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, y: -3 }}
              whileTap={{ scale: 0.9 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '36px',
                height: '36px',
                background: 'rgba(255, 107, 157, 0.2)',
                borderRadius: '8px',
                cursor: 'pointer',
                textDecoration: 'none',
              }}
              title="GitHub"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </motion.a>
          </div>

          {/* Mobile: Dark mode toggle + Hamburger Menu */}
          {window.innerWidth <= 768 && (
            <>
              <motion.button
                onClick={() => setDarkMode(!darkMode)}
                whileTap={{ scale: 0.9 }}
                style={{
                  background: 'rgba(255, 107, 157, 0.2)',
                  border: '2px solid #ff6b9d',
                  width: '40px',
                  height: '40px',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.2rem',
                }}
              >
                {darkMode ? '☀️' : '🌙'}
              </motion.button>

              {/* Hamburger Button */}
              <motion.button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                whileTap={{ scale: 0.9 }}
                style={{
                  background: 'rgba(255, 107, 157, 0.2)',
                  border: '2px solid #ff6b9d',
                  width: '40px',
                  height: '40px',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '4px',
                }}
              >
                <div style={{ width: '20px', height: '2px', background: 'white', transition: 'all 0.3s' }} />
                <div style={{ width: '20px', height: '2px', background: 'white', transition: 'all 0.3s' }} />
                <div style={{ width: '20px', height: '2px', background: 'white', transition: 'all 0.3s' }} />
              </motion.button>
            </>
          )}
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && window.innerWidth <= 768 && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              overflow: 'hidden',
              marginTop: '1rem',
              paddingTop: '1rem',
              borderTop: '1px solid rgba(255, 107, 157, 0.3)',
            }}
          >
            {pages.map((page) => (
              <motion.button
                key={page}
                onClick={() => {
                  setCurrentPage(page);
                  setMobileMenuOpen(false);
                }}
                whileTap={{ scale: 0.95 }}
                style={{
                  display: 'block',
                  width: '100%',
                  background: currentPage === page ? 'rgba(255, 107, 157, 0.2)' : 'transparent',
                  border: 'none',
                  fontFamily: '"Press Start 2P", cursive',
                  fontSize: '0.8rem',
                  color: currentPage === page ? '#ff6b9d' : 'white',
                  cursor: 'pointer',
                  padding: '1rem',
                  textAlign: 'left',
                  transition: 'all 0.3s ease',
                }}
              >
                {page}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;