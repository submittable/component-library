import { RadioGroup as MaterialUIRadioGroup } from '@mui/material'
import PropTypes from 'prop-types'
import { getUUID } from '../../../utils/helpers'

const RadioGroup = ({ id, value, onChange, children, className }) => {
  return (
    <MaterialUIRadioGroup id={id} value={value} onChange={onChange} className={className}>
      {children}
    </MaterialUIRadioGroup>
  )
}

RadioGroup.defaultProps = {
  id: `radio-group-${getUUID()}`,
  className: '',
  value: '',
  onChange: () => null,
  children: null,
}

RadioGroup.propTypes = {
  id: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  onChange: PropTypes.func,
  children: PropTypes.node,
  className: PropTypes.string,
}

export default RadioGroup
