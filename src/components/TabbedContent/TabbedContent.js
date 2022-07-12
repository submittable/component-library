import { Tab, Tabs } from '@mui/material'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { convertToEventContextFormat } from '../../utils/helpers'
import styles from './tabbedContent.module.less'

const TabbedContent = ({
  tabs,
  ariaLabel,
  isSmallTabs,
  isVertical,
  className,
  selectedTab,
  eventLabel,
}) => {
  const [currentTab, setCurrentTab] = useState(selectedTab)

  useEffect(() => {
    if (selectedTab) {
      setCurrentTab(selectedTab)
    }
  }, [selectedTab])

  return (
    <div className={isVertical ? styles.verticalTabs : ''}>
      <Tabs
        value={currentTab}
        onChange={(event, newValue) => {
          setCurrentTab(newValue)
        }}
        classes={{
          root: classNames(styles.tabsContainer, { [styles.vertical]: isVertical }, className),
          indicator: classNames(styles.indicator, { [styles.vertical]: isVertical }, className),
        }}
        aria-label={ariaLabel}
        variant="scrollable"
        orientation={isVertical ? 'vertical' : 'horizontal'}
        selectionFollowsFocus
      >
        {tabs.map(({ label, id, ariaControls, value, eventContext }) => (
          <Tab
            id={id}
            value={value}
            key={label}
            aria-controls={ariaControls}
            label={label}
            classes={{
              root: classNames(styles.tab, {
                [styles.tabHeading]: !isSmallTabs,
                [styles.vertical]: isVertical,
              }),
              selected: styles.active,
            }}
            data-event-label={eventLabel || null}
            data-event-context={convertToEventContextFormat(eventContext)}
          />
        ))}
      </Tabs>
      {tabs?.find((tab) => tab.value === currentTab)?.content}
    </div>
  )
}

TabbedContent.defaultProps = {
  isSmallTabs: false,
  isVertical: false,
  className: '',
  selectedTab: '',
  eventLabel: '',
}

TabbedContent.propTypes = {
  ariaLabel: PropTypes.string.isRequired,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      ariaControls: PropTypes.string,
      label: PropTypes.string,
      content: PropTypes.element,
    })
  ).isRequired,
  isSmallTabs: PropTypes.bool,
  isVertical: PropTypes.bool,
  className: PropTypes.string,
  selectedTab: PropTypes.string,
  eventLabel: PropTypes.string,
}

export default TabbedContent
