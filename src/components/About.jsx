import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

// Star Sticker Component
const StarSticker = ({ x, y, scale, rotation, opacity, imageSrc, size }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity, scale }}
    transition={{ duration: 0.3 }}
    style={{
      position: 'absolute',
      left: `calc(50% + ${x}px)`,
      top: `calc(50% + ${y}px)`,
      transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
      zIndex: 0,
    }}
  >
    <img 
      src={imageSrc}
      alt="star"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        objectFit: 'contain',
      }}
    />
  </motion.div>
);

const AboutPage = ({ darkMode }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = (e) => {
      const container = e.target;
      setScrollY(container.scrollTop);
    };

    const scrollContainer = document.getElementById('about-scroll-container');
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
      return () => scrollContainer.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const scrollProgress = Math.min(scrollY / 200, 1);

  // Star positions - they emerge from behind the image
  const stars = [
    { baseX: -220, baseY: -200, rotation: -25, scale: 0.8, size: 75, imageSrc: '/images/buttonheart.png' },
    { baseX: 230, baseY: -190, rotation: 35, scale: 0.9, size: 70, imageSrc: '/images/metalicheart.png' },
    { baseX: -210, baseY: 180, rotation: 15, scale: 0.85, size: 80, imageSrc: '/images/patchheart.png' },
    { baseX: 220, baseY: 185, rotation: -40, scale: 0.8, size: 65, imageSrc: '/images/buttonheart.png' },
    { baseX: -260, baseY: -60, rotation: 50, scale: 0.75, size: 85, imageSrc: '/images/metalicheart.png' },
    { baseX: 250, baseY: 25, rotation: -15, scale: 0.9, size: 70, imageSrc: '/images/patchheart.png' },
    { baseX: 0, baseY: -240, rotation: 25, scale: 0.8, size: 75, imageSrc: '/images/buttonheart.png' },
    { baseX: 0, baseY: 240, rotation: -30, scale: 0.85, size: 80, imageSrc: '/images/metalicheart.png' },
  ];

  return (
    <div
      id="about-scroll-container"
      style={{
        height: '100vh',
        overflowY: 'auto',
        overflowX: 'hidden',
      }}
    >
      <div style={{
        minHeight: '200vh',
        padding: 'clamp(6rem, 10vw, 8rem) clamp(1.5rem, 4vw, 3rem) 4rem',
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: window.innerWidth > 768 ? '1fr 1.5fr' : '1fr',
          gap: '4rem',
          alignItems: 'start',
        }}>
          
          {/* Left: Circle Image with Stars Behind */}
          <div style={{ position: 'sticky', top: '150px' }}>
            <div style={{ position: 'relative', width: '70%', paddingTop: '70%', marginLeft: '5%', marginRight: 'auto' }}>
              
              {/* Stars behind - emerge as you scroll */}
              {stars.map((star, i) => (
                <StarSticker
                  key={i}
                  x={star.baseX * scrollProgress}
                  y={star.baseY * scrollProgress}
                  scale={star.scale * scrollProgress}
                  rotation={star.rotation}
                  opacity={scrollProgress}
                  imageSrc={star.imageSrc}
                  size={star.size}
                />
              ))}
              
              {/* Circle Image - always on top */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                overflow: 'hidden',
                border: '4px solid #ff6b9d',
                boxShadow: '0 0 30px rgba(255, 107, 157, 0.5)',
                zIndex: 10,
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              }}>
              <img 
                src="/images/sarayu.png"
                alt="Sarayu Marri"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center',
                }}
              />
              </div>
            </div>
          </div>

          {/* Right: Text Content */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              style={{
                fontFamily: '"Press Start 2P", cursive',
                fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
                color: '#ff6b9d',
                marginBottom: '2rem',
                textShadow: '0 0 20px rgba(255, 107, 157, 0.5)',
              }}
            >
              About Me
            </motion.h2>

            <div style={{
              fontFamily: 'Arial, sans-serif',
              fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
              lineHeight: 1.8,
              color: 'white',
              marginBottom: '2rem',
            }}>
              <h3 style={{
                fontFamily: '"Press Start 2P", cursive',
                fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
                color: 'white',
                marginBottom: '1rem',
                lineHeight: 1.4,
              }}>
                Hi, my name is<br/>SARAYU MARRI
              </h3>
              
              <p style={{ marginBottom: '1.5rem' }}>
                I am an undergraduate student at the University of Central Florida, studying Computer Science with a minor in Digital Media. As a proud member of the Burnett Honors College, I have served as both a Team Leader and an Orientation Ambassador, mentoring and supporting fellow students.
              </p>

              <p style={{ marginBottom: '1.5rem' }}>
                Beyond mentoring, I am passionate about game development, virtual reality, and creating immersive, interactive experiences that merge technology with design. Since picking up my first VR headset, I have been driven to pursue this path, and I am continually seeking opportunities to expand my skills as a developer.
              </p>

              <p>
                My coursework and independent projects have allowed me to develop a solid background in programming, with familiarity in languages including C, C++, Java, HTML, and CSS. In addition, I have explored the field of UI/UX design, creating visuals and prototypes using tools such as Figma, Adobe Illustrator, Photoshop, and Unity.
              </p>
            </div>
          </div>
        </div>

        {/* Scroll instruction */}
        <div style={{
          textAlign: 'center',
          marginTop: '4rem',
          color: '#ff6b9d',
          fontFamily: '"Press Start 2P", cursive',
          fontSize: '0.9rem',
          opacity: scrollProgress < 0.3 ? 1 : 0,
          transition: 'opacity 0.3s',
        }}>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;