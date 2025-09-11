import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface RipplesContextType {
  isRipplesEnabled: boolean;
  toggleRipples: () => void;
  triggerRipple: (x: number, y: number) => void;
}

const RipplesContext = createContext<RipplesContextType | undefined>(undefined);

export const useRipples = () => {
  const context = useContext(RipplesContext);
  if (context === undefined) {
    throw new Error('useRipples must be used within a RipplesProvider');
  }
  return context;
};

interface RipplesProviderProps {
  children: ReactNode;
}

export const RipplesProvider: React.FC<RipplesProviderProps> = ({ children }) => {
  const [isRipplesEnabled, setIsRipplesEnabled] = useState<boolean>(() => {
    // Initialize from localStorage, default to false (ripples disabled)
    const saved = localStorage.getItem('ripples-mode');
    return saved !== null ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    // Save to localStorage whenever isRipplesEnabled changes
    localStorage.setItem('ripples-mode', JSON.stringify(isRipplesEnabled));
  }, [isRipplesEnabled]);

  const toggleRipples = () => {
    setIsRipplesEnabled(prev => !prev);
  };

  const triggerRipple = (x: number, y: number) => {
    if (!isRipplesEnabled) return;

    // Create a unique ID for this ripple
    const rippleId = `ripple-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    
    // Create ripple element
    const ripple = document.createElement('div');
    ripple.id = rippleId;
    ripple.style.cssText = `
      position: fixed;
      left: ${x * window.innerWidth}px;
      top: ${y * window.innerHeight}px;
      width: 0;
      height: 0;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.1) 30%, transparent 70%);
      transform: translate(-50%, -50%);
      pointer-events: none;
      z-index: 9998;
      animation: ripple-expand 1.5s ease-out forwards;
    `;

    // Add the ripple to the document
    document.body.appendChild(ripple);

    // Remove the ripple after animation completes
    setTimeout(() => {
      const element = document.getElementById(rippleId);
      if (element) {
        element.remove();
      }
    }, 1500);
  };

  return (
    <RipplesContext.Provider value={{ isRipplesEnabled, toggleRipples, triggerRipple }}>
      {children}
    </RipplesContext.Provider>
  );
};
