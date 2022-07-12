import PropTypes from 'prop-types'
import { LinearProgress } from '@mui/material'
import styles from './progressBar.module.less'

const ProgressBar = ({
  currentValue,
  goalValue,
  formatValues,
  shouldOnlyShowCurrentValue,
  shouldHideAnnotations,
  className,
}) => {
  return (
    <div className={className}>
      <LinearProgress
        value={(currentValue / goalValue) * 100}
        variant="determinate"
        classes={{
          root: styles.progress,
          barColorPrimary: styles.barFilled,
          colorPrimary: styles.barEmpty,
        }}
      />
      {!shouldHideAnnotations && (
        <div className={styles.textContainer}>
          {shouldOnlyShowCurrentValue ? (
            <p>{formatValues(currentValue)}</p>
          ) : (
            <>
              <p>{formatValues(0)}</p>
              <p className={styles.midpointValue}>{formatValues(goalValue / 2)}</p>
              <p className={styles.goalValue}>{formatValues(goalValue)}</p>
            </>
          )}
        </div>
      )}
    </div>
  )
}

ProgressBar.defaultProps = {
  className: '',
  shouldOnlyShowCurrentValue: false,
  shouldHideAnnotations: false,
  formatValues: (value) => value,
}

ProgressBar.propTypes = {
  currentValue: PropTypes.number.isRequired,
  goalValue: PropTypes.number.isRequired,
  formatValues: PropTypes.func,
  shouldOnlyShowCurrentValue: PropTypes.bool,
  shouldHideAnnotations: PropTypes.bool,
  className: PropTypes.string,
}

export default ProgressBar
