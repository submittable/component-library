import { Step, StepConnector, StepLabel, Stepper as MaterialUIStepper } from '@mui/material'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { getUUID } from '../../utils/helpers'
import styles from './stepper.module.less'

const Stepper = ({
  numSteps,
  currentStep,
  className,
  stepLabels,
  Connector,
  showNumOfSteps,
  showCustomStepper,
  hideStepsComplete,
  isVerticalStepper,
}) => {
  /* create an array of unique step labels. Mui's Stepper components
  need values from this array to render the component properly */
  const steps =
    stepLabels.length > 0
      ? stepLabels
      : Array(numSteps)
          .fill('step')
          .map((label) => label)

  return (
    <div className={classNames(styles.container, className)}>
      {showNumOfSteps && (
        <h4 className={styles.stepText}>{`Step ${currentStep + 1} of ${numSteps}`}</h4>
      )}
      <MaterialUIStepper
        activeStep={currentStep}
        connector={Connector}
        orientation={isVerticalStepper ? 'vertical' : 'horizontal'}
        className={styles.stepper}
        alternativeLabel={!isVerticalStepper}
      >
        {steps.map((label) => {
          return (
            <Step key={`${label}-${getUUID()}`} completed={hideStepsComplete ? false : undefined}>
              {showCustomStepper ? (
                <StepLabel
                  StepIconComponent={({ active, completed }) => (
                    <div
                      className={classNames(styles.stepIcon, {
                        [styles.active]: active,
                        [styles.completed]: completed,
                      })}
                    />
                  )}
                  classes={{ labelContainer: styles.hide }}
                >
                  {label}
                </StepLabel>
              ) : (
                <StepLabel
                  StepIconProps={{
                    classes: {
                      root: styles.root,
                      completed: styles.completed,
                      error: styles.error,
                    },
                  }}
                >
                  {label}
                </StepLabel>
              )}
            </Step>
          )
        })}
      </MaterialUIStepper>
    </div>
  )
}
Stepper.defaultProps = {
  numSteps: 0,
  className: '',
  stepLabels: [],
  Connector: <StepConnector />,
  showNumOfSteps: false,
  showCustomStepper: false,
  hideStepsComplete: false,
  isVerticalStepper: false,
}

Stepper.propTypes = {
  numSteps: PropTypes.number,
  currentStep: PropTypes.number.isRequired,
  className: PropTypes.string,
  stepLabels: PropTypes.arrayOf(PropTypes.string),
  Connector: PropTypes.element,
  showNumOfSteps: PropTypes.bool,
  showCustomStepper: PropTypes.bool,
  hideStepsComplete: PropTypes.bool,
  isVerticalStepper: PropTypes.bool,
}

export default Stepper
