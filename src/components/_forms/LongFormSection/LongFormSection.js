import { ExpandLess, ExpandMore } from '@mui/icons-material'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { useState } from 'react'
import IconButton from '../../IconButton/IconButton'
import styles from './longFormSection.module.less'

export const FORM_SECTION_ELEMENT_ID = 'long-form-section'

const LongFormSection = ({ sectionNum, title, isCollapsible, children }) => {
  const [isExpanded, setIsExpanded] = useState(!isCollapsible)

  const clickableProps = isCollapsible
    ? {
        role: 'button',
        tabIndex: 0,
        onClick: () => setIsExpanded(!isExpanded),
        onKeyUp: (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            setIsExpanded(!isExpanded)
          }
        },
      }
    : {}

  return (
    <div
      id={sectionNum >= 0 ? FORM_SECTION_ELEMENT_ID : undefined}
      data-section-num={sectionNum}
      className={styles.formSection}
    >
      {title && (
        <span
          className={classNames(styles.headingContainer, { [styles.collapsible]: isCollapsible })}
          {...clickableProps}
        >
          <span>
            <h2>{title}</h2>
            {isCollapsible && <p className={styles.optionalText}>optional</p>}
          </span>
          {isCollapsible && (
            <IconButton
              icon={isExpanded ? <ExpandLess /> : <ExpandMore />}
              onClick={() => setIsExpanded(!isExpanded)}
              className={styles.button}
            />
          )}
        </span>
      )}
      <div className={classNames(styles.fields, { [styles.isCollapsed]: !isExpanded })}>
        {children}
      </div>
    </div>
  )
}

LongFormSection.defaultProps = {
  sectionNum: -1,
  title: '',
  isCollapsible: false,
}

LongFormSection.propTypes = {
  sectionNum: PropTypes.number,
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  isCollapsible: PropTypes.bool,
}

export default LongFormSection
