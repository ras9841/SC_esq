import React from 'react';
import {Step, Stepper, StepButton, StepContent} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';

class StepSection extends React.Component {
  constructor(props) {
    super(props);
    this.numSections = props.data.length;
    this.setParentState = props.setParentState;

    this.state = {
      stepIndex: 0,
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
        {step < this.numSections - 1 && (
          <RaisedButton
            label="Next"
            disableTouchRipple={true}
            disableFocusRipple={true}
            primary={true}
            onClick={this.handleNext}
            style={{marginRight: 12}}
          />
        )}
        {step > 0 && (
          <FlatButton
            label="Back"
            disableTouchRipple={true}
            disableFocusRipple={true}
            onClick={this.handlePrev}
          />
        )}
      </div>
    );
  }

  render() {
    const {stepIndex} = this.state;
    const {data} = this.props;
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
              onClick={() => this.handleCurrent(index)}
              icon={<FontIcon className="material-icons">add_circle_outline</FontIcon>}
              >
              {d.title}
            </StepButton>
            <StepContent>
              <p>
                {d.content}
              </p>
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