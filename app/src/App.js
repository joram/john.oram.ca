import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import { Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'

function App() {
  return (
    <div className="App">
<Sidebar as={Menu} animation='overlay' icon='labeled' inverted vertical visible width='thin'>
      <Menu.Item as='a'>
        <Icon name='home' />
        Home
      </Menu.Item>
      <Menu.Item as='a'>
        <Icon name='gamepad' />
        Games
      </Menu.Item>
      <Menu.Item as='a'>
        <Icon name='camera' />
        Channels
      </Menu.Item>
    </Sidebar>            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>
    </div>
  );
}

export default App;
