import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from './tabContent.module.less'

const TabContent = ({ id, ariaLabelledBy, className, children }) => {
  return (
    <div
      role="tabpanel"
      id={id}
      aria-labelledby={ariaLabelledBy}
      className={classNames(styles.tabContainer, className)}
    >
      {children}
    </div>
  )
}

TabContent.defaultProps = {
  className: '',
}

TabContent.propTypes = {
  id: PropTypes.string.isRequired,
  ariaLabelledBy: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

export default TabContent
