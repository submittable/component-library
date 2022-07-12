import { FormControlLabel, Radio } from '@mui/material'
import PropTypes from 'prop-types'

const RadioOption = ({ value, label, labelClassName }) => {
  return (
    <FormControlLabel
      value={value}
      label={label}
      control={<Radio />}
      classes={{ label: labelClassName }}
    />
  )
}

RadioOption.defaultProps = {
  labelClassName: '',
  label: '',
  value: '',
}

RadioOption.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  label: PropTypes.string,
  labelClassName: PropTypes.string,
}

export default RadioOption
