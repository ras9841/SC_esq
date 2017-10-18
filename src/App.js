import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Navbar from './Navbar';
import Header from './Header';
import StepSection from './StepSection';
import stepper_data from './info/stepper_data.js'

const App = () => (
  <MuiThemeProvider>
    <div>
      <Navbar/>
      <Header/>
      <StepSection data={stepper_data}/>
    </div>
  </MuiThemeProvider>
);

export default App;
