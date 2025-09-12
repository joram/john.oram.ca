import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface GaudyContextType {
  isGaudy: boolean;
  toggleGaudy: () => void;
}

const GaudyContext = createContext<GaudyContextType | undefined>(undefined);

export const useGaudy = () => {
  const context = useContext(GaudyContext);
  if (context === undefined) {
    throw new Error('useGaudy must be used within a GaudyProvider');
  }
  return context;
};

interface GaudyProviderProps {
  children: ReactNode;
}

export const GaudyProvider: React.FC<GaudyProviderProps> = ({ children }) => {
  const [isGaudy, setIsGaudy] = useState<boolean>(() => {
    // Initialize from localStorage, default to false (gaudy disabled)
    const saved = localStorage.getItem('gaudy-mode');
    return saved !== null ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    // Save to localStorage whenever isGaudy changes
    localStorage.setItem('gaudy-mode', JSON.stringify(isGaudy));
  }, [isGaudy]);

  const toggleGaudy = () => {
    setIsGaudy(prev => !prev);
  };

  return (
    <GaudyContext.Provider value={{ isGaudy, toggleGaudy }}>
      {children}
    </GaudyContext.Provider>
  );
};
