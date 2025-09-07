import React from "react";
import { Box, Typography, Divider, Avatar } from "@mui/material";
import { GitHub as GitHubIcon, LinkedIn as LinkedInIcon } from "@mui/icons-material";
import BasePage from './BasePage';
import { useGaudy } from '../contexts/GaudyContext';

function AboutMe(){
  const { isGaudy } = useGaudy();
  
  const subtitle = (
    <Box sx={{ textAlign: "center", display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2 }}>
      <a href="https://github.com/joram" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center', gap: 1 }}>
        <GitHubIcon fontSize="large" />
        GitHub
      </a>
      <Divider orientation="vertical" flexItem sx={{ borderColor: 'white' }} />
      <a href="https://www.linkedin.com/in/john-oram" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center', gap: 1 }}>
        <LinkedInIcon fontSize="large" />
        LinkedIn
      </a>
    </Box>
  );

  return (
    <BasePage title="John Oram" subtitle={subtitle}>
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Box sx={{
          display: 'inline-block',
          position: 'relative',
          ...(isGaudy && {
            '&::before': {
              content: '""',
              position: 'absolute',
              top: '-8px',
              left: '-8px',
              right: '-8px',
              bottom: '-8px',
              borderRadius: '50%',
              background: 'linear-gradient(45deg, #ff00ff, #00ffff, #ffff00, #ff00ff, #00ff00, #ff0000, #0000ff, #ff00ff)',
              animation: 'neonBorder 3s linear infinite',
              zIndex: -1,
              '@keyframes neonBorder': {
                '0%': {
                  background: 'linear-gradient(0deg, #ff00ff, #00ffff, #ffff00, #ff00ff)',
                },
                '25%': {
                  background: 'linear-gradient(90deg, #00ffff, #ffff00, #ff00ff, #00ffff)',
                },
                '50%': {
                  background: 'linear-gradient(180deg, #ffff00, #ff00ff, #00ffff, #ffff00)',
                },
                '75%': {
                  background: 'linear-gradient(270deg, #ff00ff, #00ffff, #ffff00, #ff00ff)',
                },
                '100%': {
                  background: 'linear-gradient(360deg, #ff00ff, #00ffff, #ffff00, #ff00ff)',
                }
              }
            },
            '&::after': {
              content: '""',
              position: 'absolute',
              top: '-8px',
              left: '-8px',
              right: '-8px',
              bottom: '-8px',
              borderRadius: '50%',
              background: 'linear-gradient(45deg, #ff00ff, #00ffff, #ffff00, #ff00ff, #00ff00, #ff0000, #0000ff, #ff00ff)',
              filter: 'blur(10px)',
              opacity: 0.7,
              animation: 'neonBorder 3s linear infinite',
              zIndex: -2,
            }
          })
        }}>
          <Avatar
            src="/static/profile.jpg"
            sx={{
              width: 120,
              height: 120,
              mx: 'auto',
              mb: 2,
              ...(isGaudy && {
                boxShadow: '0 0 20px #ff00ff, 0 0 40px #00ffff, 0 0 60px #ffff00',
              })
            }}
          />
        </Box>
      </Box>

      <Typography 
        paragraph
        sx={{
          padding: '16px',
          borderRadius: '8px',
          margin: '16px 0',
          ...(isGaudy && {
            border: '2px solid transparent',
            borderImage: 'linear-gradient(45deg, #ff00ff, #00ffff, #ffff00) 1',
            backgroundColor: 'rgba(255, 0, 255, 0.05)',
            boxShadow: '0 0 10px rgba(255, 0, 255, 0.3)',
          })
        }}
      >
        I'm a software developer with many professional interests and side hobbies.
        My primary professional interest is in secure, scalable and resilient end to end systems.
        This can be from all the way from system architecture, load balancing across databases, all the way to
        dev team processes, on-call rotations, and culture.
      </Typography>

      <Typography 
        paragraph
        sx={{
          padding: '16px',
          borderRadius: '8px',
          margin: '16px 0',
          ...(isGaudy && {
            border: '2px solid transparent',
            borderImage: 'linear-gradient(45deg, #00ffff, #ffff00, #ff00ff) 1',
            backgroundColor: 'rgba(0, 255, 255, 0.05)',
            boxShadow: '0 0 10px rgba(0, 255, 255, 0.3)',
          })
        }}
      >
        My work experience speaks to my ability to organize a team, and architect distributed systems.
      </Typography>

      <Typography 
        paragraph
        sx={{
          padding: '16px',
          borderRadius: '8px',
          margin: '16px 0',
          ...(isGaudy && {
            border: '2px solid transparent',
            borderImage: 'linear-gradient(45deg, #ffff00, #ff00ff, #00ffff) 1',
            backgroundColor: 'rgba(255, 255, 0, 0.05)',
            boxShadow: '0 0 10px rgba(255, 255, 0, 0.3)',
          })
        }}
      >
        My side projects, a subset documented here, show my desire to learn, experiment, and put my skills to use.
        Solving problems, even those that don't need such overly engineered solutions.
      </Typography>
    </BasePage>
  );
}

export default AboutMe;