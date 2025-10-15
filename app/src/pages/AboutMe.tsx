import React from "react";
import { Box, Typography, Divider, Avatar } from "@mui/material";
import { GitHub as GitHubIcon, LinkedIn as LinkedInIcon } from "@mui/icons-material";
import BasePage from './BasePage';

function AboutMe(){
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
        <Avatar
          src="/static/profile.jpg"
          sx={{ 
            width: 120, 
            height: 120, 
            mx: 'auto', 
            mb: 2,
            border: '3px solid rgba(255, 255, 255, 0.2)',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)'
          }}
        />
      </Box>

      <Typography>John Oram is a software developer based in Victoria, British Columbia, with over a decade of experience designing and building secure, scalable, and resilient software systems.</Typography>
      <Typography>He works across the full stack—from backend infrastructure and cloud orchestration to user-facing applications—focusing on performance, reliability, and maintainability.</Typography>
      <Typography>Active in the Victoria tech community, John enjoys mentoring and sharing ideas with other developers.</Typography>
      <Typography>He is also the founder of VeilStream, a platform that provides per-branch environments to help teams automate preview deployments and streamline their path from code to production.</Typography>
    </BasePage>
  );
}

export default AboutMe;