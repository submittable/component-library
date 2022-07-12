import PropTypes from 'prop-types'
import { convertToEventContextFormat } from '../../utils/helpers'

const ExternalLink = ({
  href,
  shouldOpenNewTab,
  className,
  children,
  eventLabel,
  eventContext,
}) => {
  const newTabProps = shouldOpenNewTab
    ? {
        target: '_blank',
        rel: 'noopener noreferrer',
      }
    : null

  return (
    <a
      href={href}
      className={className}
      data-event-label={eventLabel || null}
      data-event-context={convertToEventContextFormat(eventContext)}
      {...newTabProps}
    >
      {children ?? href}
    </a>
  )
}

ExternalLink.defaultProps = {
  shouldOpenNewTab: false,
  className: null,
  children: null,
  eventLabel: '',
  eventContext: null,
}

ExternalLink.propTypes = {
  href: PropTypes.string.isRequired,
  shouldOpenNewTab: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node,
  eventLabel: PropTypes.string,
  eventContext: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object])
  ),
}

export default ExternalLink
