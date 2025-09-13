import React, { useEffect, useCallback } from 'react';
import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, useMediaQuery, useTheme, Typography, Box } from '@mui/material';
import Sidebar from "./sidebar"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AboutMe from "./pages/AboutMe"
import Sendwithus from "./pages/work/Sendwithus"
import Socoloco from "./pages/work/Socoloco"
import Tutela from "./pages/work/Tutela"
import Certn from "./pages/work/Certn"
import Distillery from "./pages/projects/Distillery"
import Moistlywet from "./pages/projects/Moistlywet"
import Triptracks from "./pages/projects/Triptracks"
import Whatisthisapictureof from "./pages/projects/Whatisthisapictureof";
import Recipes from "./pages/projects/Recipes";
import {TripReport, CourseNotes} from "./pages/TripReport";
import AllRoles from "./pages/work/allRoles";
import SEO from "./pages/thoughts/seo";
import GuidingPrincipals from "./pages/thoughts/guidingPrincipals";
import WorkEnvironment from "./pages/thoughts/workEnvironment";
import WaptaTraverse from "./pages/trip_reports/WaptaTraverse";
import Settings from "./pages/Settings";
import { GaudyProvider, useGaudy } from './contexts/GaudyContext';
import { ConfettiProvider, useConfetti } from './contexts/ConfettiContext';
import { RainProvider, useRain } from './contexts/RainContext';
import { HamsterProvider } from './contexts/HamsterContext';
import { LlamaProvider } from './contexts/LlamaContext';
import DancingHamsters from './components/DancingHamsters';
import WalkingLlama from './components/WalkingLlama';
import theme from './theme';

function AppContent() {
  const themeInstance = useTheme();
  const isMobile = useMediaQuery(themeInstance.breakpoints.down('sm'));
  const { isGaudy } = useGaudy();
  const { triggerConfetti, isConfettiEnabled } = useConfetti();
  const { triggerRipple, isRainEnabled, getRainTitle } = useRain();

  // Global click handler for confetti and rain ripples - triggers on any click
  const handleGlobalClick = useCallback((event: MouseEvent) => {
    const x = event.clientX / window.innerWidth;
    const y = event.clientY / window.innerHeight;
    triggerConfetti(x, y);
    triggerRipple(x, y);
  }, [triggerConfetti, triggerRipple]);

  // Add global click listener when confetti or rain are enabled
  useEffect(() => {
    if (isConfettiEnabled || isRainEnabled) {
      document.addEventListener('click', handleGlobalClick);
      return () => {
        document.removeEventListener('click', handleGlobalClick);
      };
    }
  }, [isConfettiEnabled, isRainEnabled, handleGlobalClick]);

  const rainTitle = getRainTitle();

  return (
    <BrowserRouter>
      <div 
        className={isGaudy ? 'gaudy-background' : ''}
        style={{
          display: 'flex',
          minHeight: '100vh',
          backgroundColor: isGaudy ? 'transparent' : '#1b1c1d',
          position: 'relative',
        }}
      >
        <Sidebar isMobile={isMobile}/>
        
        <div style={{
          flex: 1,
          marginLeft: isMobile ? 0 : '200px',
          padding: '20px',
          backgroundColor: isGaudy ? 'rgba(42, 43, 44, 0.8)' : '#2a2b2c',
          color: '#ffffff',
          backdropFilter: isGaudy ? 'blur(10px)' : 'none',
        }}>
          <DancingHamsters />
          <WalkingLlama />
          <Routes>
            <Route path="/" element={<AboutMe/>}/>

            {/*# Work*/}
            <Route path="/work/certn" element={<Certn/>}/>
            <Route path="/work/tutela" element={<Tutela/>}/>
            <Route path="/work/sendwithus" element={<Sendwithus/>}/>
            <Route path="/work/socoloco" element={<Socoloco/>}/>
            <Route path="/work/all_roles" element={<AllRoles/>}/>

            {/*# Projects*/}
            <Route path="/project/distillery" element={<Distillery/>}/>
            <Route path="/project/moistlywet" element={<Moistlywet/>}/>
            <Route path="/project/triptracks" element={<Triptracks/>}/>
            <Route path="/project/recipes" element={<Recipes/>}/>
            <Route path="/project/whatisthisapictureof" element={<Whatisthisapictureof/>}/>

            {/*# Opinions*/}
            <Route path="/opinion/seo" element={<SEO/>}/>
            <Route path="/opinion/guiding_principals" element={<GuidingPrincipals/>}/>
            <Route path="/opinion/work_environment" element={<WorkEnvironment/>}/>

            <Route path="/trip/2024/wapta_traverse" element={<WaptaTraverse/>}/>

            {/*# Settings*/}
            <Route path="/settings" element={<Settings/>}/>

            {/*# Trip Reports*/}
            <Route path="/trip/:year">
              <Route path=":slug" element={<TripReport/>}/>
            </Route>

            {/*# Courses*/}
            <Route path="/course/:year">
              <Route path=":slug" element={<CourseNotes />}/>
            </Route>
          </Routes>
        </div>
        
        {/* Rain title display in bottom right */}
        {rainTitle && (
          <Box
            sx={{
              position: 'fixed',
              bottom: 20,
              right: 20,
              zIndex: 10000,
              backgroundColor: 'rgba(78, 205, 196, 0.9)',
              color: 'white',
              padding: '8px 16px',
              borderRadius: '20px',
              boxShadow: '0 4px 12px rgba(78, 205, 196, 0.3)',
              backdropFilter: 'blur(10px)',
            }}
          >
            <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
              {rainTitle}
            </Typography>
          </Box>
        )}
      </div>
    </BrowserRouter>
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GaudyProvider>
        <ConfettiProvider>
          <RainProvider>
            <HamsterProvider>
              <LlamaProvider>
                <AppContent />
              </LlamaProvider>
            </HamsterProvider>
          </RainProvider>
        </ConfettiProvider>
      </GaudyProvider>
    </ThemeProvider>
  );
}

export default App;
