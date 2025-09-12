import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface LamaContextType {
  isLamaEnabled: boolean;
  toggleLama: () => void;
}

const LamaContext = createContext<LamaContextType | undefined>(undefined);

export const useLama = (): LamaContextType => {
  const context = useContext(LamaContext);
  if (context === undefined) {
    throw new Error('useLama must be used within a LamaProvider');
  }
  return context;
};

interface LamaProviderProps {
  children: ReactNode;
}

export const LamaProvider: React.FC<LamaProviderProps> = ({ children }) => {
  const [isLamaEnabled, setIsLamaEnabled] = useState<boolean>(() => {
    // Initialize from localStorage, default to false (lama disabled)
    const saved = localStorage.getItem('lama-mode');
    return saved !== null ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    // Save to localStorage whenever isLamaEnabled changes
    localStorage.setItem('lama-mode', JSON.stringify(isLamaEnabled));
  }, [isLamaEnabled]);

  const toggleLama = () => {
    setIsLamaEnabled(prev => !prev);
  };

  return (
    <LamaContext.Provider value={{ isLamaEnabled, toggleLama }}>
      {children}
    </LamaContext.Provider>
  );
};
