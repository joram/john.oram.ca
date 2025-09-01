import React from "react";
import { Typography, Box } from "@mui/material";
import BasePage from "../BasePage";

function WorkEnvironment() {
  return (
    <BasePage title="Work Environment Thoughts" subtitle="">
      <Typography variant="h5" component="h2" sx={{ color: 'white', mt: 3, mb: 2 }}>
        Work to reduce cognitive load
      </Typography>
      
      <Typography variant="h6" component="h3" sx={{ color: 'white', mt: 2, mb: 1 }}>
        Consider your workflow (how you work)
      </Typography>
      
      <Typography variant="subtitle1" component="h4" sx={{ color: 'white', mt: 2, mb: 1 }}>
        What to consider:
      </Typography>
      
      <Box component="ul" sx={{ pl: 3, mb: 3 }}>
        <Typography component="li" sx={{ mb: 1 }}>
          Split up your services in different IDEs, helps to focus on one thing at a time
        </Typography>
        <Typography component="li" sx={{ mb: 1 }}>
          Consider the mental map you use of which windows you put where on your desktop. Is there a flow to it? Is it consistent or always changing?
        </Typography>
        <Typography component="li" sx={{ mb: 1 }}>
          What parts of your workflow are repetitive? Can you automate them? (e.g. using a script to open all your windows at once)
        </Typography>
      </Box>

      <Typography variant="h5" component="h2" sx={{ color: 'white', mt: 4, mb: 2 }}>
        Write bug-free code; fast
      </Typography>
      
      <Typography variant="h6" component="h3" sx={{ color: 'white', mt: 2, mb: 1 }}>
        Consider your code
      </Typography>
      
      <Typography variant="subtitle1" component="h4" sx={{ color: 'white', mt: 2, mb: 1 }}>
        What to consider:
      </Typography>
      
      <Box component="ul" sx={{ pl: 3 }}>
        <Typography component="li" sx={{ mb: 2 }}>
          <strong>Error hard and early</strong>
          <br />
          In undesirable states, error hard. i.e. if a list/dict is required to have exactly one item needed/visited raise an exception.
          This means that if that case is ever hit, it will be obvious that something is wrong. This is better than having a bug that is hard to find.
        </Typography>
      </Box>
    </BasePage>
  );
}

export default WorkEnvironment;
