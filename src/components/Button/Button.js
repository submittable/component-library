import LoadingButton from '@mui/lab/LoadingButton'
import MaterialUIButton from '@mui/material/Button'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { convertToEventContextFormat } from '../../utils/helpers'
import styles from './button.module.less'

export const buttonTypes = Object.freeze({
  filled: 'contained',
  outlined: 'outlined',
  text: 'text',
  link: 'link', // for appearance only - use LinkButton component for buttons to function as links
})

export const buttonColors = Object.freeze({
  default: 'default',
  primary: 'primary',
  secondary: 'secondary',
})

export const buttonSizes = Object.freeze({
  default: 'large',
  medium: 'medium',
  small: 'small',
})

const Button = ({
  type,
  color,
  buttonType,
  buttonText,
  onClick,
  isDisabled,
  isLoading,
  fullWidth,
  startIcon,
  className,
  children,
  size,
  eventLabel,
  eventContext,
}) => {
  const isLinkType = buttonType === buttonTypes.link
  const buttonStyles = classNames(styles.button, className, {
    [styles.default]: color === buttonColors.default,
    [styles.link]: isLinkType,
  })

  if (isLoading) {
    return <LoadingButton type={type} variant={buttonType} size={size} loading disabled />
  }

  return (
    <MaterialUIButton
      type={type}
      onClick={onClick}
      className={buttonStyles}
      color={color === buttonColors.default ? buttonColors.primary : color}
      variant={buttonType}
      disabled={isDisabled}
      disableElevation
      fullWidth={fullWidth}
      data-event-label={eventLabel || null}
      data-event-context={convertToEventContextFormat(eventContext)}
      disableRipple={isLinkType}
      startIcon={startIcon}
    >
      {buttonText}
      {children}
    </MaterialUIButton>
  )
}

Button.defaultProps = {
  type: 'button',
  color: buttonColors.primary,
  buttonType: buttonTypes.filled,
  isDisabled: false,
  isLoading: false,
  className: null,
  fullWidth: false,
  onClick: () => {},
  children: null,
  size: buttonSizes.default,
  startIcon: null,
  eventLabel: '',
  eventContext: null,
}

Button.propTypes = {
  type: PropTypes.string,
  buttonType: PropTypes.oneOf([...Object.values(buttonTypes)]),
  buttonText: PropTypes.string.isRequired,
  color: PropTypes.oneOf([...Object.values(buttonColors)]),
  onClick: PropTypes.func,
  isDisabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  className: PropTypes.string,
  fullWidth: PropTypes.bool,
  children: PropTypes.node,
  size: PropTypes.oneOf([...Object.values(buttonSizes)]),
  startIcon: PropTypes.node,
  eventLabel: PropTypes.string,
  eventContext: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object])
  ),
}

export default Button
