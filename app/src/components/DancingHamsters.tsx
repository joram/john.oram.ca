import React, { useEffect, useState } from 'react';
import { useHamster } from '../contexts/HamsterContext';

interface Hamster {
  id: string;
  x: number;
  y: number;
  direction: number;
  speed: number;
  size: number;
  emoji: string;
}

// Hamster emojis only
const hamsterEmojis = ['🐹', '🐹', '🐹', '🐹', '🐹'];

const DancingHamsters: React.FC = () => {
  const { isHamsterEnabled } = useHamster();
  const [hamsters, setHamsters] = useState<Hamster[]>([]);

  useEffect(() => {
    if (!isHamsterEnabled) {
      setHamsters([]);
      return;
    }

    // Create initial hamsters (3x the number)
    const initialHamsters: Hamster[] = Array.from({ length: 24 }, (_, i) => ({
      id: `hamster-${i}`,
      x: Math.random() * 100,
      y: Math.random() * 100,
      direction: Math.random() * 360,
      speed: 0.1 + Math.random() * 0.3, // Much slower movement
      size: 20 + Math.random() * 20,
      emoji: hamsterEmojis[Math.floor(Math.random() * hamsterEmojis.length)]
    }));

    setHamsters(initialHamsters);

    // Animation loop
    const animate = () => {
      setHamsters(prevHamsters => 
        prevHamsters.map(hamster => {
          // Update position based on direction and speed
          const radians = (hamster.direction * Math.PI) / 180;
          let newX = hamster.x + Math.cos(radians) * hamster.speed;
          let newY = hamster.y + Math.sin(radians) * hamster.speed;

          // Bounce off edges
          if (newX <= 0 || newX >= 100) {
            hamster.direction = 180 - hamster.direction;
            newX = Math.max(0, Math.min(100, newX));
          }
          if (newY <= 0 || newY >= 100) {
            hamster.direction = -hamster.direction;
            newY = Math.max(0, Math.min(100, newY));
          }

          // Random direction changes for more chaotic movement (less frequent)
          if (Math.random() < 0.005) {
            hamster.direction += (Math.random() - 0.5) * 30;
          }

          return {
            ...hamster,
            x: newX,
            y: newY,
            direction: hamster.direction
          };
        })
      );
    };

    const interval = setInterval(animate, 100); // 10 FPS - slower animation

    return () => clearInterval(interval);
  }, [isHamsterEnabled]);

  if (!isHamsterEnabled || hamsters.length === 0) {
    return null;
  }

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 9999,
        overflow: 'hidden'
      }}
    >
      {hamsters.map(hamster => (
        <div
          key={hamster.id}
          className="dancing-hamster"
          style={{
            position: 'absolute',
            left: `${hamster.x}%`,
            top: `${hamster.y}%`,
            fontSize: `${hamster.size}px`,
            transform: 'translate(-50%, -50%)',
            animation: 'hamster-dance 0.5s ease-in-out infinite alternate',
            filter: 'drop-shadow(0 0 5px rgba(255, 255, 255, 0.3))',
            userSelect: 'none'
          }}
        >
          {hamster.emoji}
        </div>
      ))}
    </div>
  );
};

export default DancingHamsters;
