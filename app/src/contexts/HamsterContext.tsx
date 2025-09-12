import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface HamsterContextType {
  isHamsterEnabled: boolean;
  toggleHamster: () => void;
}

const HamsterContext = createContext<HamsterContextType | undefined>(undefined);

export const useHamster = () => {
  const context = useContext(HamsterContext);
  if (context === undefined) {
    throw new Error('useHamster must be used within a HamsterProvider');
  }
  return context;
};

interface HamsterProviderProps {
  children: ReactNode;
}

export const HamsterProvider: React.FC<HamsterProviderProps> = ({ children }) => {
  const [isHamsterEnabled, setIsHamsterEnabled] = useState<boolean>(() => {
    // Initialize from localStorage, default to false (hamster disabled)
    const saved = localStorage.getItem('hamster-mode');
    return saved !== null ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    // Save to localStorage whenever isHamsterEnabled changes
    localStorage.setItem('hamster-mode', JSON.stringify(isHamsterEnabled));
  }, [isHamsterEnabled]);

  const toggleHamster = () => {
    setIsHamsterEnabled(prev => !prev);
  };

  return (
    <HamsterContext.Provider value={{ isHamsterEnabled, toggleHamster }}>
      {children}
    </HamsterContext.Provider>
  );
};
