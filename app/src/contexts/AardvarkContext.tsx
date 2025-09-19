import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface AardvarkContextType {
  isAardvarkEnabled: boolean;
  toggleAardvark: () => void;
}

const AardvarkContext = createContext<AardvarkContextType | undefined>(undefined);

export const useAardvark = () => {
  const context = useContext(AardvarkContext);
  if (context === undefined) {
    throw new Error('useAardvark must be used within an AardvarkProvider');
  }
  return context;
};

interface AardvarkProviderProps {
  children: ReactNode;
}

export const AardvarkProvider: React.FC<AardvarkProviderProps> = ({ children }) => {
  const [isAardvarkEnabled, setIsAardvarkEnabled] = useState<boolean>(() => {
    // Initialize from localStorage, default to false (aardvark disabled)
    const saved = localStorage.getItem('aardvark-mode');
    return saved !== null ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    // Save to localStorage whenever isAardvarkEnabled changes
    localStorage.setItem('aardvark-mode', JSON.stringify(isAardvarkEnabled));
  }, [isAardvarkEnabled]);

  const toggleAardvark = () => {
    setIsAardvarkEnabled(prev => !prev);
  };

  return (
    <AardvarkContext.Provider value={{ isAardvarkEnabled, toggleAardvark }}>
      {children}
    </AardvarkContext.Provider>
  );
};
