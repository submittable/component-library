import { TextField } from '@mui/material'
import PropTypes from 'prop-types'
import { getUUID } from '../../../utils/helpers'
import styles from './textInput.module.less'

const TextInput = ({
  id,
  name,
  type,
  min,
  isError,
  value,
  onChange,
  onBlur,
  fullWidth,
  isDisabled,
  isMultiline,
  rows,
  placeholder,
  StartAdornment,
}) => {
  return (
    <TextField
      id={id}
      name={name}
      type={type}
      value={value}
      error={isError}
      onChange={onChange}
      onBlur={onBlur}
      variant="outlined"
      multiline={isMultiline}
      rows={isMultiline ? rows : null}
      placeholder={placeholder}
      fullWidth={fullWidth}
      disabled={isDisabled}
      min={min}
      inputProps={{
        min: min || 0,
      }}
      // eslint-disable-next-line react/jsx-no-duplicate-props
      InputProps={{
        startAdornment: StartAdornment,
        classes: { root: isMultiline && styles.multiline },
      }}
    />
  )
}

TextInput.defaultProps = {
  id: `text-input-${getUUID()}`,
  value: '',
  name: '',
  onChange: () => {},
  type: 'text',
  isError: false,
  fullWidth: false,
  isDisabled: false,
  isMultiline: false,
  rows: 3,
  placeholder: null,
  onBlur: null,
  StartAdornment: null,
  min: 0,
}

TextInput.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  isError: PropTypes.bool,
  type: PropTypes.string,
  fullWidth: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isMultiline: PropTypes.bool,
  rows: PropTypes.number,
  placeholder: PropTypes.string,
  StartAdornment: PropTypes.node,
  min: PropTypes.number,
}

export default TextInput
