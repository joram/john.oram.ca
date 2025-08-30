import React from "react";
import { Box, Typography, Divider } from "@mui/material";

function BasePage({title, subtitle, children}: {title: any, subtitle?: any, children?: any}){
  return (
    <Box sx={{ maxWidth: "600px", mx: "auto" }}>
      <Box sx={{ textAlign: "center", my: 3 }}>
        <Typography variant="h4" component="h1" sx={{ color: 'white', mb: 2 }}>
          {title}
        </Typography>
        <Divider sx={{ borderColor: 'white' }} />
      </Box>

      {subtitle && (
        <Box sx={{ textAlign: "center", mb: 3 }}>
          {subtitle}
        </Box>
      )}

      <Box sx={{ textAlign: "left" }}>
        {children}
      </Box>
    </Box>
  );
}

export default BasePage;
