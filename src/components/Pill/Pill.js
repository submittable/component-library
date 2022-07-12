import { Chip } from '@mui/material'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import styles from './pill.module.less'

export const pillSizes = Object.freeze({
  small: 'small',
  medium: 'medium',
})

export const pillTypes = Object.freeze({
  filled: 'default',
  outlined: 'outlined',
})

export const pillColors = Object.freeze({
  primary: 'primary',
  secondary: 'secondary',
  default: 'default',
  warning: 'warning',
})

const Pill = ({ type, size, color, text, className }) => {
  return (
    <Chip
      label={text}
      size={size}
      variant={type}
      classes={{
        root: classNames(
          styles.pill,
          {
            [styles.primary]: color === pillColors.primary,
            [styles.secondary]: color === pillColors.secondary,
            [styles.warning]: color === pillColors.warning,
          },
          className
        ),
      }}
    />
  )
}

Pill.defaultProps = {
  type: pillTypes.filled,
  size: pillTypes.medium,
  color: pillColors.default,
  className: null,
}

Pill.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf([...Object.values(pillTypes)]),
  size: PropTypes.oneOf([...Object.values(pillSizes)]),
  color: PropTypes.oneOf([...Object.values(pillColors)]),
  className: PropTypes.string,
}

export default Pill
