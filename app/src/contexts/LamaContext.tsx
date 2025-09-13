import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface LlamaContextType {
  isLlamaEnabled: boolean;
  toggleLlama: () => void;
}

const LlamaContext = createContext<LlamaContextType | undefined>(undefined);

export const useLlama = (): LlamaContextType => {
  const context = useContext(LlamaContext);
  if (context === undefined) {
    throw new Error('useLlama must be used within a LlamaProvider');
  }
  return context;
};

interface LlamaProviderProps {
  children: ReactNode;
}

export const LlamaProvider: React.FC<LlamaProviderProps> = ({ children }) => {
  const [isLlamaEnabled, setIsLlamaEnabled] = useState<boolean>(() => {
    // Initialize from localStorage, default to false (llama disabled)
    const saved = localStorage.getItem('llama-mode');
    return saved !== null ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    // Save to localStorage whenever isLlamaEnabled changes
    localStorage.setItem('llama-mode', JSON.stringify(isLlamaEnabled));
  }, [isLlamaEnabled]);

  const toggleLlama = () => {
    setIsLlamaEnabled(prev => !prev);
  };

  return (
    <LlamaContext.Provider value={{ isLlamaEnabled, toggleLlama }}>
      {children}
    </LlamaContext.Provider>
  );
};
