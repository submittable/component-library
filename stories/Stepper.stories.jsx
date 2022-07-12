import { StepConnector } from '@mui/material'
import Stepper from '../src/components/Stepper/Stepper'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/Stepper',
  component: Stepper,
  argTypes: {
    numSteps: '',
    currentStep: '',
    className: '',
    stepLabels: '',
    Connector: '',
    showNumOfSteps: [true, false],
    showCustomStepper: [true, false],
    hideStepsComplete: [true, false],
    isVerticalStepper: [true, false],
  },
}

export const StepperComponent = (args) => {
  return (
    <>
      <h2>Default Stepper with Connector</h2>
      <Stepper {...args} />
      <h2>Custom Stepper without Connector</h2>
      <Stepper {...args} Connector="" showCustomStepper />
    </>
  )
}

StepperComponent.args = {
  numSteps: 3,
  currentStep: 1,
  className: '',
  stepLabels: ['Step 1', 'Step 2', 'Step 3'],
  Connector: <StepConnector />,
  showNumOfSteps: false,
  showCustomStepper: false,
  hideStepsComplete: false,
  isVerticalStepper: false,
}
