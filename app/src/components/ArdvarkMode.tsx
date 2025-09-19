import React, { useEffect, useState } from 'react';
import { useArdvark } from '../contexts/ArdvarkContext';

interface CosmicAardvark {
  id: string;
  x: number;
  y: number;
  direction: number;
  speed: number;
  size: number;
  trail: Array<{x: number, y: number, opacity: number}>;
  isSpinning: boolean;
  spinSpeed: number;
  cosmicPower: number;
}

interface Star {
  id: string;
  x: number;
  y: number;
  size: number;
  twinklePhase: number;
  color: string;
}

const ArdvarkMode: React.FC = () => {
  const { isArdvarkEnabled } = useArdvark();
  const [cosmicAardvarks, setCosmicAardvarks] = useState<CosmicAardvark[]>([]);
  const [stars, setStars] = useState<Star[]>([]);
  const [rainbowParticles, setRainbowParticles] = useState<Array<{id: string, x: number, y: number, color: string, life: number}>>([]);

  useEffect(() => {
    if (!isArdvarkEnabled) {
      setCosmicAardvarks([]);
      setStars([]);
      setRainbowParticles([]);
      return;
    }

    // Create initial cosmic aardvarks (2-4 floating aardvarks)
    const initialCosmicAardvarks: CosmicAardvark[] = Array.from({ length: 4 }, (_, i) => ({
      id: `cosmic-aardvark-${i}`,
      x: Math.random() * 100,
      y: Math.random() * 100,
      direction: Math.random() * 360,
      speed: 0.03 + Math.random() * 0.05,
      size: 35 + Math.random() * 25,
      trail: [],
      isSpinning: Math.random() > 0.5,
      spinSpeed: 0.2 + Math.random() * 0.8,
      cosmicPower: Math.random() * 100
    }));

    // Create twinkling stars
    const initialStars: Star[] = Array.from({ length: 30 }, (_, i) => ({
      id: `star-${i}`,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 2 + Math.random() * 4,
      twinklePhase: Math.random() * Math.PI * 2,
      color: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3', '#54a0ff'][Math.floor(Math.random() * 7)]
    }));

    setCosmicAardvarks(initialCosmicAardvarks);
    setStars(initialStars);

    // Animation loop
    const animate = () => {
      setCosmicAardvarks(prevAardvarks => 
        prevAardvarks.map(aardvark => {
          // Update position with floating motion
          const radians = (aardvark.direction * Math.PI) / 180;
          let newX = aardvark.x + Math.cos(radians) * aardvark.speed;
          let newY = aardvark.y + Math.sin(radians) * aardvark.speed;

          // Add floating effect
          newY += Math.sin(Date.now() * 0.0005 + aardvark.id.charCodeAt(0)) * 0.05;

          // Bounce off edges with cosmic energy
          if (newX <= 0 || newX >= 100) {
            aardvark.direction = 180 - aardvark.direction;
            newX = Math.max(0, Math.min(100, newX));
            // Create rainbow particles on bounce
            setRainbowParticles(prev => [...prev, {
              id: `particle-${Date.now()}-${Math.random()}`,
              x: newX,
              y: newY,
              color: ['#ff0000', '#ff8000', '#ffff00', '#00ff00', '#0080ff', '#8000ff'][Math.floor(Math.random() * 6)],
              life: 60
            }]);
          }
          if (newY <= 0 || newY >= 100) {
            aardvark.direction = -aardvark.direction;
            newY = Math.max(0, Math.min(100, newY));
            // Create rainbow particles on bounce
            setRainbowParticles(prev => [...prev, {
              id: `particle-${Date.now()}-${Math.random()}`,
              x: newX,
              y: newY,
              color: ['#ff0000', '#ff8000', '#ffff00', '#00ff00', '#0080ff', '#8000ff'][Math.floor(Math.random() * 6)],
              life: 60
            }]);
          }

          // Update trail
          const newTrail = [...aardvark.trail, { x: newX, y: newY, opacity: 1 }];
          if (newTrail.length > 15) {
            newTrail.shift();
          }
          // Fade trail
          const updatedTrail = newTrail.map((point, index) => ({
            ...point,
            opacity: (index + 1) / newTrail.length
          }));

          // Random spinning behavior
          if (Math.random() < 0.01) {
            aardvark.isSpinning = !aardvark.isSpinning;
            aardvark.spinSpeed = 0.2 + Math.random() * 1.5;
          }

          // Update cosmic power
          aardvark.cosmicPower += (Math.random() - 0.5) * 2;
          aardvark.cosmicPower = Math.max(0, Math.min(100, aardvark.cosmicPower));

          // Random direction changes
          if (Math.random() < 0.002) {
            aardvark.direction += (Math.random() - 0.5) * 90;
          }

          return {
            ...aardvark,
            x: newX,
            y: newY,
            direction: aardvark.direction,
            trail: updatedTrail
          };
        })
      );

      // Update stars twinkling
      setStars(prevStars => 
        prevStars.map(star => ({
          ...star,
          twinklePhase: star.twinklePhase + 0.05
        }))
      );

      // Update rainbow particles
      setRainbowParticles(prev => 
        prev.map(particle => ({
          ...particle,
          life: particle.life - 1
        })).filter(particle => particle.life > 0)
      );
    };

    const interval = setInterval(animate, 100);

    return () => clearInterval(interval);
  }, [isArdvarkEnabled, cosmicAardvarks]);

  if (!isArdvarkEnabled || cosmicAardvarks.length === 0) {
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
        zIndex: 9997,
        overflow: 'hidden',
        background: 'linear-gradient(45deg, rgba(138, 43, 226, 0.1), rgba(75, 0, 130, 0.1))'
      }}
    >
      {/* Twinkling stars */}
      {stars.map(star => (
        <div
          key={star.id}
          style={{
            position: 'absolute',
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            backgroundColor: star.color,
            borderRadius: '50%',
            transform: 'translate(-50%, -50%)',
            opacity: 0.3 + 0.7 * Math.abs(Math.sin(star.twinklePhase)),
            animation: 'star-twinkle 2s ease-in-out infinite',
            boxShadow: `0 0 ${star.size * 2}px ${star.color}`
          }}
        />
      ))}

      {/* Rainbow particles */}
      {rainbowParticles.map(particle => (
        <div
          key={particle.id}
          style={{
            position: 'absolute',
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: '4px',
            height: '4px',
            backgroundColor: particle.color,
            borderRadius: '50%',
            transform: 'translate(-50%, -50%)',
            opacity: particle.life / 60,
            animation: 'particle-float 1s ease-out forwards'
          }}
        />
      ))}

      {/* Cosmic aardvarks with rainbow trails */}
      {cosmicAardvarks.map(aardvark => (
        <div key={aardvark.id}>
          {/* Rainbow trail */}
          {aardvark.trail.map((point, index) => (
            <div
              key={`trail-${aardvark.id}-${index}`}
              style={{
                position: 'absolute',
                left: `${point.x}%`,
                top: `${point.y}%`,
                fontSize: `${aardvark.size * 0.3}px`,
                transform: 'translate(-50%, -50%)',
                opacity: point.opacity * 0.6,
                filter: 'blur(1px)',
                userSelect: 'none'
              }}
            >
              ✨
            </div>
          ))}
          
          {/* Main aardvark */}
          <div
            style={{
              position: 'absolute',
              left: `${aardvark.x}%`,
              top: `${aardvark.y}%`,
              fontSize: `${aardvark.size}px`,
              transform: `translate(-50%, -50%) ${aardvark.isSpinning ? `rotate(${Date.now() * aardvark.spinSpeed * 0.01}deg)` : ''}`,
              animation: aardvark.isSpinning ? 'cosmic-spin 0.5s linear infinite' : 'cosmic-float 2s ease-in-out infinite alternate',
              filter: `drop-shadow(0 0 ${10 + aardvark.cosmicPower * 0.2}px rgba(138, 43, 226, 0.8)) hue-rotate(${aardvark.cosmicPower * 3.6}deg)`,
              userSelect: 'none',
              zIndex: 10
            }}
          >
            🦏
          </div>

          {/* Cosmic power aura */}
          <div
            style={{
              position: 'absolute',
              left: `${aardvark.x}%`,
              top: `${aardvark.y}%`,
              width: `${aardvark.size * 2}px`,
              height: `${aardvark.size * 2}px`,
              borderRadius: '50%',
              border: `2px solid rgba(138, 43, 226, ${0.2 + aardvark.cosmicPower * 0.003})`,
              transform: 'translate(-50%, -50%)',
              animation: 'cosmic-pulse 1s ease-in-out infinite alternate',
              zIndex: 9
            }}
          />
        </div>
      ))}

      <style jsx>{`
        @keyframes cosmic-float {
          0% { transform: translate(-50%, -50%) translateY(0px) scale(1); }
          100% { transform: translate(-50%, -50%) translateY(-10px) scale(1.05); }
        }
        
        @keyframes cosmic-spin {
          0% { transform: translate(-50%, -50%) rotate(0deg) scale(1); }
          100% { transform: translate(-50%, -50%) rotate(360deg) scale(1.1); }
        }
        
        @keyframes cosmic-pulse {
          0% { transform: translate(-50%, -50%) scale(0.8); opacity: 0.3; }
          100% { transform: translate(-50%, -50%) scale(1.2); opacity: 0.1; }
        }
        
        @keyframes star-twinkle {
          0%, 100% { opacity: 0.3; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 1; transform: translate(-50%, -50%) scale(1.2); }
        }
        
        @keyframes particle-float {
          0% { transform: translate(-50%, -50%) scale(0) rotate(0deg); }
          50% { transform: translate(-50%, -50%) scale(1) rotate(180deg); }
          100% { transform: translate(-50%, -50%) scale(0) rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default ArdvarkMode;
