import Pill, { pillColors, pillSizes, pillTypes } from '../src/components/Pill/Pill'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/Pill',
  component: Pill,
  argTypes: {
    text: 'Pill Label',
    size: {
      options: [pillSizes.small, pillSizes.medium],
    },
    type: {
      options: [pillTypes.filled, pillTypes.outlined],
    },
    color: {
      options: [pillColors.default, pillColors.primary, pillColors.secondary, pillColors.warning],
    },
    className: '',
  },
}

// eslint-disable-next-line react/prop-types
export const PillComponent = (args) => <Pill {...args} />

PillComponent.args = {
  text: 'Pill Label',
  size: pillSizes.medium,
  type: pillTypes.filled,
  color: pillColors.default,
  className: '',
}
