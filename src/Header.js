import React from 'react';
import FontIcon from 'material-ui/FontIcon';
import './Header.css';

const Header = (props) => (
  <div className="header">
    <div className="name">
      Sandy Church for Orleans County Judge
    </div>
    <div className="phrase">
      Integrity - Experience - Commitment
    </div>
    <div>
      <a href="#learn-more">
        <FontIcon
          id="pageNavArrow"
          className="material-icons"
          style={{"color": "white", "fontSize": "75px"}}>keyboard_arrow_down</FontIcon>
      </a>
    </div>
  </div>
);

export default Header;
