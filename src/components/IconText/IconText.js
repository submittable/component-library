import PropTypes from 'prop-types'
import styles from './iconText.module.less'

const IconText = ({ icon, children }) => {
  return (
    <span className={styles.wrapper}>
      {icon}
      <p className={styles.text}>{children}</p>
    </span>
  )
}

IconText.propTypes = {
  icon: PropTypes.element.isRequired,
  children: PropTypes.node.isRequired,
}

export default IconText
