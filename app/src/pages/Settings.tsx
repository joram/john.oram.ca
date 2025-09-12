import React, { useState } from 'react';
import BasePage from './BasePage';
import { Box, Typography, Switch, FormControlLabel, Paper, Divider, IconButton, Collapse, Slider, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { InfoOutlined } from '@mui/icons-material';
import { useGaudy } from '../contexts/GaudyContext';
import { useConfetti } from '../contexts/ConfettiContext';
import { useRain, RainIntensity } from '../contexts/RainContext';

function Settings() {
  const { isGaudy, toggleGaudy } = useGaudy();
  const { isConfettiEnabled, toggleConfetti } = useConfetti();
  const { isRainEnabled, rainIntensity, toggleRain, setRainIntensity } = useRain();
  
  const [expandedDescriptions, setExpandedDescriptions] = useState<{ [key: string]: boolean }>({});

  const toggleDescription = (settingName: string) => {
    setExpandedDescriptions(prev => ({
      ...prev,
      [settingName]: !prev[settingName]
    }));
  };

  const intensityLabels = {
    none: 'None',
    light: 'Light Rain',
    moderate: 'Moderate Rain', 
    heavy: 'Heavy Rain',
    downpour: 'Downpour'
  };

  const SettingRow = ({ 
    name, 
    description, 
    isEnabled, 
    onToggle, 
    settingName,
    color = '#1976d2',
    activeMessage,
    children
  }: {
    name: string;
    description: string;
    isEnabled: boolean;
    onToggle: () => void;
    settingName: string;
    color?: string;
    activeMessage?: string;
    children?: React.ReactNode;
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
          {children}
          {isEnabled && activeMessage && (
            <Typography variant="body2" sx={{ color: color, fontStyle: 'italic', mt: 1 }}>
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
          name="Rain Mode"
          description="Enable rain effects with variable intensity. Random rain drops appear across the page, and clicks create full-size ripples. The rain intensity is displayed in the bottom right corner."
          isEnabled={isRainEnabled}
          onToggle={toggleRain}
          settingName="rain"
          color="#4ecdc4"
          activeMessage="🌧️ Rain mode is active! Watch the rain fall and click to create ripples! 🌧️"
        >
          {isRainEnabled && (
            <Box sx={{ mt: 2, mb: 1 }}>
              <Typography variant="body2" sx={{ color: '#cccccc', mb: 1 }}>
                Rain Intensity:
              </Typography>
              <FormControl size="small" sx={{ minWidth: 150 }}>
                <Select
                  value={rainIntensity}
                  onChange={(e) => setRainIntensity(e.target.value as RainIntensity)}
                  sx={{
                    color: 'white',
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#4ecdc4',
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#4ecdc4',
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#4ecdc4',
                    },
                    '& .MuiSvgIcon-root': {
                      color: '#4ecdc4',
                    },
                  }}
                >
                  {Object.entries(intensityLabels).map(([value, label]) => (
                    <MenuItem key={value} value={value} sx={{ color: 'white' }}>
                      {label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          )}
        </SettingRow>
      </Paper>
    </BasePage>
  );
}

export default Settings;
