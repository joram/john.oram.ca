import React, {CSSProperties, useEffect, useState} from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
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
import TreasureHunt from "./pages/projects/TreasureHunt";
import WaptaTraverse from "./pages/trip_reports/WaptaTraverse";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

function App() {
  const { width } = useWindowDimensions();
  let isMobile = width<500

  const sidebarStyles = {
    position:"fixed",
    display:"flex",
    flexDirection:"column",
    top:0,
    bottom:0,
    left:0,
    backgroundColor:"#1b1c1d",
    width:"200px",
    overflowX:"hidden",
    flex:"1",
  }

  const contentStyles = {
    marginLeft: isMobile ? "0px" : "200px",
    top: 0,
    display: "block",
    position: "absolute",
  }

  if (isMobile) {
    sidebarStyles.width = "100%"
    sidebarStyles.display = "absolute"
    sidebarStyles.position = "relative"

    contentStyles.marginLeft = "0px"
    contentStyles.display = "inline"
    contentStyles.position = "relative"
  }

  return <>
  <BrowserRouter>
    <div style={sidebarStyles as CSSProperties}>
      <Sidebar isMobile={isMobile}/>
    </div>

    <div style={contentStyles as CSSProperties}>
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
        <Route path="/project/treasurehunt" element={<TreasureHunt/>}/>

        {/*# Opinions*/}
        <Route path="/opinion/seo" element={<SEO/>}/>
        <Route path="/opinion/guiding_principals" element={<GuidingPrincipals/>}/>
        <Route path="/opinion/work_environment" element={<WorkEnvironment/>}/>

        <Route path="/trip/2024/wapta_traverse" element={<WaptaTraverse/>}/>

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
  </BrowserRouter>
</>

}

export default App;
