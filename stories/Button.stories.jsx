import Button, { buttonColors, buttonSizes, buttonTypes } from '../src/components/Button/Button'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    type: 'Button',
    color: {
      options: [buttonColors.default, buttonColors.primary, buttonColors.secondary],
    },
    buttonText: 'Button',
    onClick: () => null,
    isDisabled: [true, false],
    isLoading: [true, false],
    fullWidth: [true, false],
    eventLabel: '',
    startIcon: '',
    className: '',
    children: '',
    size: {
      options: [buttonSizes.default, buttonSizes.medium, buttonSizes.small],
    },
    buttonType: {
      options: [buttonTypes.filled, buttonTypes.outlined, buttonTypes.text, buttonTypes.link],
    },
  },
}

export const ButtonComponent = (args) => <Button {...args} />

ButtonComponent.args = {
  type: 'Button',
  color: buttonColors.primary,
  buttonText: 'Button',
  isDisabled: false,
  isLoading: false,
  fullWidth: false,
  size: buttonSizes.default,
  buttonType: buttonTypes.filled,
}
