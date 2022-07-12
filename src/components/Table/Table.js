import {
  Paper,
  Table as MUITable,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'
import { isNil } from 'lodash'
import PropTypes from 'prop-types'
import styles from './table.module.less'

const Table = ({ headers, RowComponents, id }) => {
  return (
    <TableContainer component={Paper} className={styles.container} elevation={0}>
      <MUITable>
        {headers?.length > 0 ? (
          <TableHead className={styles.tableHeader}>
            <TableRow>
              {headers?.map((header, idx) => (
                <TableCell key={`${id}-${header}-${idx + 1}`} className={styles.cellTitle}>
                  {header}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
        ) : null}
        <TableBody>{RowComponents}</TableBody>
      </MUITable>
      {(RowComponents?.length === 0 || isNil(RowComponents)) && (
        <TableCell className={styles.emptyRow}>No records found</TableCell>
      )}
    </TableContainer>
  )
}

Table.defaultProps = {
  headers: [],
  id: '',
}

Table.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.string),
  RowComponents: PropTypes.node.isRequired,
  id: PropTypes.string,
}

export default Table
