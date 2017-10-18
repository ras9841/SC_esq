import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FontIcon from 'material-ui/FontIcon';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';

import './Navbar.css';

import {ToolbarTitle} from 'material-ui/Toolbar';

let fb_url = "https://www.facebook.com/Sandy-Church-for-Orleans-County-Judge-347020802407415/";
let fb_blue = "#4267b2";
let paperStyle = {
  position: "fixed",
  width: "100%",
  paddingRight: "10px",
  backgroundColor: fb_blue,
  zIndex: "2",
  color: "rgb(224, 224, 224)"
}

export default class Navbar extends Component {
  render() {
    return (
      <Paper zDepth={4} rounded={false} style={paperStyle}>
          <div style={{display: "flex", float: "left"}}>
            <ToolbarTitle
              style={{marginLeft: "10px", marginTop: "3px"}}
              text="Sandy Church, Esq."/>
          </div>
          <div style={{display: "flex", float: "right", marginRight: "25px"}}>
            <FlatButton
            href={fb_url}
            label=" Facebook"
            style={{marginTop: "9px"}}
            icon={<FontIcon className="material-icons">thumb_up</FontIcon>}
            backgroundColor="rgb(224, 224, 224)"
          />
      </div>
    </Paper>
    )
  }
}
