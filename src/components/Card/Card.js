import { Card as MaterialUICard } from '@mui/material'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { forwardRef } from 'react'
import { convertToEventContextFormat } from '../../utils/helpers'
import styles from './card.module.less'

const Card = forwardRef(
  (
    { className, hasBorder, isElevated, onClick, children, onKeyUp, eventLabel, eventContext },
    ref
  ) => {
    return (
      <MaterialUICard
        className={classNames(
          styles.card,
          {
            [styles.elevation]: isElevated,
            [styles.border]: hasBorder,
            [styles.buttonWrapper]: onClick,
          },
          className
        )}
        ref={ref}
        role={onClick ? 'button' : null}
        tabIndex={onClick ? '0' : null}
        aria-pressed={onClick ? 'false' : null}
        onClick={onClick}
        onKeyUp={onKeyUp}
        data-event-label={eventLabel || null}
        data-event-context={convertToEventContextFormat(eventContext)}
      >
        {children}
      </MaterialUICard>
    )
  }
)
Card.displayName = 'Card'

Card.defaultProps = {
  className: null,
  isElevated: false,
  hasBorder: false,
  onClick: null,
  onKeyUp: () => {},
  eventLabel: '',
  eventContext: null,
}

Card.propTypes = {
  className: PropTypes.string,
  isElevated: PropTypes.bool,
  hasBorder: PropTypes.bool,
  onClick: PropTypes.func,
  onKeyUp: PropTypes.func,
  children: PropTypes.node.isRequired,
  eventLabel: PropTypes.string,
  eventContext: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object])
  ),
}

export default Card
