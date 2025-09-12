import React, { useState } from 'react';
import BasePage from './BasePage';
import { Box, Typography, Switch, FormControlLabel, Paper, Divider, IconButton, Collapse } from '@mui/material';
import { InfoOutlined } from '@mui/icons-material';
import { useGaudy } from '../contexts/GaudyContext';
import { useConfetti } from '../contexts/ConfettiContext';
import { useRipples } from '../contexts/RipplesContext';

function Settings() {
  const { isGaudy, toggleGaudy } = useGaudy();
  const { isConfettiEnabled, toggleConfetti } = useConfetti();
  const { isRipplesEnabled, toggleRipples } = useRipples();
  
  const [expandedDescriptions, setExpandedDescriptions] = useState<{ [key: string]: boolean }>({});

  const toggleDescription = (settingName: string) => {
    setExpandedDescriptions(prev => ({
      ...prev,
      [settingName]: !prev[settingName]
    }));
  };

  const SettingRow = ({ 
    name, 
    description, 
    isEnabled, 
    onToggle, 
    settingName,
    color = '#1976d2',
    activeMessage 
  }: {
    name: string;
    description: string;
    isEnabled: boolean;
    onToggle: () => void;
    settingName: string;
    color?: string;
    activeMessage?: string;
  }) => (
    <Box>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', py: 2 }}>
        <Typography variant="h6" sx={{ color: 'white' }}>
          {name}
        </Typography>
        
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <FormControlLabel
            control={
              <Switch
                checked={isEnabled}
                onChange={onToggle}
                sx={{
                  '& .MuiSwitch-switchBase.Mui-checked': {
                    color: isEnabled ? color : '#1976d2',
                    '&:hover': {
                      backgroundColor: isEnabled ? `${color}1a` : 'rgba(25, 118, 210, 0.1)',
                    },
                  },
                  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                    backgroundColor: isEnabled ? color : '#1976d2',
                    boxShadow: isEnabled ? `0 0 10px ${color}` : 'none',
                  },
                  '& .MuiSwitch-track': {
                    backgroundColor: '#555',
                  },
                }}
              />
            }
            label=""
          />
          
          <IconButton
            size="small"
            onClick={() => toggleDescription(settingName)}
            sx={{ 
              color: expandedDescriptions[settingName] ? color : '#cccccc',
              backgroundColor: expandedDescriptions[settingName] ? `${color}20` : 'transparent',
              '&:hover': { 
                backgroundColor: expandedDescriptions[settingName] ? `${color}30` : 'rgba(255, 255, 255, 0.1)',
                color: 'white'
              },
              transition: 'all 0.2s ease-in-out'
            }}
          >
            <InfoOutlined fontSize="small" />
          </IconButton>
        </Box>
      </Box>
      
      <Collapse in={expandedDescriptions[settingName]}>
        <Box sx={{ mb: 2, pl: 1 }}>
          <Typography variant="body2" sx={{ color: '#cccccc', mb: 1 }}>
            {description}
          </Typography>
          {isEnabled && activeMessage && (
            <Typography variant="body2" sx={{ color: color, fontStyle: 'italic' }}>
              {activeMessage}
            </Typography>
          )}
        </Box>
      </Collapse>
    </Box>
  );

  return (
    <BasePage title="Settings">
      <Paper 
        elevation={3}
        sx={{
          p: 3,
          backgroundColor: '#3d3e3f',
          border: isGaudy ? '2px solid transparent' : '1px solid #555',
          borderImage: isGaudy ? 'linear-gradient(45deg, #ff00ff, #00ffff, #ffff00) 1' : 'none',
          borderRadius: '8px',
          boxShadow: isGaudy ? '0 0 15px rgba(255, 0, 255, 0.3)' : '0 2px 8px rgba(0,0,0,0.3)',
        }}
      >
        <Typography variant="h5" component="h2" sx={{ color: 'white', mb: 3 }}>
          Display Preferences
        </Typography>
        
        <Divider sx={{ borderColor: 'white', mb: 3 }} />
        
        <SettingRow
          name="Gaudy Mode"
          description="Enable or disable the flashy neon borders, gradients, and animations throughout the site. This setting is saved in your browser's local storage."
          isEnabled={isGaudy}
          onToggle={toggleGaudy}
          settingName="gaudy"
          color="#ff00ff"
          activeMessage="✨ Gaudy mode is active! Enjoy the flashy styling! ✨"
        />
        
        <Divider sx={{ borderColor: 'white', my: 2 }} />
        
        <SettingRow
          name="Confetti Mode"
          description="Enable confetti animations that trigger on any click anywhere on the page. Clicks will still work normally on all elements - confetti just adds extra fun!"
          isEnabled={isConfettiEnabled}
          onToggle={toggleConfetti}
          settingName="confetti"
          color="#ff6b6b"
          activeMessage="🎉 Confetti mode is active! Click anywhere on the page to see the magic! 🎉"
        />
        
        <Divider sx={{ borderColor: 'white', my: 2 }} />
        
        <SettingRow
          name="Ripples Mode"
          description="Enable warping ripple effects that appear wherever you click. Multiple ripples will intersect beautifully for a mesmerizing effect!"
          isEnabled={isRipplesEnabled}
          onToggle={toggleRipples}
          settingName="ripples"
          color="#4ecdc4"
          activeMessage="🌊 Ripples mode is active! Click anywhere to create beautiful wave effects! 🌊"
        />
      </Paper>
    </BasePage>
  );
}

export default Settings;
