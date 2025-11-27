import Navigation from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';
import PixelHeart from './components/PixelHeart';
import { useState } from 'react';

function App() {
  const [currentPage, setCurrentPage] = useState('Home');
  const [darkMode, setDarkMode] = useState(false);
  
  const pages = ['Home', 'About', 'Experience', 'Projects'];
  const pageIndex = pages.indexOf(currentPage);

  const renderPage = () => {
    switch(currentPage) {
      case 'Home':
        return <Home darkMode={darkMode} />;
      case 'About':
        return <About darkMode={darkMode} />;
      case 'Experience':
        return <Experience darkMode={darkMode} />;
      case 'Projects':
        return <Projects darkMode={darkMode} />;
      default:
        return <HomePage darkMode={darkMode} />;
    }
  };

  return (
    <div style={{ 
      background: 'linear-gradient(135deg, #0a0e27 0%, #1a2a4a 50%, #0a0e27 100%)', 
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      margin: 0,
      padding: 0,
    }}>
      <Navigation 
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
        
      <div style={{ flex: 1 }}>
        {renderPage()}
      </div>
      
      {/* Hearts */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '0.5rem',
        padding: '2rem 0',
        position: 'sticky',
        bottom: '0',
        background: 'linear-gradient(to top, rgba(10, 14, 39, 0.95) 0%, transparent 100%)',
        backdropFilter: 'blur(10px)',
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
      
      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;