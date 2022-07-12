import { FormControlLabel, Switch as MaterialUISwitch } from '@mui/material'
import PropTypes from 'prop-types'
import { convertToEventContextFormat, getUUID } from '../../../utils/helpers'

const Switch = ({
  id,
  label,
  checked,
  value,
  onChange,
  name,
  isDisabled,
  eventLabel,
  eventContext,
}) => {
  return (
    <FormControlLabel
      label={label}
      control={
        <MaterialUISwitch
          id={id}
          checked={checked || value}
          onChange={onChange}
          name={name}
          color="primary"
          disabled={isDisabled}
        />
      }
      data-event-label={eventLabel || null}
      data-event-context={convertToEventContextFormat(eventContext)}
    />
  )
}

Switch.defaultProps = {
  id: `switch-${getUUID()}`,
  name: null,
  checked: undefined,
  value: undefined,
  onChange: () => {},
  eventLabel: '',
  isDisabled: false,
  eventContext: null,
}

Switch.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  value: PropTypes.bool,
  onChange: PropTypes.func,
  name: PropTypes.string,
  isDisabled: PropTypes.bool,
  eventLabel: PropTypes.string,
  eventContext: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object])
  ),
}

export default Switch
