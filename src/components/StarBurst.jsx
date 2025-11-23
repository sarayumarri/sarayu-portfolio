import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const StarSticker = ({ delay, rotation, scale, x, y, color }) => {
  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        scale: 0,
        rotate: 0,
        x: 0,
        y: 0
      }}
      animate={{ 
        opacity: 1, 
        scale: scale,
        rotate: rotation,
        x: x,
        y: y
      }}
      transition={{
        delay: delay,
        duration: 0.6,
        ease: [0.34, 1.56, 0.64, 1],
        opacity: { duration: 0.3, delay: delay }
      }}
      style={{
        position: 'absolute',
        zIndex: 1,
        filter: 'drop-shadow(2px 4px 8px rgba(0,0,0,0.15))',
      }}
    >
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
        {/* Star sticker with white background */}
        <circle cx="30" cy="30" r="28" fill="white" opacity="0.95"/>
        <path
          d="M30 10L33.09 22.18L45 25L33.09 27.82L30 40L26.91 27.82L15 25L26.91 22.18L30 10Z"
          fill={color}
        />
        {/* Small decorative stars */}
        <path
          d="M20 18L20.8 20.2L23 21L20.8 21.8L20 24L19.2 21.8L17 21L19.2 20.2L20 18Z"
          fill={color}
          opacity="0.6"
        />
        <path
          d="M42 32L42.6 33.8L44.4 34.4L42.6 35L42 36.8L41.4 35L39.6 34.4L41.4 33.8L42 32Z"
          fill={color}
          opacity="0.6"
        />
      </svg>
    </motion.div>
  );
};

const StarBurst = ({ scrollProgress }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (scrollProgress > 0.1) {
      setIsVisible(true);
    }
  }, [scrollProgress]);

  // Define star positions and properties
  const stars = [
    { x: -180, y: -120, rotation: -25, scale: 0.9, color: 'var(--amber-400)', delay: 0.1 },
    { x: 200, y: -100, rotation: 35, scale: 1.1, color: 'var(--seafoam-400)', delay: 0.15 },
    { x: -140, y: 80, rotation: 15, scale: 0.85, color: 'var(--seafoam-300)', delay: 0.2 },
    { x: 180, y: 120, rotation: -40, scale: 1, color: 'var(--amber-600)', delay: 0.25 },
    { x: -220, y: -10, rotation: 50, scale: 0.75, color: 'var(--amber-400)', delay: 0.3 },
    { x: 220, y: 20, rotation: -15, scale: 0.95, color: 'var(--seafoam-400)', delay: 0.18 },
    { x: 0, y: -180, rotation: 25, scale: 0.8, color: 'var(--amber-500)', delay: 0.12 },
    { x: 0, y: 180, rotation: -30, scale: 1.05, color: 'var(--seafoam-300)', delay: 0.28 },
    { x: -100, y: -160, rotation: 45, scale: 0.7, color: 'var(--seafoam-400)', delay: 0.22 },
    { x: 120, y: 160, rotation: -50, scale: 0.88, color: 'var(--amber-400)', delay: 0.16 },
  ];

  if (!isVisible) return null;

  return (
    <div style={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      pointerEvents: 'none',
    }}>
      {stars.map((star, index) => (
        <StarSticker key={index} {...star} />
      ))}
    </div>
  );
};

export default StarBurst;
