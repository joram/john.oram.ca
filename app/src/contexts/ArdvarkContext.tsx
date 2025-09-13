import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface ArdvarkContextType {
  isArdvarkEnabled: boolean;
  toggleArdvark: () => void;
}

const ArdvarkContext = createContext<ArdvarkContextType | undefined>(undefined);

export const useArdvark = () => {
  const context = useContext(ArdvarkContext);
  if (context === undefined) {
    throw new Error('useArdvark must be used within an ArdvarkProvider');
  }
  return context;
};

interface ArdvarkProviderProps {
  children: ReactNode;
}

export const ArdvarkProvider: React.FC<ArdvarkProviderProps> = ({ children }) => {
  const [isArdvarkEnabled, setIsArdvarkEnabled] = useState<boolean>(() => {
    // Initialize from localStorage, default to false (ardvark disabled)
    const saved = localStorage.getItem('ardvark-mode');
    return saved !== null ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    // Save to localStorage whenever isArdvarkEnabled changes
    localStorage.setItem('ardvark-mode', JSON.stringify(isArdvarkEnabled));
  }, [isArdvarkEnabled]);

  const toggleArdvark = () => {
    setIsArdvarkEnabled(prev => !prev);
  };

  return (
    <ArdvarkContext.Provider value={{ isArdvarkEnabled, toggleArdvark }}>
      {children}
    </ArdvarkContext.Provider>
  );
};
