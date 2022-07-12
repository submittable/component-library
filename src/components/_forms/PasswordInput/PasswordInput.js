import { Visibility, VisibilityOff } from '@mui/icons-material'
import { IconButton, InputAdornment, TextField } from '@mui/material'
import PropTypes from 'prop-types'
import { useState } from 'react'
import { getUUID } from '../../../utils/helpers'
import { buttonSizes } from '../../Button/Button'

const PasswordInput = ({ id, value, isError, onChange, onBlur, fullWidth }) => {
  const [passwordVisible, setPasswordVisible] = useState(false)
  const togglePasswordVisibility = () => setPasswordVisible(!passwordVisible)

  return (
    <TextField
      id={id}
      name={id}
      type={passwordVisible ? 'text' : 'password'}
      value={value}
      error={isError}
      onChange={onChange}
      onBlur={onBlur}
      variant="outlined"
      fullWidth={fullWidth}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={togglePasswordVisibility}
              size={buttonSizes.default}
            >
              {passwordVisible ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  )
}

PasswordInput.defaultProps = {
  id: `password-${getUUID()}`,
  isError: false,
  fullWidth: false,
  onBlur: null,
  value: '',
  onChange: () => null,
}

PasswordInput.propTypes = {
  id: PropTypes.string,
  value: PropTypes.string,
  isError: PropTypes.bool,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  fullWidth: PropTypes.bool,
}

export default PasswordInput
