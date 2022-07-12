import { Close } from '@mui/icons-material'
import { Dialog as MaterialUIDialog, DialogContent, DialogTitle, IconButton } from '@mui/material'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'
import styles from './fullscreenDialog.module.less'

const FullscreenDialog = ({
  isOpen,
  onClose,
  title,
  subtitle,
  className,
  children,
  isLoading,
  hideCloseButton,
}) => {
  return (
    <MaterialUIDialog
      fullScreen
      onClose={onClose}
      open={isOpen}
      classes={{ paper: classNames(styles.dialog, className) }}
    >
      <DialogTitle
        className={classNames(styles.dialogTitle, { [!hideCloseButton]: styles.hasCloseButton })}
      >
        <div className={styles.titleContainer}>
          {title}
          <p>{subtitle}</p>
        </div>
        {!hideCloseButton && (
          <IconButton aria-label="close" onClick={onClose} size="large">
            <Close />
          </IconButton>
        )}
      </DialogTitle>
      <DialogContent classes={{ root: styles.dialogBody }}>
        {isLoading ? (
          <div className={styles.loadingContainer}>
            <LoadingSpinner />
          </div>
        ) : (
          children
        )}
      </DialogContent>
    </MaterialUIDialog>
  )
}

FullscreenDialog.defaultProps = {
  className: null,
  isLoading: false,
  title: null,
  subtitle: null,
  hideCloseButton: true,
}

FullscreenDialog.propTypes = {
  className: PropTypes.string,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  isLoading: PropTypes.bool,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  hideCloseButton: PropTypes.bool,
}

export default FullscreenDialog
