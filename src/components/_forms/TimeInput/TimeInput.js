import PropTypes from 'prop-types'
import { forwardRef } from 'react'
import MOMENT_DISPLAY_FORMATS from '../../../utils/constants'
import { getMomentFromTime, getUUID } from '../../../utils/helpers'
import Autocomplete from '../Autocomplete/Autocomplete'
import getTimeListInterval from './utils'

const TimeInput = forwardRef(
  ({ id, name, value, onChange, onBlur, isError, isDisabled, fullWidth }, ref) => {
    return (
      <Autocomplete
        value={value}
        ref={ref}
        onChange={(e) => {
          const newValue = getMomentFromTime(e).format(MOMENT_DISPLAY_FORMATS.TIME_MILITARY)
          onChange(newValue)
        }}
        isAutoSelect
        onBlur={onBlur}
        isLoading={false}
        options={getTimeListInterval() || []}
        getOptionLabel={(option) => getMomentFromTime(option, false).format('h:mm A')}
        isFullWidth
        isError={isError}
        fullWidth={fullWidth}
        isDisabled={isDisabled}
        name={name}
        id={id}
        isFreeSolo
      />
    )
  }
)

TimeInput.displayName = 'TimeInput'

TimeInput.defaultProps = {
  id: `time-input-${getUUID()}`,
  name: '',
  onChange: () => {},
  onBlur: () => {},
  isError: false,
  isDisabled: false,
  fullWidth: false,
  value: '',
}

TimeInput.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  isDisabled: PropTypes.bool,
  isError: PropTypes.bool,
  fullWidth: PropTypes.bool,
}

export default TimeInput
