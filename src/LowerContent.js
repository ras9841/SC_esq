import React, { Component } from 'react';
import ImageSection from './ImageSection';
import StepSection from './StepSection';

import stepper_data from './info/stepper_data.js'
import './LowerContent.css';

class LowerContent extends Component {
  state = {
    selected: 0
  }

  setIndex = (val) => {
    console.log(val);
    this.setState({selected: val})
  }

  render() {
    return (
      <div className="lowerContent">
        <div className="imageContainer">
          <ImageSection data={stepper_data} selectedIndex={this.state.selected}/>
        </div>
        <div className="stepContainer">
          <StepSection data={stepper_data} setParentState={this.setIndex.bind(this)}/>
        </div>
      </div>
    );
  }
}
export default LowerContent;
