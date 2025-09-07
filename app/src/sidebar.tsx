import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  List,
  ListItem,
  ListItemText,
  Avatar,
  Typography,
  Box,
  IconButton,
  Drawer,
  useTheme,
  useMediaQuery,
  Collapse,
  ListItemButton,
} from "@mui/material";
import {
  Person as PersonIcon,
  Menu as MenuIcon,
  ExpandLess,
  ExpandMore,
} from "@mui/icons-material";
import { useGaudy } from './contexts/GaudyContext';

interface MenuSection {
  title: string;
  items: MenuItem[];
}

interface MenuItem {
  path: string;
  slug: string;
  label: string;
}

function Sidebar({ isMobile }: { isMobile: boolean }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({});
  const location = useLocation();
  const theme = useTheme();
  const isMobileView = useMediaQuery(theme.breakpoints.down('sm'));
  const { isGaudy } = useGaudy();

  const menuSections: MenuSection[] = [
    {
      title: "Work",
      items: [
        { path: "/work/", slug: "socoloco", label: "Socoloco" },
        { path: "/work/", slug: "sendwithus", label: "Sendwithus" },
        { path: "/work/", slug: "tutela", label: "Tutela" },
        { path: "/work/", slug: "certn", label: "Certn" },
        { path: "/work/", slug: "intlabs", label: "Intlabs" },
        { path: "/work/", slug: "all_roles", label: "All Roles" },
      ]
    },
    {
      title: "Work Opinions",
      items: [
        { path: "/opinion/", slug: "guiding_principals", label: "Guiding Principals" },
        { path: "/opinion/", slug: "work_environment", label: "Work Environment" },
        { path: "/opinion/", slug: "seo", label: "SEO" },
      ]
    },
    {
      title: "Projects",
      items: [
        { path: "/project/", slug: "distillery", label: "Distillery" },
        { path: "/project/", slug: "moistlywet", label: "Moistlywet" },
        { path: "/project/", slug: "triptracks", label: "Triptracks" },
        { path: "/project/", slug: "recipes", label: "Recipes" },
        { path: "/project/", slug: "envariants", label: "Envariants API" },
      ]
    },
    {
      title: "Courses",
      items: [
        { path: "/course/", slug: "2021/AST1", label: "AST1" },
        { path: "/course/", slug: "2024/Wilderness_First_Aid", label: "Wilderness First Aid" },
      ]
    },
    {
      title: "Trips",
      items: [
        { path: "/trip/", slug: "2014/Bugaboos", label: "Bugaboos (2014)" },
        { path: "/trip/", slug: "2016/Bugaboos", label: "Bugaboos (2016)" },
        { path: "/trip/", slug: "2016/Maniacs_Temptation", label: "Maniacs Temptation" },
        { path: "/trip/", slug: "2021/Elkhorn", label: "Elkhorn" },
        { path: "/trip/", slug: "2021/Red_Pillar", label: "Red Pillar" },
        { path: "/trip/", slug: "2021/Warden_and_Victoria_Peak", label: "Warden and Victoria Peak" },
        { path: "/trip/", slug: "2022/5040_Peak", label: "5040 Peak (2022)" },
        { path: "/trip/", slug: "2022/Bedwell_Lake", label: "Bedwell Lake" },
        { path: "/trip/", slug: "2022/Marble_Meadows", label: "Marble Meadows" },
        { path: "/trip/", slug: "2023/Elfin_Lakes", label: "Elfin Lakes" },
        { path: "/trip/", slug: "2023/Rainier", label: "Rainier" },
        { path: "/trip/", slug: "2023/Redwall", label: "Redwall" },
        { path: "/trip/", slug: "2024/5040_Peak", label: "5040 Peak (2024)" },
        { path: "/trip/", slug: "2024/Wapta_Traverse", label: "Wapta Traverse" },
      ]
    },
    {
      title: "Settings",
      items: [
        { path: "/", slug: "settings", label: "Display Preferences" },
      ]
    }
  ];

  const handleSectionToggle = (sectionTitle: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionTitle]: !prev[sectionTitle]
    }));
  };

  const isItemActive = (item: MenuItem) => {
    const fullPath = `${item.path}${item.slug}`;
    return location.pathname === fullPath;
  };

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
            sx={{ 
              width: 64, 
              height: 64, 
              mx: 'auto', 
              mb: 1,
              ...(isGaudy && {
                border: '4px solid',
                borderImage: 'linear-gradient(45deg, #ff00ff, #00ffff, #ffff00, #ff00ff, #00ff00, #ff0000, #0000ff, #ff00ff) 1',
                animation: 'neonBorder 3s linear infinite',
                boxShadow: '0 0 15px #ff00ff, 0 0 30px #00ffff, 0 0 45px #ffff00',
                '@keyframes neonBorder': {
                  '0%': {
                    borderImage: 'linear-gradient(0deg, #ff00ff, #00ffff, #ffff00, #ff00ff) 1',
                    boxShadow: '0 0 15px #ff00ff, 0 0 30px #00ffff, 0 0 45px #ffff00'
                  },
                  '25%': {
                    borderImage: 'linear-gradient(90deg, #00ffff, #ffff00, #ff00ff, #00ffff) 1',
                    boxShadow: '0 0 15px #00ffff, 0 0 30px #ffff00, 0 0 45px #ff00ff'
                  },
                  '50%': {
                    borderImage: 'linear-gradient(180deg, #ffff00, #ff00ff, #00ffff, #ffff00) 1',
                    boxShadow: '0 0 15px #ffff00, 0 0 30px #ff00ff, 0 0 45px #00ffff'
                  },
                  '75%': {
                    borderImage: 'linear-gradient(270deg, #ff00ff, #00ffff, #ffff00, #ff00ff) 1',
                    boxShadow: '0 0 15px #ff00ff, 0 0 30px #00ffff, 0 0 45px #ffff00'
                  },
                  '100%': {
                    borderImage: 'linear-gradient(360deg, #ff00ff, #00ffff, #ffff00, #ff00ff) 1',
                    boxShadow: '0 0 15px #ff00ff, 0 0 30px #00ffff, 0 0 45px #ffff00'
                  }
                }
              })
            }}
          />
          <Typography variant="h6" sx={{ color: 'white' }}>
            <PersonIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
            John Oram
          </Typography>
        </Link>
      </Box>

      <List sx={{ pt: 0 }}>
        {menuSections.map((section) => (
          <Box key={section.title}>
            <ListItemButton
              onClick={() => handleSectionToggle(section.title)}
              sx={{
                color: 'white',
                margin: '2px',
                borderRadius: '4px',
                ...(isGaudy && {
                  border: '1px solid transparent',
                  borderImage: 'linear-gradient(45deg, #ff00ff, #00ffff, #ffff00) 1',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 0, 255, 0.1)',
                    borderImage: 'linear-gradient(45deg, #ff00ff, #00ffff, #ffff00, #ff00ff) 1',
                    boxShadow: '0 0 10px #ff00ff, 0 0 20px #00ffff',
                  },
                }),
                ...(!isGaudy && {
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  },
                }),
              }}
            >
              <ListItemText 
                primary={section.title} 
                sx={{ 
                  '& .MuiListItemText-primary': {
                    fontWeight: 'bold',
                    fontSize: '0.9rem',
                  }
                }}
              />
              {expandedSections[section.title] ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            
            <Collapse in={expandedSections[section.title]} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {section.items.map((item) => (
                  <ListItem
                    key={item.slug}
                    sx={{
                      pl: 4,
                      color: 'white',
                      margin: '1px',
                      borderRadius: '4px',
                      ...(isGaudy && {
                        backgroundColor: isItemActive(item) ? 'rgba(255, 0, 255, 0.2)' : 'transparent',
                        border: '1px solid transparent',
                        borderImage: isItemActive(item) ? 'linear-gradient(45deg, #ff00ff, #00ffff, #ffff00) 1' : 'linear-gradient(45deg, transparent, transparent, transparent) 1',
                        '&:hover': {
                          backgroundColor: 'rgba(0, 255, 255, 0.1)',
                          borderImage: 'linear-gradient(45deg, #00ffff, #ffff00, #ff00ff) 1',
                          boxShadow: '0 0 8px #00ffff, 0 0 16px #ffff00',
                        },
                      }),
                      ...(!isGaudy && {
                        backgroundColor: isItemActive(item) ? 'rgba(255, 255, 255, 0.2)' : 'transparent',
                        '&:hover': {
                          backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        },
                      }),
                    }}
                  >
                    <Link 
                      to={`${item.path}${item.slug}`}
                      style={{ 
                        textDecoration: 'none', 
                        color: 'inherit',
                        width: '100%',
                        display: 'block'
                      }}
                    >
                      <ListItemText 
                        primary={item.label}
                        sx={{
                          '& .MuiListItemText-primary': {
                            fontSize: '0.85rem',
                          }
                        }}
                      />
                    </Link>
                  </ListItem>
                ))}
              </List>
            </Collapse>
          </Box>
        ))}
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