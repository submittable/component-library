import { StepConnector } from '@mui/material'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import Stepper from '../../components/Stepper/Stepper'

const defaultProps = {
  numSteps: 3,
  className: '',
  stepLabels: [],
  Connector: <StepConnector />,
  showNumOfSteps: false,
  showCustomStepper: false,
  hideStepsComplete: false,
  isVerticalStepper: false,
  currentStep: 2,
}

describe('Stepper', () => {
  describe('Given the Stepper has rendered', () => {
    test('it should show contents', () => {
      const { getByText } = render(<Stepper {...defaultProps} />)
      const numSteps = getByText(defaultProps.numSteps)
      expect(numSteps).toBeInTheDocument()
    })
  })

  describe('Given the Stepper has rendered,', () => {
    test('it should show the currentStep', async () => {
      const { getByText } = render(<Stepper {...defaultProps} />)
      const currentStep = getByText(defaultProps.currentStep + 1)
      expect(currentStep).toBeInTheDocument()
    })
  })
})
