import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import { Icon, Header, Menu, Container } from 'semantic-ui-react'
import Sidebar from "./HomepageSidebar"
import Content from "./content"

function App() {
  return (
    <div className="App">
        <Sidebar/>
        <Content/>
    </div>
  );
}

export default App;
