import { Avatar as MaterialUIAvatar } from '@mui/material'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import styles from './avatar.module.less'

export const avatarColors = Object.freeze({
  primary: 'primary',
  secondary: 'secondary',
  default: 'default',
})

const Avatar = ({ firstName, lastName, color, className }) => {
  return (
    <MaterialUIAvatar
      className={classNames(
        {
          [styles.primary]: color === avatarColors.primary,
          [styles.secondary]: color === avatarColors.secondary,
        },
        className
      )}
    >
      {firstName && lastName ? `${firstName[0]}${lastName[0]}` : null}
    </MaterialUIAvatar>
  )
}

Avatar.defaultProps = {
  color: avatarColors.primary,
  className: null,
  firstName: '',
  lastName: '',
}

Avatar.propTypes = {
  color: PropTypes.oneOf([...Object.values(avatarColors)]),
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  className: PropTypes.string,
}

export default Avatar
