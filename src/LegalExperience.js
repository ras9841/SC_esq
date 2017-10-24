import React from 'react';
import legal_data from './info/legal_data.js';
import RaisedButton from 'material-ui/RaisedButton';

import './LegalExperience.css';

const btnStyle = {
  marginBottom: "10px",
  display: "block",
}

const defaultColor = "rgb(255, 255, 255)";
const selectedColor = "rgb(224, 224, 224)";

const LegalTypeBtn = (props) => (
    <RaisedButton
      label={props.name}
      primary={false}
      secondary={false}
      style={btnStyle}
      icon={props.icon}
      fullWidth={true}
      backgroundColor={ props.selected === props.name ? selectedColor: defaultColor}
      onClick={props.onClick}
    />
);

export default class LegalExperience extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "none"
    };
    this.data = legal_data;
  }

  handleClick = (name, e) => {
    this.setState({selected: name})
  }

  render() {
    return (
      <div>
      {this.data.map(({name, icon, details}, index) => {
        let displaySty = this.state.selected === name ? "block" : "none";
        return (
          <div key={index}>
            <LegalTypeBtn
              key={name} name={name} icon={icon} selected={this.state.selected}
              onClick={(e) => this.handleClick(name, e)}
            />
            <div style={{display: displaySty}} className="legalDetails">
              <div>
                {details}
              </div>
            </div>
          </div>
        )})
      }
      </div>
    );
  }
}
