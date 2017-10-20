import React from 'react';
import {Step, Stepper, StepButton, StepContent} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import './StepSection.css';

class StepSection extends React.Component {
  constructor(props) {
    super(props);
    this.numSections = props.data.length;
    this.setParentState = props.setParentState;

    this.state = {
      stepIndex: 0
    };
  }

  handleCurrent = (index) => {
    this.setState({stepIndex: index});
    this.setParentState(index);
  }

  handleNext = () => {
    const {stepIndex} = this.state;
    if (stepIndex < this.numSections) {
      this.setState({stepIndex: stepIndex + 1});
      this.setParentState(stepIndex + 1);
    }
  };

  handlePrev = () => {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
      this.setParentState(stepIndex - 1);
    }
  };

  renderStepActions(step) {
    return (
      <div style={{margin: '12px 0'}}>
        {step > 0 && (
          <FlatButton
            style={{marginRight: "10px"}}
            backgroundColor="rgb(224, 224, 224)"
            label="Previous"
            disableTouchRipple={true}
            disableFocusRipple={true}
            onClick={this.handlePrev}
          />
        )}
        {step < this.numSections - 1 && (
          <RaisedButton
            backgroundColor="rgb(65, 86, 161)"
            label="Forward"
            labelColor="rgb(255,255,255)"
            disableTouchRipple={true}
            disableFocusRipple={true}
            onClick={this.handleNext}
            style={{marginRight: 12}}
          />
        )}
      </div>
    );
  }

  render() {
    const {stepIndex} = this.state;
    const {data} = this.props;
    const activeIcon = <FontIcon className="material-icons">keyboard_arrow_right</FontIcon>;
    const defaultIcon = <FontIcon className="material-icons">keyboard_arrow_down</FontIcon>
    return (
      <div>
        <Stepper
          activeStep={stepIndex}
          linear={false}
          orientation="vertical"
        >
          {data.map((d, index) => (
            <Step key={index}>
            <StepButton
              onClick={() => this.setState({stepIndex: index})}
              icon={index === stepIndex ? activeIcon : defaultIcon}
              >
              {d.title}
            </StepButton>
            <StepContent>
              <div style={{margin: "15px 0px"}}>
                {d.content}
              </div>
              {this.renderStepActions(index)}
            </StepContent>
          </Step>
          ))}
        </Stepper>
      </div>
    );
  }
}

export default StepSection;
