import { IconButton as MUIIconButton } from '@mui/material'
import PropTypes from 'prop-types'
import { forwardRef } from 'react'

const IconButton = forwardRef(
  (
    {
      icon,
      onClick,
      title,
      isDisabled,
      ariaLabel,
      className,
      id,
      ariaControls,
      ariaHaspopup,
      ariaExpanded,
    },
    ref
  ) => {
    return (
      <MUIIconButton
        title={title}
        aria-label={ariaLabel}
        onClick={onClick}
        disabled={isDisabled}
        className={className}
        ref={ref}
        id={id}
        aria-controls={ariaControls}
        aria-haspopup={ariaHaspopup}
        aria-expanded={ariaExpanded}
      >
        {icon}
      </MUIIconButton>
    )
  }
)
IconButton.displayName = 'IconButton'

IconButton.defaultProps = {
  title: '',
  ariaLabel: '',
  isDisabled: false,
  className: '',
  id: '',
  ariaControls: '',
  ariaHaspopup: '',
  ariaExpanded: '',
}

IconButton.propTypes = {
  icon: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string,
  ariaLabel: PropTypes.string,
  isDisabled: PropTypes.bool,
  className: PropTypes.string,
  id: PropTypes.string,
  ariaControls: PropTypes.string,
  ariaHaspopup: PropTypes.string,
  ariaExpanded: PropTypes.string,
}

export default IconButton
