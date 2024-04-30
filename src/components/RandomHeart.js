import React, { useState, useEffect } from 'react';
import Heart from './Heart';
import '../styles.css'; 

const RandomHeart = () => {
  const sentences = [
    "I love you",
    "You're amazing",
    "Happy Birthday",
    "You make me smile",
    "Keep going, you're doing great",
    "Believe in yourself",
    "You're stronger than you think",
    "You light up my day",
    "You're one in a trillion",
    "Never forget how awesome you are",
    "You're a star",
    "You're a ray of sunshine",
    "You're a life saver",
    "You're a great listener",
    "You're a gem",
    "You're a beacon of light",
    "You're a dream come true",
  ];

  const getRandomPosition = () => {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    return { x, y };
  };

  const [isHovered, setIsHovered] = useState(false);
  const [position, setPosition] = useState(getRandomPosition());
  const [sentence, setSentence] = useState('');

  useEffect(() => {
    setSentence(sentences[Math.floor(Math.random() * sentences.length)]);
  }, []);

  const style = {
    position: 'absolute',
    left: `${position.x}px`,
    top: `${position.y}px`,
  };

  return (
    <div
      className={`heart-container ${isHovered ? 'hovered' : ''}`}
      style={style}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Heart />
      {isHovered && (
        <div className="text" style={{ fontSize: '12px', textAlign: 'center', marginTop: '5px' }}>
          {sentence}
        </div>
      )}
    </div>
  );
};

const App = () => {
  const hearts = Array(3).fill(<RandomHeart />); // Change this number to generate the number of hearts you want
  return (
    <div>
      {hearts}
    </div>
  );
}

export default App;
