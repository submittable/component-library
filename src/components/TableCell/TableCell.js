import { TableCell as MuiTableCell } from '@mui/material'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import styles from './tableCell.module.less'

// TODO: destructure props below, only pass props we need & PropType check for
const TableCell = (props) => {
  const { children, className } = props
  return (
    <MuiTableCell {...props} classes={{ root: classNames(styles.cell, className) }}>
      {children}
    </MuiTableCell>
  )
}

TableCell.defaultProps = {
  children: undefined,
  className: '',
}

TableCell.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

export default TableCell
