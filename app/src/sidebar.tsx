import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  Avatar,
  Typography,
  Box,
  IconButton,
  Drawer,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  Person as PersonIcon,
  Menu as MenuIcon,
} from "@mui/icons-material";

function Sidebar({ isMobile }: { isMobile: boolean }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();
  const theme = useTheme();
  const isMobileView = useMediaQuery(theme.breakpoints.down('sm'));

  function MenuItem({ path, slug, label }: { path?: string; slug?: string; label: string }) {
    if (!slug) slug = label;
    if (!path) path = "/";
    const fullPath = `${path}${slug}`;
    const isActive = location.pathname === fullPath;

    return (
      <ListItem
        sx={{
          color: 'white',
          cursor: 'pointer',
          backgroundColor: isActive ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
          },
        }}
      >
        <Link 
          to={fullPath} 
          style={{ 
            textDecoration: 'none', 
            color: 'inherit',
            width: '100%',
            display: 'block'
          }}
        >
          <ListItemText primary={label} />
        </Link>
      </ListItem>
    );
  }

  const sidebarContent = (
    <Box sx={{ 
      backgroundColor: '#1b1c1d', 
      height: '100%', 
      color: 'white',
      width: isMobile ? '100%' : '200px',
    }}>
      <Box sx={{ textAlign: 'center', py: 2 }}>
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Avatar
            src="/static/profile.jpg"
            sx={{ width: 64, height: 64, mx: 'auto', mb: 1 }}
          />
          <Typography variant="h6" sx={{ color: 'white' }}>
            <PersonIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
            John Oram
          </Typography>
        </Link>
      </Box>

      <List sx={{ pt: 0 }}>
        <ListSubheader sx={{ color: 'white', backgroundColor: '#1b1c1d' }}>
          Work
        </ListSubheader>
        <MenuItem path="/work/" slug="socoloco" label="Socoloco" />
        <MenuItem path="/work/" slug="sendwithus" label="Sendwithus" />
        <MenuItem path="/work/" slug="tutela" label="Tutela" />
        <MenuItem path="/work/" slug="certn" label="Certn" />
        <MenuItem path="/work/" slug="intlabs" label="Intlabs" />
        <MenuItem path="/work/" slug="all_roles" label="All Roles" />

        <ListSubheader sx={{ color: 'white', backgroundColor: '#1b1c1d' }}>
          Work Opinions
        </ListSubheader>
        <MenuItem path="/opinion/" slug="guiding_principals" label="Guiding Principals" />
        <MenuItem path="/opinion/" slug="work_environment" label="Work Environment" />
        <MenuItem path="/opinion/" slug="seo" label="SEO" />

        <ListSubheader sx={{ color: 'white', backgroundColor: '#1b1c1d' }}>
          Projects
        </ListSubheader>
        <MenuItem path="/project/" slug="distillery" label="Distillery" />
        <MenuItem path="/project/" slug="moistlywet" label="Moistlywet" />
        <MenuItem path="/project/" slug="triptracks" label="Triptracks" />
        <MenuItem path="/project/" slug="recipes" label="Recipes" />
        <MenuItem path="/project/" slug="treasurehunt" label="Treasure Hunt" />

        <ListSubheader sx={{ color: 'white', backgroundColor: '#1b1c1d' }}>
          Courses
        </ListSubheader>
        <MenuItem path="/course/" slug="2021/AST1" label="AST1" />
        <MenuItem path="/course/" slug="2024/Wilderness_First_Aid" label="Wilderness First Aid" />

        <ListSubheader sx={{ color: 'white', backgroundColor: '#1b1c1d' }}>
          Trips
        </ListSubheader>
        <MenuItem path="/trip/" slug="2014/Bugaboos" label="Bugaboos (2014)" />
        <MenuItem path="/trip/" slug="2016/Bugaboos" label="Bugaboos (2016)" />
        <MenuItem path="/trip/" slug="2016/Maniacs_Temptation" label="Maniacs Temptation" />
        <MenuItem path="/trip/" slug="2021/Elkhorn" label="Elkhorn" />
        <MenuItem path="/trip/" slug="2021/Red_Pillar" label="Red Pillar" />
        <MenuItem path="/trip/" slug="2021/Warden_and_Victoria_Peak" label="Warden and Victoria Peak" />
        <MenuItem path="/trip/" slug="2022/5040_Peak" label="5040 Peak (2022)" />
        <MenuItem path="/trip/" slug="2022/Bedwell_Lake" label="Bedwell Lake" />
        <MenuItem path="/trip/" slug="2022/Marble_Meadows" label="Marble Meadows" />
        <MenuItem path="/trip/" slug="2023/Elfin_Lakes" label="Elfin Lakes" />
        <MenuItem path="/trip/" slug="2023/Rainier" label="Rainier" />
        <MenuItem path="/trip/" slug="2023/Redwall" label="Redwall" />
        <MenuItem path="/trip/" slug="2024/5040_Peak" label="5040 Peak (2024)" />
        <MenuItem path="/trip/" slug="2024/Wapta_Traverse" label="Wapta Traverse" />
      </List>
    </Box>
  );

  if (isMobileView) {
    return (
      <>
        <IconButton
          onClick={() => setDrawerOpen(true)}
          sx={{ 
            position: 'fixed', 
            top: 10, 
            left: 10, 
            zIndex: 1200,
            color: 'white',
            backgroundColor: 'rgba(27, 28, 29, 0.8)',
          }}
        >
          <MenuIcon />
        </IconButton>
        
        <Drawer
          anchor="left"
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
          sx={{
            '& .MuiDrawer-paper': {
              backgroundColor: '#1b1c1d',
              width: '250px',
            },
          }}
        >
          {sidebarContent}
        </Drawer>
      </>
    );
  }

  return (
    <Box
      sx={{
        position: 'fixed',
        left: 0,
        top: 0,
        bottom: 0,
        width: '200px',
        backgroundColor: '#1b1c1d',
        overflowY: 'auto',
        zIndex: 1000,
      }}
    >
      {sidebarContent}
    </Box>
  );
}

export default Sidebar;