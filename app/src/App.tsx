import React from 'react';
import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, useMediaQuery, useTheme } from '@mui/material';
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
import Envariants from "./pages/projects/Envariants";
import {TripReport, CourseNotes} from "./pages/TripReport";
import AllRoles from "./pages/work/allRoles";
import SEO from "./pages/thoughts/seo";
import GuidingPrincipals from "./pages/thoughts/guidingPrincipals";
import WorkEnvironment from "./pages/thoughts/workEnvironment";
import WaptaTraverse from "./pages/trip_reports/WaptaTraverse";
import Settings from "./pages/Settings";
import { GaudyProvider } from './contexts/GaudyContext';
import theme from './theme';

function AppContent() {
  const themeInstance = useTheme();
  const isMobile = useMediaQuery(themeInstance.breakpoints.down('sm'));

  return (
    <BrowserRouter>
      <div style={{
        display: 'flex',
        minHeight: '100vh',
        backgroundColor: '#1b1c1d',
      }}>
        <Sidebar isMobile={isMobile}/>
        
        <div style={{
          flex: 1,
          marginLeft: isMobile ? 0 : '200px',
          padding: '20px',
          backgroundColor: '#2a2b2c',
          color: '#ffffff',
        }}>
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
            <Route path="/project/envariants" element={<Envariants/>}/>

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
      </div>
    </BrowserRouter>
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GaudyProvider>
        <AppContent />
      </GaudyProvider>
    </ThemeProvider>
  );
}

export default App;
