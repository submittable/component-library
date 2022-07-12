import classNames from 'classnames'
import PropTypes from 'prop-types'
import styles from './sectionHeading.module.less'

const SectionHeading = ({
  headingText,
  subheadingText,
  HeadingButtons,
  className,
  isSmallerHeadingSection,
}) => {
  const headingContainer = isSmallerHeadingSection
    ? styles.smallerHeadingContainer
    : styles.headingContainer

  return (
    <div className={classNames(headingContainer, className)}>
      <div>
        <h2>{headingText}</h2>
        {subheadingText && <p className={styles.subheading}>{subheadingText}</p>}
      </div>
      <div>{HeadingButtons}</div>
    </div>
  )
}

SectionHeading.defaultProps = {
  subheadingText: '',
  HeadingButtons: null,
  className: '',
  isSmallerHeadingSection: false,
}

SectionHeading.propTypes = {
  headingText: PropTypes.string.isRequired,
  subheadingText: PropTypes.string,
  HeadingButtons: PropTypes.node,
  className: PropTypes.string,
  isSmallerHeadingSection: PropTypes.bool,
}

export default SectionHeading
