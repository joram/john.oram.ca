import React from 'react';
import BasePage from './BasePage';
import { Box, Typography, Switch, FormControlLabel, Paper, Divider } from '@mui/material';
import { useGaudy } from '../contexts/GaudyContext';

function Settings() {
  const { isGaudy, toggleGaudy } = useGaudy();

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
        
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Box>
            <Typography variant="h6" sx={{ color: 'white', mb: 1 }}>
              Gaudy Mode
            </Typography>
            <Typography variant="body2" sx={{ color: '#cccccc', maxWidth: '400px' }}>
              Enable or disable the flashy neon borders, gradients, and animations throughout the site.
              This setting is saved in your browser's local storage.
            </Typography>
          </Box>
          
          <FormControlLabel
            control={
              <Switch
                checked={isGaudy}
                onChange={toggleGaudy}
                sx={{
                  '& .MuiSwitch-switchBase.Mui-checked': {
                    color: isGaudy ? '#ff00ff' : '#1976d2',
                    '&:hover': {
                      backgroundColor: isGaudy ? 'rgba(255, 0, 255, 0.1)' : 'rgba(25, 118, 210, 0.1)',
                    },
                  },
                  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                    backgroundColor: isGaudy ? '#ff00ff' : '#1976d2',
                    boxShadow: isGaudy ? '0 0 10px #ff00ff' : 'none',
                  },
                  '& .MuiSwitch-track': {
                    backgroundColor: '#555',
                  },
                }}
              />
            }
            label=""
            sx={{ ml: 2 }}
          />
        </Box>
        
        {isGaudy && (
          <Box
            sx={{
              mt: 3,
              p: 2,
              backgroundColor: 'rgba(255, 0, 255, 0.05)',
              border: '1px solid transparent',
              borderImage: 'linear-gradient(45deg, #ff00ff, #00ffff, #ffff00) 1',
              borderRadius: '4px',
              boxShadow: '0 0 10px rgba(255, 0, 255, 0.2)',
            }}
          >
            <Typography variant="body2" sx={{ color: '#ff00ff', fontStyle: 'italic' }}>
              ✨ Gaudy mode is active! Enjoy the flashy styling! ✨
            </Typography>
          </Box>
        )}
      </Paper>
    </BasePage>
  );
}

export default Settings;
