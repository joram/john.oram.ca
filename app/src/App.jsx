import React, {useEffect, useState} from 'react';
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
import TripReport from "./pages/TripReport";

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

  let className = "main"
  let contentStyle = {}
  if(!isMobile){
    className = "main wide"
    contentStyle = {position:"absolute", top:0}
  }

  return <BrowserRouter>
    <Sidebar isMobile={isMobile}/>
    <div className={className} style={contentStyle}>
      <br/>
      <Routes>
        <Route exact path="/" element={<AboutMe/>}/>

        # Work
        <Route exact path="/work/certn" element={<Certn/>}/>
        <Route exact path="/work/tutela" element={<Tutela/>}/>
        <Route exact path="/work/sendwithus" element={<Sendwithus/>}/>
        <Route exact path="/work/socoloco" element={<Socoloco/>}/>

        # Projects
        <Route exact path="/project/distillery" element={<Distillery/>}/>
        <Route exact path="/project/moistlywet" element={<Moistlywet/>}/>
        <Route exact path="/project/triptracks" element={<Triptracks/>}/>
        <Route exact path="/project/recipes" element={<Recipes/>}/>
        <Route exact path="/project/whatisthisapictureof" element={<Whatisthisapictureof/>}/>

        # Trip Reports
        <Route exact path="/trip/:year/:slug" element={<TripReport key="trip_report"/>}/>
        {/*<Route exact path="/trip/elkhorn" element={<TripReport filepath={elkhorn} key="elkhorn"/>}/>*/}
        {/*<Route exact path="/trip/ast1" element={<TripReport filepath={ast1} key="ast1"/>}/>*/}
        {/*<Route exact path="/trip/5040" element={<TripReport filepath={fifty_fourty} key="5040"/>}/>*/}
      </Routes>
    </div>
  </BrowserRouter>

}

export default App;
