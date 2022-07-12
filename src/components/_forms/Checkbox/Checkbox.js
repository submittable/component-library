import { Checkbox as MaterialUICheckbox, FormControlLabel } from '@mui/material'
import PropTypes from 'prop-types'

const Checkbox = ({ id, name, value, labelText, onChange }) => {
  return labelText ? (
    <FormControlLabel
      label={labelText}
      control={
        <MaterialUICheckbox size="medium" id={id} name={name} checked={value} onChange={onChange} />
      }
    />
  ) : (
    <MaterialUICheckbox size="medium" id={id} name={name} checked={value} onChange={onChange} />
  )
}

Checkbox.defaultProps = {
  labelText: null,
  onChange: () => null,
  id: '',
  name: '',
  value: false,
}

Checkbox.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  labelText: PropTypes.string,
  value: PropTypes.bool,
  onChange: PropTypes.func,
}

export default Checkbox
