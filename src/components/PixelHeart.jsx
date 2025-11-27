const PixelHeart = ({ filled, darkMode }) => {
    const fillColor = filled 
      ? (darkMode ? '#ff6b9d' : '#ff1744') 
      : (darkMode ? '#444' : '#333');
  
    return (
      <svg width="32" height="32" viewBox="0 0 32 32" style={{ margin: '0 4px' }}>
        <rect x="8" y="4" width="4" height="4" fill={fillColor} />
        <rect x="20" y="4" width="4" height="4" fill={fillColor} />
        <rect x="4" y="8" width="4" height="4" fill={fillColor} />
        <rect x="8" y="8" width="4" height="4" fill={fillColor} />
        <rect x="12" y="8" width="4" height="4" fill={fillColor} />
        <rect x="16" y="8" width="4" height="4" fill={fillColor} />
        <rect x="20" y="8" width="4" height="4" fill={fillColor} />
        <rect x="24" y="8" width="4" height="4" fill={fillColor} />
        <rect x="4" y="12" width="4" height="4" fill={fillColor} />
        <rect x="8" y="12" width="4" height="4" fill={fillColor} />
        <rect x="12" y="12" width="4" height="4" fill={fillColor} />
        <rect x="16" y="12" width="4" height="4" fill={fillColor} />
        <rect x="20" y="12" width="4" height="4" fill={fillColor} />
        <rect x="24" y="12" width="4" height="4" fill={fillColor} />
        <rect x="8" y="16" width="4" height="4" fill={fillColor} />
        <rect x="12" y="16" width="4" height="4" fill={fillColor} />
        <rect x="16" y="16" width="4" height="4" fill={fillColor} />
        <rect x="20" y="16" width="4" height="4" fill={fillColor} />
        <rect x="12" y="20" width="4" height="4" fill={fillColor} />
        <rect x="16" y="20" width="4" height="4" fill={fillColor} />
        <rect x="16" y="24" width="4" height="4" fill={fillColor} />
      </svg>
    );
  };
  
  export default PixelHeart;