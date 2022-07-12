import { MenuItem as MuiMenuItem } from '@mui/material'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { forwardRef } from 'react'
import { convertToEventContextFormat } from '../../utils/helpers'
import styles from './menuItem.module.less'

const MenuItem = forwardRef(
  ({ onClick, className, isDanger, children, eventLabel, eventContext }, ref) => {
    return (
      <MuiMenuItem
        onClick={onClick}
        ref={ref}
        className={classNames(styles.menuItem, { [styles.isDanger]: isDanger }, className)}
        data-event-label={eventLabel || null}
        data-event-context={convertToEventContextFormat(eventContext)}
      >
        {children}
      </MuiMenuItem>
    )
  }
)

MenuItem.displayName = 'MenuItem'

MenuItem.defaultProps = {
  onClick: () => {},
  className: '',
  isDanger: false,
  eventLabel: '',
  eventContext: null,
}

MenuItem.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  isDanger: PropTypes.bool,
  eventLabel: PropTypes.string,
  eventContext: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object])
  ),
}

export default MenuItem
