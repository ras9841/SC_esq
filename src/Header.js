import React, { Component } from 'react';
import FontIcon from 'material-ui/FontIcon';
import './Header.css';

const cdot = () => (
  <FontIcon
    className="material-icons"
    style={{marginLeft: "5px", marginRight: "5px"}}
    >
      face
  </FontIcon>
);

const Header = (props) => (
  <div className="header">
    <div className="name">
      Sandy Church for Orleans County Judge
    </div>
    <div className="phrase">
      Integrity - Experience - Commitment
    </div>
    <FontIcon id="pageNavArrow" onClick={() => document.getElementById("learn-more").scrollIntoView()} className="material-icons" style={{"color": "white", "fontSize": "75px"}}>keyboard_arrow_down</FontIcon>
  </div>
);

export default Header;
