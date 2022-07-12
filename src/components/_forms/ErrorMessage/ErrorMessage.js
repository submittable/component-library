import { Error } from '@mui/icons-material'
import PropTypes from 'prop-types'
import styles from './errorMessage.module.less'

const ErrorMessage = ({ text }) => {
  return (
    <span className={styles.error}>
      <Error />
      {text}
    </span>
  )
}

ErrorMessage.propTypes = {
  text: PropTypes.string.isRequired,
}

export default ErrorMessage
