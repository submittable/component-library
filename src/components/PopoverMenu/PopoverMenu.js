import { ClickAwayListener, Grow, MenuList, Paper, Popper } from '@mui/material'
import PropTypes from 'prop-types'
import styles from './popoverMenu.module.less'

const PopoverMenu = ({
  anchorElement,
  open,
  onClose,
  onClick,
  className,
  children,
  ariaLabelledby,
  id,
}) => {
  // Needed to return the focus to the Ellipsis Menu Button
  const handleListKeyDown = (event) => {
    if (event.key === 'Tab') {
      event.preventDefault()
      anchorElement?.focus()
      onClose()
    } else if (event.key === 'Escape') {
      anchorElement?.focus()
      onClose()
    }
  }
  return (
    <Popper
      open={open}
      anchorEl={anchorElement}
      role={undefined}
      placement="bottom-start"
      transition
      className={styles.menu}
    >
      {({ TransitionProps, placement }) => (
        <Grow
          {...TransitionProps}
          style={{
            transformOrigin: placement === 'bottom-start' ? 'left top' : 'left bottom',
          }}
        >
          <Paper>
            <ClickAwayListener onClickAway={onClose}>
              <MenuList
                autoFocusItem={open}
                autoFocus
                id={id}
                aria-labelledby={ariaLabelledby}
                onClick={onClick}
                className={className}
                onKeyDown={handleListKeyDown}
              >
                {children}
              </MenuList>
            </ClickAwayListener>
          </Paper>
        </Grow>
      )}
    </Popper>
  )
}

PopoverMenu.defaultProps = {
  className: null,
  onClick: () => {},
  ariaLabelledby: '',
  id: '',
}

PopoverMenu.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onClick: PropTypes.func,
  anchorElement: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  ariaLabelledby: PropTypes.string,
  id: PropTypes.string,
}

export default PopoverMenu
