import classNames from 'classnames'
import PropTypes from 'prop-types'
import styles from './headingWithContent.module.less'

export const headingSizes = Object.freeze({
  MEDIUM: 'MEDIUM',
  LARGE: 'LARGE',
})

const HeadingWithContent = ({ headingText, headingSize, bodyText, className, children }) => {
  const headingComponent = {
    [headingSizes.MEDIUM]: <h5>{headingText}</h5>,
    [headingSizes.LARGE]: <h4>{headingText}</h4>,
  }[headingSize]

  return (
    <div className={classNames(styles.container, className)}>
      {headingComponent}
      {bodyText && <p className={styles.bodyText}>{bodyText}</p>}
      {children && <div>{children}</div>}
    </div>
  )
}

HeadingWithContent.defaultProps = {
  headingSize: headingSizes.MEDIUM,
  bodyText: null,
  children: null,
  className: null,
}

HeadingWithContent.propTypes = {
  headingText: PropTypes.string.isRequired,
  headingSize: PropTypes.oneOf([...Object.values(headingSizes)]),
  bodyText: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
}

export default HeadingWithContent
