import { useArgs } from '@storybook/client-api'
import Button, { buttonTypes } from '../src/components/Button/Button'
import Dialog from '../src/components/Dialog/Dialog'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/Dialog',
  component: Dialog,
  argTypes: {
    isOpen: [true, false],
    onClose: () => null,
    title: 'Dialog Title',
    className: '',
    children: 'Some Content',
    isLoading: [true, false],
    confirmButtonText: 'Confirm',
    closeButtonText: 'Close',
    onConfirm: () => null,
    hasCloseButton: [true, false],
    hasConfirmButton: [true, false],
    shouldHideAllButtons: [true, false],
    isFullScreen: [true, false],
  },
}

// eslint-disable-next-line react/prop-types
export const DialogComponent = ({ children, onClose, ...args }) => {
  const [{ isOpen }, updateArgs] = useArgs()
  const handleClose = () => updateArgs({ isOpen: !isOpen })
  const handleOpen = () => updateArgs({ isOpen: true })
  return (
    <>
      {!isOpen && (
        <Button buttonText="Open Modal" buttonType={buttonTypes.outlined} onClick={handleOpen} />
      )}
      <Dialog {...args} onClose={handleClose}>
        {children}
      </Dialog>
    </>
  )
}

DialogComponent.args = {
  isOpen: true,
  onClose: () => null,
  title: 'Dialog Title',
  className: '',
  children: <p>Some Content</p>,
  isLoading: false,
  confirmButtonText: 'Confirm',
  closeButtonText: 'Close',
  onConfirm: () => null,
  hasCloseButton: true,
  hasConfirmButton: true,
  shouldHideAllButtons: false,
  isFullScreen: false,
}
