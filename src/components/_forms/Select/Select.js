import { MenuItem, Select as MaterialUISelect } from '@mui/material'
import PropTypes from 'prop-types'
import { convertToEventContextFormat, getUUID } from '../../../utils/helpers'

export const createSelectOption = ({ key, value, label }) => (
  <MenuItem key={key} value={value}>
    {label}
  </MenuItem>
)

const Select = ({
  id,
  options,
  value,
  onChange,
  onBlur,
  isError,
  fullWidth,
  className,
  isDisabled,
  eventLabel,
  eventContext,
}) => {
  return (
    <MaterialUISelect
      id={id}
      value={options ? value : ''}
      onChange={onChange}
      onBlur={onBlur}
      fullWidth={fullWidth}
      variant="outlined"
      error={isError}
      className={className}
      disabled={isDisabled}
      data-event-label={eventLabel || null}
      data-event-context={convertToEventContextFormat(eventContext)}
    >
      {options && options.map((option) => createSelectOption(option))}
    </MaterialUISelect>
  )
}

Select.defaultProps = {
  id: `select-${getUUID()}`,
  options: [],
  fullWidth: false,
  className: null,
  onBlur: null,
  isError: false,
  value: '',
  onChange: () => null,
  isDisabled: false,
  eventLabel: '',
  eventContext: null,
}

Select.propTypes = {
  id: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
      label: PropTypes.string,
    })
  ),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  fullWidth: PropTypes.bool,
  className: PropTypes.string,
  isError: PropTypes.bool,
  isDisabled: PropTypes.bool,
  eventLabel: PropTypes.string,
  eventContext: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object])
  ),
}

export default Select
