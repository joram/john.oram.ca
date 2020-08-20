import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import {Segment} from 'semantic-ui-react'
import Sidebar from "./sidebar"
import { BrowserRouter, Route } from "react-router-dom";
import AboutMe from "./pages/AboutMe"
import Sendwithus from "./pages/work/Sendwithus"
import Socoloco from "./pages/work/Socoloco"
import Tutela from "./pages/work/Tutela"
import Certn from "./pages/work/Certn"
import Distillery from "./pages/projects/Distillery"
import Moistlywet from "./pages/projects/Moistlywet"
import Triptracks from "./pages/projects/Triptracks"
import Whatisthisapictureof from "./pages/projects/Whatisthisapictureof";

function App() {
  return (
    <BrowserRouter>
      <Sidebar/>
      <Segment id="pagecontent" basic align="center">
        <Route exact path="/" component={AboutMe} />
        <Route exact path="/work/certn" component={Certn} />
        <Route exact path="/work/tutela" component={Tutela} />
        <Route exact path="/work/sendwithus" component={Sendwithus} />
        <Route exact path="/work/socoloco" component={Socoloco} />
        <Route exact path="/project/distillery" component={Distillery} />
        <Route exact path="/project/moistlywet" component={Moistlywet} />
        <Route exact path="/project/triptracks" component={Triptracks} />
        <Route exact path="/project/whatisthisapictureof" component={Whatisthisapictureof} />
      </Segment>
    </BrowserRouter>
  );
}

export default App;
