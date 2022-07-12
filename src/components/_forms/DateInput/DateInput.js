import { DatePicker, LocalizationProvider } from '@mui/lab'
import AdapterMoment from '@mui/lab/AdapterMoment'
import { TextField } from '@mui/material'
import PropTypes from 'prop-types'
import { forwardRef } from 'react'
import MOMENT_DISPLAY_FORMATS from '../../../utils/constants'
import { getUUID } from '../../../utils/helpers'

const DateInput = forwardRef(
  (
    {
      id,
      name,
      value,
      onChange,
      onBlur,
      isError,
      isDisabled,
      isPastDisabled,
      isFutureDisabled,
      fullWidth,
      inputRef,
    },
    ref
  ) => {
    return (
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <DatePicker
          id={id}
          variant="outlined"
          value={value}
          name={name}
          ref={ref}
          onAccept={onBlur}
          onChange={(newValue) => {
            if (newValue) {
              onChange(newValue.format(MOMENT_DISPLAY_FORMATS.YEAR_MONTH_DATE))
            } else {
              onChange('')
            }
          }}
          fullWidth={fullWidth}
          inputFormat={MOMENT_DISPLAY_FORMATS.MONTH_DATE_YEAR}
          disabled={isDisabled}
          InputProps={{
            onBlur,
            error: isError,
          }}
          renderInput={(params) => <TextField inputRef={inputRef} {...params} />}
          disablePast={isPastDisabled}
          disableFuture={isFutureDisabled}
        />
      </LocalizationProvider>
    )
  }
)

DateInput.displayName = 'DateInput'

DateInput.defaultProps = {
  id: `date-input-${getUUID()}`,
  name: '',
  onChange: () => {},
  onBlur: () => {},
  isError: false,
  isDisabled: false,
  fullWidth: false,
  isPastDisabled: false,
  isFutureDisabled: false,
  value: '',
  inputRef: () => null,
}

DateInput.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  isError: PropTypes.bool,
  isDisabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  isPastDisabled: PropTypes.bool,
  isFutureDisabled: PropTypes.bool,
  inputRef: PropTypes.func,
}

export default DateInput
