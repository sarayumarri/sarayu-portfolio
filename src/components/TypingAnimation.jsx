import { useState, useEffect } from 'react';

const TypingAnimation = ({ darkMode }) => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const words = ['Software Engineer', 'Developer', 'Designer', 'Student', 'Artist', 'Researcher', 'Storyteller'];

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % words.length;
      const fullText = words[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, words]);

  return (
    <>
      <p style={{
        fontFamily: '"Press Start 2P", cursive',
        fontSize: 'clamp(1rem, 2vw, 1.5rem)',
        color: '#ff6b9d',
        textShadow: '0 0 10px rgba(255, 107, 157, 0.3)',
        minHeight: '2.5rem',
      }}>
        I am a {text}
        <span style={{
          borderRight: '3px solid #ff6b9d',
          animation: 'blink 0.7s infinite',
          marginLeft: '2px',
        }} />
      </p>

      <style>{`
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}</style>
    </>
  );
};

export default TypingAnimation;