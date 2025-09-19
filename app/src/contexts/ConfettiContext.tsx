import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import confetti from 'canvas-confetti';

interface ConfettiContextType {
  isConfettiEnabled: boolean;
  toggleConfetti: () => void;
  triggerConfetti: (x?: number, y?: number) => void;
}

const ConfettiContext = createContext<ConfettiContextType | undefined>(undefined);

export const useConfetti = () => {
  const context = useContext(ConfettiContext);
  if (context === undefined) {
    throw new Error('useConfetti must be used within a ConfettiProvider');
  }
  return context;
};

interface ConfettiProviderProps {
  children: ReactNode;
}

export const ConfettiProvider: React.FC<ConfettiProviderProps> = ({ children }) => {
  const [isConfettiEnabled, setIsConfettiEnabled] = useState<boolean>(() => {
    // Initialize from localStorage, default to false (confetti disabled)
    const saved = localStorage.getItem('confetti-mode');
    return saved !== null ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    // Save to localStorage whenever isConfettiEnabled changes
    localStorage.setItem('confetti-mode', JSON.stringify(isConfettiEnabled));
  }, [isConfettiEnabled]);

  const toggleConfetti = () => {
    setIsConfettiEnabled(prev => !prev);
  };

  const triggerConfetti = (x?: number, y?: number) => {
    if (!isConfettiEnabled) return;

    // Default to center of screen if no coordinates provided
    const xPos = x ?? 0.5;
    const yPos = y ?? 0.5;

    // Create a burst of confetti at the specified position
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { x: xPos, y: yPos },
      colors: ['#ff00ff', '#00ffff', '#ffff00', '#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57'],
      shapes: ['circle', 'square'],
      scalar: 0.8,
      zIndex: 9999, // Ensure confetti appears in foreground
    });

    // Add a second burst for more effect
    setTimeout(() => {
      confetti({
        particleCount: 30,
        spread: 50,
        origin: { x: xPos, y: yPos },
        colors: ['#ff00ff', '#00ffff', '#ffff00', '#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57'],
        shapes: ['circle', 'square'],
        scalar: 0.6,
        zIndex: 9999, // Ensure confetti appears in foreground
      });
    }, 100);
  };

  return (
    <ConfettiContext.Provider value={{ isConfettiEnabled, toggleConfetti, triggerConfetti }}>
      {children}
    </ConfettiContext.Provider>
  );
};
