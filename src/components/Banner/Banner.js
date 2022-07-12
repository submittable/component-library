import classNames from 'classnames'
import PropTypes from 'prop-types'
import Card from '../Card/Card'
import styles from './banner.module.less'

export const bannerTypes = Object.freeze({
  primary: 'primary',
  secondary: 'secondary',
  warning: 'warning',
  default: 'default',
  cancelled: 'cancelled',
})

const Banner = ({ text, type, className, children }) => {
  const bannerStyles = classNames(
    styles.baseBanner,
    {
      [styles.primary]: type === bannerTypes.primary,
      [styles.secondary]: type === bannerTypes.secondary,
      [styles.warning]: type === bannerTypes.warning,
      [styles.cancelled]: type === bannerTypes.cancelled,
    },
    className
  )

  return (
    <Card className={bannerStyles}>
      {text && <h5 className={styles.text}>{text}</h5>}
      {children}
    </Card>
  )
}

Banner.defaultProps = {
  text: null,
  type: bannerTypes.primary,
  className: null,
  children: null,
}

Banner.propTypes = {
  text: PropTypes.string,
  type: PropTypes.oneOf([...Object.values(bannerTypes)]),
  className: PropTypes.string,
  children: PropTypes.node,
}

export default Banner
