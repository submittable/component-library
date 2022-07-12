import { MoreHoriz } from '@mui/icons-material'
import PropTypes from 'prop-types'
import { forwardRef, useRef, useState } from 'react'
import { convertToEventContextFormat } from '../../utils/helpers'
import IconButton from '../IconButton/IconButton'
import PopoverMenu from '../PopoverMenu/PopoverMenu'

const EllipsisMenu = forwardRef(({ buttonClassName, children, eventLabel, eventContext }, ref) => {
  const buttonRef = useRef(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <span
      ref={ref}
      data-event-label={eventLabel || null}
      data-event-context={convertToEventContextFormat(eventContext)}
    >
      <IconButton
        icon={<MoreHoriz />}
        onClick={toggleMenu}
        id="ellipsis-button"
        className={buttonClassName}
        ref={buttonRef}
        ariaControls={isMenuOpen ? 'ellipsis-menu' : undefined}
        ariaHaspopup="true"
        ariaExpanded={isMenuOpen ? 'true' : undefined}
      />
      {isMenuOpen && (
        <PopoverMenu
          id="ellipsis-menu"
          onClick={toggleMenu}
          onClose={toggleMenu}
          open={isMenuOpen}
          anchorElement={buttonRef.current}
          ariaLabelledby="ellipsis-button"
        >
          {children}
        </PopoverMenu>
      )}
    </span>
  )
})
EllipsisMenu.displayName = 'EllipsisMenu'

EllipsisMenu.defaultProps = {
  buttonClassName: '',
  eventLabel: '',
  eventContext: null,
}

EllipsisMenu.propTypes = {
  children: PropTypes.node.isRequired,
  buttonClassName: PropTypes.string,
  eventLabel: PropTypes.string,
  eventContext: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object])
  ),
}

export default EllipsisMenu
