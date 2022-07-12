import Close from '@mui/icons-material/Close'
import MaterialUIDialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import IconButton from '@mui/material/IconButton'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import Button, { buttonTypes } from '../Button/Button'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'
import styles from './dialog.module.less'

// TODO: extract confirm and close buttons (closeButtonText, hasCloseButton, confirmButtonText, hasConfirmButton, onConfirm) and build into a new ActionDialog component
const Dialog = ({
  isOpen,
  onClose,
  title,
  className,
  children,
  isLoading,
  confirmButtonText,
  closeButtonText,
  onConfirm,
  hasCloseButton,
  hasConfirmButton,
  shouldHideAllButtons,
  isFullScreen,
  closeEventLabel,
  confirmEventLabel,
  eventContext,
}) => {
  const hasActionButtons = hasCloseButton || hasConfirmButton
  return (
    <MaterialUIDialog
      fullScreen={isFullScreen}
      open={isOpen}
      onClose={onClose}
      classes={{ paper: styles.dialog }}
    >
      <DialogTitle className={styles.dialogTitle}>
        {title}
        {(!hasCloseButton || !shouldHideAllButtons) && (
          <IconButton aria-label="close" onClick={onClose} size="large">
            <Close />
          </IconButton>
        )}
      </DialogTitle>
      <DialogContent classes={{ root: classNames(styles.dialogBody, className) }}>
        {isLoading ? (
          <div className={styles.loadingContainer}>
            <LoadingSpinner />
          </div>
        ) : (
          children
        )}
      </DialogContent>
      {hasActionButtons && (
        <DialogActions className={styles.buttonContainer} disableSpacing>
          {hasCloseButton && (
            <Button
              buttonText={closeButtonText}
              buttonType={hasConfirmButton ? buttonTypes.outlined : buttonTypes.filled}
              onClick={onClose}
              eventLabel={closeEventLabel}
              eventContext={eventContext}
            />
          )}
          {hasConfirmButton && (
            <Button
              buttonText={confirmButtonText}
              onClick={onConfirm}
              eventLabel={confirmEventLabel}
              eventContext={eventContext}
            />
          )}
        </DialogActions>
      )}
    </MaterialUIDialog>
  )
}

Dialog.defaultProps = {
  className: null,
  isLoading: false,
  title: null,
  closeButtonText: 'Close',
  confirmButtonText: 'Confirm',
  onConfirm: () => {},
  hasCloseButton: false,
  hasConfirmButton: false,
  isFullScreen: false,
  shouldHideAllButtons: false,
  closeEventLabel: '',
  confirmEventLabel: '',
  eventContext: null,
}

Dialog.propTypes = {
  className: PropTypes.string,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  isLoading: PropTypes.bool,
  title: PropTypes.string,
  onConfirm: PropTypes.func,
  confirmButtonText: PropTypes.string,
  closeButtonText: PropTypes.string,
  hasConfirmButton: PropTypes.bool,
  hasCloseButton: PropTypes.bool,
  isFullScreen: PropTypes.bool,
  shouldHideAllButtons: PropTypes.bool,
  closeEventLabel: PropTypes.string,
  confirmEventLabel: PropTypes.string,
  eventContext: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object])
  ),
}

export default Dialog
