import PropTypes from 'prop-types'

const MailToLink = ({ emailAddress, text }) => {
  return <a href={`mailto:${emailAddress}`}>{text || emailAddress}</a>
}

MailToLink.defaultProps = {
  text: null,
}

MailToLink.propTypes = {
  emailAddress: PropTypes.string.isRequired,
  text: PropTypes.string,
}

export default MailToLink
