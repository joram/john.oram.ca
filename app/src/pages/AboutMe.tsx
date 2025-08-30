import React from "react";
import { Box, Typography, Divider } from "@mui/material";
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
    <BasePage title="About Me" subtitle={subtitle}>
      <Typography paragraph>
        I'm a software developer with many professional interests and side hobbies.
        My primary professional interest is in secure, scalable and resilient end to end systems.
        This can be from all the way from system architecture, load balancing across databases, all the way to
        dev team processes, on-call rotations, and culture.
      </Typography>

      <Typography paragraph>
        My work experience speaks to my ability to organize a team, and architect distributed systems.
      </Typography>

      <Typography paragraph>
        My side projects, a subset documented here, show my desire to learn, experiment, and put my skills to use.
        Solving problems, even those that don't need such overly engineered solutions.
      </Typography>
    </BasePage>
  );
}

export default AboutMe;