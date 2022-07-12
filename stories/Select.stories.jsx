import { useArgs } from '@storybook/client-api'
import Select from '../src/components/_forms/Select/Select'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/Select',
  component: Select,
  argTypes: {
    id: 'select',
    options: [],
    value: '',
    onChange: () => {},
    onBlur: () => {},
    isError: [true, false],
    fullWidth: [true, false],
    className: '',
    isDisabled: [true, false],
    eventLabel: '',
    eventContext: {},
  },
}

// eslint-disable-next-line react/prop-types
export const SelectComponent = ({ onChange, ...args }) => {
  const [{ value }, updateArgs] = useArgs()
  const handleChange = (e) => updateArgs({ value: e?.target?.value })
  return <Select {...args} onChange={handleChange} value={value} />
}

SelectComponent.args = {
  id: 'select',
  options: [
    { key: 'One', label: 'One', value: 'One' },
    { key: 'Two', label: 'Two', value: 'Two' },
    { key: 'Three', label: 'Three', value: 'Three' },
  ],
  value: 'One',
  onChange: () => {},
  onBlur: () => {},
  isError: false,
  fullWidth: false,
  className: '',
  isDisabled: false,
  eventLabel: '',
  eventContext: {},
}
