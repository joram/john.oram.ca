import React, { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react';

export type RainIntensity = 'none' | 'light' | 'moderate' | 'heavy' | 'downpour';

interface RainContextType {
  isRainEnabled: boolean;
  rainIntensity: RainIntensity;
  toggleRain: () => void;
  setRainIntensity: (intensity: RainIntensity) => void;
  triggerRipple: (x: number, y: number) => void;
  getRainTitle: () => string;
}

const RainContext = createContext<RainContextType | undefined>(undefined);

export const useRain = () => {
  const context = useContext(RainContext);
  if (context === undefined) {
    throw new Error('useRain must be used within a RainProvider');
  }
  return context;
};

interface RainProviderProps {
  children: ReactNode;
}

export const RainProvider: React.FC<RainProviderProps> = ({ children }) => {
  const [isRainEnabled, setIsRainEnabled] = useState<boolean>(() => {
    // Initialize from localStorage, default to false (rain disabled)
    const saved = localStorage.getItem('rain-mode');
    return saved !== null ? JSON.parse(saved) : false;
  });

  const [rainIntensity, setRainIntensityState] = useState<RainIntensity>(() => {
    // Initialize from localStorage, default to 'light'
    const saved = localStorage.getItem('rain-intensity');
    return (saved as RainIntensity) || 'light';
  });

  useEffect(() => {
    // Save to localStorage whenever isRainEnabled changes
    localStorage.setItem('rain-mode', JSON.stringify(isRainEnabled));
  }, [isRainEnabled]);

  useEffect(() => {
    // Save to localStorage whenever rainIntensity changes
    localStorage.setItem('rain-intensity', rainIntensity);
  }, [rainIntensity]);

  const toggleRain = () => {
    setIsRainEnabled(prev => !prev);
  };

  const setRainIntensity = (intensity: RainIntensity) => {
    setRainIntensityState(intensity);
  };

  const getRainTitle = () => {
    if (!isRainEnabled || rainIntensity === 'none') return '';
    
    const titles = {
      light: 'Light Rain',
      moderate: 'Moderate Rain',
      heavy: 'Heavy Rain',
      downpour: 'Downpour'
    };
    
    return titles[rainIntensity];
  };

  // Click-triggered ripple (full size)
  const triggerRipple = useCallback((x: number, y: number) => {
    if (!isRainEnabled) return;

    // Create a unique ID for this ripple
    const rippleId = `ripple-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    
    // Create ripple element (full size for clicks)
    const ripple = document.createElement('div');
    ripple.id = rippleId;
    ripple.style.cssText = `
      position: fixed;
      left: ${x * window.innerWidth}px;
      top: ${y * window.innerHeight}px;
      width: 0;
      height: 0;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(78, 205, 196, 0.4) 0%, rgba(69, 183, 209, 0.2) 30%, rgba(150, 206, 180, 0.1) 60%, transparent 80%);
      transform: translate(-50%, -50%);
      pointer-events: none;
      z-index: 9998;
      animation: ripple-expand 2s ease-out forwards;
      box-shadow: 0 0 20px rgba(78, 205, 196, 0.3);
    `;

    // Add the ripple to the document
    document.body.appendChild(ripple);

    // Remove the ripple after animation completes
    setTimeout(() => {
      const element = document.getElementById(rippleId);
      if (element) {
        element.remove();
      }
    }, 2000);
  }, [isRainEnabled]);

  // Random rain effects
  const createRainDrop = useCallback(() => {
    if (!isRainEnabled || rainIntensity === 'none') return;

    // Stay 5% away from edges
    const margin = 0.05;
    const x = margin + Math.random() * (1 - 2 * margin);
    const y = margin + Math.random() * (1 - 2 * margin);

    // Create a unique ID for this rain drop
    const rainId = `rain-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    
    // Create rain drop element (25% scale)
    const rainDrop = document.createElement('div');
    rainDrop.id = rainId;
    rainDrop.style.cssText = `
      position: fixed;
      left: ${x * window.innerWidth}px;
      top: ${y * window.innerHeight}px;
      width: 0;
      height: 0;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(78, 205, 196, 0.3) 0%, rgba(69, 183, 209, 0.15) 30%, rgba(150, 206, 180, 0.08) 60%, transparent 80%);
      transform: translate(-50%, -50%);
      pointer-events: none;
      z-index: 9997;
      animation: rain-drop 1.5s ease-out forwards;
      box-shadow: 0 0 10px rgba(78, 205, 196, 0.2);
    `;

    // Add the rain drop to the document
    document.body.appendChild(rainDrop);

    // Remove the rain drop after animation completes
    setTimeout(() => {
      const element = document.getElementById(rainId);
      if (element) {
        element.remove();
      }
    }, 1500);
  }, [isRainEnabled, rainIntensity]);

  // Start/stop random rain based on intensity
  useEffect(() => {
    if (!isRainEnabled || rainIntensity === 'none') return;

    const intervals = {
      light: 3000,      // Every 3 seconds
      moderate: 1500,   // Every 1.5 seconds
      heavy: 800,       // Every 0.8 seconds
      downpour: 400     // Every 0.4 seconds
    };

    const interval = setInterval(createRainDrop, intervals[rainIntensity]);

    return () => clearInterval(interval);
  }, [isRainEnabled, rainIntensity, createRainDrop]);

  return (
    <RainContext.Provider value={{ 
      isRainEnabled, 
      rainIntensity, 
      toggleRain, 
      setRainIntensity, 
      triggerRipple,
      getRainTitle 
    }}>
      {children}
    </RainContext.Provider>
  );
};
