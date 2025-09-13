import React, { useEffect, useState } from 'react';
import { useAardvark } from '../contexts/AardvarkContext';

interface Aardvark {
  id: string;
  x: number;
  y: number;
  direction: number;
  speed: number;
  size: number;
  isTunneling: boolean;
  tunnelDepth: number;
  antsEaten: number;
}

interface Ant {
  id: string;
  x: number;
  y: number;
  size: number;
  isBeingEaten: boolean;
}

const AardvarkMode: React.FC = () => {
  const { isAardvarkEnabled } = useAardvark();
  const [aardvarks, setAardvarks] = useState<Aardvark[]>([]);
  const [ants, setAnts] = useState<Ant[]>([]);
  const [tunnelHoles, setTunnelHoles] = useState<Array<{x: number, y: number, size: number}>>([]);

  useEffect(() => {
    if (!isAardvarkEnabled) {
      setAardvarks([]);
      setAnts([]);
      setTunnelHoles([]);
      return;
    }

    // Create initial aardvarks (2-3 aardvarks)
    const initialAardvarks: Aardvark[] = Array.from({ length: 3 }, (_, i) => ({
      id: `aardvark-${i}`,
      x: Math.random() * 100,
      y: Math.random() * 100,
      direction: Math.random() * 360,
      speed: 0.05 + Math.random() * 0.1,
      size: 40 + Math.random() * 20,
      isTunneling: false,
      tunnelDepth: 0,
      antsEaten: 0
    }));

    // Create initial ants (lots of them!)
    const initialAnts: Ant[] = Array.from({ length: 50 }, (_, i) => ({
      id: `ant-${i}`,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 8 + Math.random() * 4,
      isBeingEaten: false
    }));

    setAardvarks(initialAardvarks);
    setAnts(initialAnts);

    // Animation loop
    const animate = () => {
      setAardvarks(prevAardvarks => 
        prevAardvarks.map(aardvark => {
          // Update position based on direction and speed
          const radians = (aardvark.direction * Math.PI) / 180;
          let newX = aardvark.x + Math.cos(radians) * aardvark.speed;
          let newY = aardvark.y + Math.sin(radians) * aardvark.speed;

          // Bounce off edges
          if (newX <= 0 || newX >= 100) {
            aardvark.direction = 180 - aardvark.direction;
            newX = Math.max(0, Math.min(100, newX));
          }
          if (newY <= 0 || newY >= 100) {
            aardvark.direction = -aardvark.direction;
            newY = Math.max(0, Math.min(100, newY));
          }

          // Random tunneling behavior
          if (Math.random() < 0.01) {
            aardvark.isTunneling = !aardvark.isTunneling;
            if (aardvark.isTunneling) {
              aardvark.tunnelDepth = 0;
              // Create tunnel hole
              setTunnelHoles(prev => [...prev, { x: newX, y: newY, size: aardvark.size * 0.8 }]);
            }
          }

          // Update tunneling depth
          if (aardvark.isTunneling) {
            aardvark.tunnelDepth += 0.5;
            if (aardvark.tunnelDepth > 20) {
              aardvark.isTunneling = false;
              aardvark.tunnelDepth = 0;
            }
          }

          // Random direction changes
          if (Math.random() < 0.003) {
            aardvark.direction += (Math.random() - 0.5) * 60;
          }

          return {
            ...aardvark,
            x: newX,
            y: newY,
            direction: aardvark.direction
          };
        })
      );

      // Update ants - they move randomly and can be eaten
      setAnts(prevAnts => 
        prevAnts.map(ant => {
          if (ant.isBeingEaten) return ant;

          // Check if ant is near any aardvark
          const nearbyAardvark = aardvarks.find(aardvark => {
            const distance = Math.sqrt(
              Math.pow(ant.x - aardvark.x, 2) + Math.pow(ant.y - aardvark.y, 2)
            );
            return distance < 5; // Within eating range
          });

          if (nearbyAardvark) {
            ant.isBeingEaten = true;
            // Remove ant after animation
            setTimeout(() => {
              setAnts(prev => prev.filter(a => a.id !== ant.id));
            }, 1000);
            return ant;
          }

          // Random ant movement
          const newX = ant.x + (Math.random() - 0.5) * 0.3;
          const newY = ant.y + (Math.random() - 0.5) * 0.3;

          return {
            ...ant,
            x: Math.max(0, Math.min(100, newX)),
            y: Math.max(0, Math.min(100, newY))
          };
        })
      );
    };

    const interval = setInterval(animate, 100);

    return () => clearInterval(interval);
  }, [isAardvarkEnabled, aardvarks]);

  if (!isAardvarkEnabled || aardvarks.length === 0) {
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
        zIndex: 9998,
        overflow: 'hidden'
      }}
    >
      {/* Tunnel holes */}
      {tunnelHoles.map((hole, index) => (
        <div
          key={`hole-${index}`}
          style={{
            position: 'absolute',
            left: `${hole.x}%`,
            top: `${hole.y}%`,
            width: `${hole.size}px`,
            height: `${hole.size}px`,
            backgroundColor: '#8B4513',
            borderRadius: '50%',
            transform: 'translate(-50%, -50%)',
            opacity: 0.7,
            border: '2px solid #654321',
            animation: 'tunnel-glow 2s ease-in-out infinite alternate'
          }}
        />
      ))}

      {/* Ants */}
      {ants.map(ant => (
        <div
          key={ant.id}
          style={{
            position: 'absolute',
            left: `${ant.x}%`,
            top: `${ant.y}%`,
            fontSize: `${ant.size}px`,
            transform: 'translate(-50%, -50%)',
            animation: ant.isBeingEaten ? 'ant-being-eaten 1s ease-in forwards' : 'ant-crawl 0.5s ease-in-out infinite alternate',
            filter: 'drop-shadow(0 0 2px rgba(0, 0, 0, 0.5))',
            userSelect: 'none',
            opacity: ant.isBeingEaten ? 0 : 1
          }}
        >
          🐜
        </div>
      ))}

      {/* Aardvarks */}
      {aardvarks.map(aardvark => (
        <div
          key={aardvark.id}
          style={{
            position: 'absolute',
            left: `${aardvark.x}%`,
            top: `${aardvark.y}%`,
            fontSize: `${aardvark.size}px`,
            transform: `translate(-50%, -50%) ${aardvark.isTunneling ? `translateY(${aardvark.tunnelDepth}px)` : ''}`,
            animation: aardvark.isTunneling ? 'aardvark-tunneling 0.3s ease-in-out infinite alternate' : 'aardvark-waddle 0.8s ease-in-out infinite alternate',
            filter: 'drop-shadow(0 0 8px rgba(139, 69, 19, 0.6))',
            userSelect: 'none',
            zIndex: aardvark.isTunneling ? 1 : 2
          }}
        >
          🦏
        </div>
      ))}

      <style jsx>{`
        @keyframes aardvark-waddle {
          0% { transform: translate(-50%, -50%) rotate(-2deg); }
          100% { transform: translate(-50%, -50%) rotate(2deg); }
        }
        
        @keyframes aardvark-tunneling {
          0% { transform: translate(-50%, -50%) translateY(0px) scale(0.9); }
          100% { transform: translate(-50%, -50%) translateY(5px) scale(1.1); }
        }
        
        @keyframes ant-crawl {
          0% { transform: translate(-50%, -50%) scale(1); }
          100% { transform: translate(-50%, -50%) scale(1.1); }
        }
        
        @keyframes ant-being-eaten {
          0% { transform: translate(-50%, -50%) scale(1) rotate(0deg); opacity: 1; }
          50% { transform: translate(-50%, -50%) scale(0.5) rotate(180deg); opacity: 0.5; }
          100% { transform: translate(-50%, -50%) scale(0) rotate(360deg); opacity: 0; }
        }
        
        @keyframes tunnel-glow {
          0% { box-shadow: 0 0 5px rgba(139, 69, 19, 0.3); }
          100% { box-shadow: 0 0 15px rgba(139, 69, 19, 0.8); }
        }
      `}</style>
    </div>
  );
};

export default AardvarkMode;
