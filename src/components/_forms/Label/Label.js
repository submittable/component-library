import PropTypes from 'prop-types'
import styles from './label.module.less'

const Label = ({ forInput, text, subText, isRequired }) => {
  return (
    <div>
      <label htmlFor={forInput} className={styles.label}>
        {text}
        {isRequired && <span className={styles.required}>*</span>}
      </label>
      {subText && <span className={styles.subText}>{subText}</span>}
    </div>
  )
}

Label.defaultProps = {
  forInput: null,
  subText: null,
  isRequired: false,
}

Label.propTypes = {
  forInput: PropTypes.string,
  text: PropTypes.string.isRequired,
  subText: PropTypes.string,
  isRequired: PropTypes.bool,
}

export default Label
