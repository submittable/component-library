import { TableRow as MUITableRow } from '@mui/material'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import useKeyboardFocusable from '../../utils/hooks/useKeyboardFocusable'
import TableCell from '../TableCell/TableCell'
import styles from './tableRow.module.less'

const TableRow = ({
  children,
  className,
  onClick,
  ariaLabel,
  shouldDisableHover,
  ButtonComponents,
}) => {
  const focusProps = useKeyboardFocusable(onClick)

  return (
    <MUITableRow
      hover={!shouldDisableHover}
      className={classNames(styles.row, className)}
      onClick={onClick}
      aria-label={ariaLabel}
      {...focusProps}
    >
      {children}
      {ButtonComponents && <TableCell className={styles.buttonsCell}>{ButtonComponents}</TableCell>}
    </MUITableRow>
  )
}

TableRow.defaultProps = {
  onClick: () => {},
  className: '',
  ariaLabel: '',
  shouldDisableHover: false,
  ButtonComponents: null,
}

TableRow.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  ariaLabel: PropTypes.string,
  shouldDisableHover: PropTypes.bool,
  children: PropTypes.node.isRequired,
  ButtonComponents: PropTypes.node,
}

export default TableRow
