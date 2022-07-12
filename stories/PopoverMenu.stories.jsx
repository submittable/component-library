import { useArgs } from '@storybook/client-api'
import { useRef } from 'react'
import MenuItem from '../src/components/MenuItem/MenuItem'
import PopoverMenu from '../src/components/PopoverMenu/PopoverMenu'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/PopoverMenu',
  component: PopoverMenu,
  parameters: {
    jsx: {
      displayName: () => 'name',
    },
  },
  argTypes: {
    anchorElement: {},
    open: [true, false],
    onClose: () => {},
    onClick: () => {},
    className: '',
    children: '',
    ariaLabelledby: '',
    id: '',
  },
}

export const PopoverMenuComponent = (args) => {
  const buttonRef = useRef(null)
  const [{ open }, updateArgs] = useArgs()
  const handleClick = () => updateArgs({ open: !open })
  const handleClose = () => updateArgs({ open: false })

  return (
    <div>
      <button
        type="button"
        ref={buttonRef}
        onClick={handleClick}
        id="popover-button"
        aria-controls={open ? 'popover-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
      >
        Click to view the Popover Menu
      </button>
      {buttonRef.current && (
        <PopoverMenu {...args} anchorElement={buttonRef?.current} onClose={handleClose}>
          <MenuItem>Item 1</MenuItem>
          <MenuItem>Item 2</MenuItem>
          <MenuItem>Item 3</MenuItem>
        </PopoverMenu>
      )}
    </div>
  )
}

PopoverMenuComponent.args = {
  anchorElement: { current: 'button element' },
  open: false,
  onClose: () => {},
  onClick: () => {},
  className: '',
  children: '',
  ariaLabelledby: 'popover-button',
  id: 'popover-menu',
}
