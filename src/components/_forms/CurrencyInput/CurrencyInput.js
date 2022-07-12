import { AttachMoneyRounded } from '@mui/icons-material'
import { TextField } from '@mui/material'
import PropTypes from 'prop-types'
import React from 'react'

export const currencyTypes = Object.freeze({
  USD: 'USD',
})

const currencyIcons = Object.freeze({
  [currencyTypes.USD]: <AttachMoneyRounded fontSize="small" />,
})

const CurrencyInput = ({ name, currency, value, onChange, onBlur, isError }) => {
  const formatInputValue = (inputValue) => {
    const parsedValue = parseFloat(inputValue)
    const newValue = Number.isNaN(parsedValue) ? 0 : Math.round(parsedValue * 100) / 100
    return newValue.toFixed(2)
  }

  const handleOnBlur = (e) => {
    const formattedValue = formatInputValue(e.target.value)

    // fire onChange to update value with formatting
    if (value !== formattedValue) {
      onChange(formattedValue)
    }

    onBlur(formattedValue)
  }

  return (
    <TextField
      name={name}
      value={value}
      onChange={onChange}
      onBlur={handleOnBlur}
      error={isError}
      InputProps={{ startAdornment: currencyIcons[currency] || null }}
    />
  )
}

CurrencyInput.defaultProps = {
  name: '',
  currency: currencyTypes.USD,
  value: '',
  onChange: () => {},
  onBlur: () => {},
  isError: false,
}

CurrencyInput.propTypes = {
  name: PropTypes.string,
  currency: PropTypes.oneOf(Object.values(currencyTypes)),
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  isError: PropTypes.bool,
}

export default CurrencyInput
