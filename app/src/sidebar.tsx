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
            sx={{ width: 64, height: 64, mx: 'auto', mb: 1 }}
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
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                },
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
                      backgroundColor: isItemActive(item) ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                      '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      },
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