import { Delete } from '@mui/icons-material'
import IconButton from '../src/components/IconButton/IconButton'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/IconButton',
  component: IconButton,
  argTypes: {
    icon: <Delete />,
    onClick: () => null,
    title: 'Icon Button',
    isDisabled: [true, false],
    ariaLabel: 'Icon Button',
    className: '',
    id: '',
    ariaControls: '',
    ariaHaspopup: '',
    ariaExpanded: [false, true],
  },
}

export const IconButtonComponent = (args) => <IconButton {...args} />

IconButtonComponent.args = {
  icon: <Delete />,
  onClick: () => null,
  title: 'Icon Button',
  isDisabled: false,
  ariaLabel: 'Icon Button',
  className: '',
  id: '',
  ariaControls: '',
  ariaHaspopup: '',
  ariaExpanded: false,
}
