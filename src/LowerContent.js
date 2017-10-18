import React, { Component } from 'react';
import StepSection from './StepSection';
import stepper_data from './info/stepper_data.js'

import './LowerContent.css';

class LowerContent extends Component {
  render() {
    return (
      <div className="lowerContent">
        <div className="imageContainer">
          
        </div>
        <div className="stepContainer">
          <StepSection data={stepper_data}/>
        </div>
      </div>
    );
  }
}
export default LowerContent;
