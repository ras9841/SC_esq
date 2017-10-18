import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './Navbar.css';

import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar';

export default class Navbar extends Component {
  render() {
    return (
      <Toolbar>
        <ToolbarGroup firstChild={true}>
          <ToolbarTitle
            style={{marginLeft: "10px", marginTop: "3px"}} 
            text="Sandy Church, Esq."/>
        </ToolbarGroup>
      </Toolbar>
    )
  }
}
