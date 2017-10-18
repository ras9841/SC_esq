import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Navbar from './Navbar';
import Header from './Header';
import LowerContent from './LowerContent'

const App = () => (
  <MuiThemeProvider>
    <div>
      <Navbar/>
        <img src="../splash1.png" style={{"width": "100%", "padding-bottom": "50px"}}/>
      <Header/>
      <LowerContent/>
    </div>
  </MuiThemeProvider>
);

export default App;
