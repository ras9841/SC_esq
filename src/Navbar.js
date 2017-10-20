import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FontIcon from 'material-ui/FontIcon';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';

import './Navbar.css';

import {ToolbarTitle} from 'material-ui/Toolbar';

let fb_url = "https://www.facebook.com/Sandy-Church-for-Orleans-County-Judge-347020802407415/";
let blue = "#4156a1";
let paperStyle = {
  position: "fixed",
  width: "100%",
  paddingRight: "10px",
  backgroundColor: blue,
  zIndex: "2",
  color: "white"
}

export default class Navbar extends Component {
  render() {
    return (
      <Paper zDepth={4} rounded={false} style={paperStyle}>
        <div style={{display: "flex", float: "left"}}>
          <ToolbarTitle
            style={{marginLeft: "10px", marginTop: "3px"}}
            text="Sanford Church, Esq."/>
        </div>
        <div style={{display: "flex", float: "right", marginRight: "15px", marginTop: "5px"}}>
          <a href={fb_url} style={{color: "white"}}>
            <i class="fa fa-facebook-official fa-3x" aria-hidden="true"/>
          </a>
        </div>
    </Paper>
    )
  }
}
