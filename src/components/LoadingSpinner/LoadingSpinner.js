import CircularProgress from '@mui/material/CircularProgress'
import PropTypes from 'prop-types'

const LoadingSpinner = ({ size }) => {
  return <CircularProgress size={size} />
}

LoadingSpinner.defaultProps = {
  size: 50,
}

LoadingSpinner.propTypes = {
  size: PropTypes.number,
}

export default LoadingSpinner
