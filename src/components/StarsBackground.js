import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import '../styles/StarsBackground.css';

const StarsBackground = ({ numberOfStars = 150 }) => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const generateStars = () => {
      const newStars = [];
      for (let i = 0; i < numberOfStars; i++) {
        const style = {
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          width: `${Math.random() * 2 + 1}px`, // Size between 1px and 3px
          height: `${Math.random() * 2 + 1}px`,
          animationDelay: `${Math.random() * 5}s`, // Stagger animation start
          animationDuration: `${Math.random() * 5 + 3}s` // Vary twinkle speed (3s to 8s)
        };
        newStars.push({ id: i, style });
      }
      setStars(newStars);
    };

    generateStars();
    // No dependencies needed if we only generate once on mount
  }, [numberOfStars]); 

  return (
    <div className="stars-background-container">
      {stars.map(star => (
        <div key={star.id} className="star" style={star.style} />
      ))}
    </div>
  );
};

StarsBackground.propTypes = {
  numberOfStars: PropTypes.number
};

export default StarsBackground; 