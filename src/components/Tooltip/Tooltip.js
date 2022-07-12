import { Tooltip as MuiTooltip } from '@mui/material'
import PropTypes from 'prop-types'
import styles from './tooltip.module.less'

export const placementOptions = Object.freeze({
  default: 'bottom',
  top: 'top-start',
})

const Tooltip = (props) => {
  const { children, placement } = props
  return (
    <MuiTooltip {...props} classes={{ tooltip: styles.tooltip }} placement={placement}>
      {children}
    </MuiTooltip>
  )
}

Tooltip.defaultProps = {
  placement: placementOptions.default,
}

Tooltip.propTypes = {
  children: PropTypes.element.isRequired,
  placement: PropTypes.oneOf([...Object.values(placementOptions)]),
}

export default Tooltip
