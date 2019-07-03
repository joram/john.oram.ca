import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import {Container} from 'semantic-ui-react'
import Sidebar from "./sidebar"
import { BrowserRouter, Route } from "react-router-dom";
import AboutMe from "./pages/AboutMe"
import Sendwithus from "./pages/work/Sendwithus"
import Socoloco from "./pages/work/Socoloco"
import Distillery from "./pages/projects/Distillery"
import Moistlywet from "./pages/projects/Moistlywet"
import Triptracks from "./pages/projects/Triptracks"

function App() {
  return (
    <BrowserRouter>
        <Sidebar/>
        <Container id={"pagecontent"}>
            <Route exact path="/" component={AboutMe} />
            <Route exact path="/work/sendwithus" component={Sendwithus} />
            <Route exact path="/work/socoloco" component={Socoloco} />
            <Route exact path="/project/distillery" component={Distillery} />
            <Route exact path="/project/moistlywet" component={Moistlywet} />
            <Route exact path="/project/triptracks" component={Triptracks} />
        </Container>
    </BrowserRouter>
  );
}

export default App;
