import React from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Navbar from './Navbar';
import Header from './Header';
import LowerContent from './LowerContent'

const App = () => (
  <MuiThemeProvider>
    <div>
      <Navbar/>
      <Header/>
      <LowerContent/>
    </div>
  </MuiThemeProvider>
);

export default App;
