import { Pagination } from '@mui/material'
import PropTypes from 'prop-types'

const PaginationBar = ({ currentPage, numPages, onChange, shouldHideIfOnePage }) => {
  return shouldHideIfOnePage && numPages <= 1 ? null : (
    <Pagination page={currentPage} count={numPages} onChange={onChange} />
  )
}

PaginationBar.defaultProps = {
  shouldHideIfOnePage: true,
}

PaginationBar.propTypes = {
  currentPage: PropTypes.number.isRequired,
  numPages: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  shouldHideIfOnePage: PropTypes.bool,
}

export default PaginationBar
