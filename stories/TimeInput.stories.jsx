import { useArgs } from '@storybook/client-api'
import TimeInput from '../src/components/_forms/TimeInput/TimeInput'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/TimeInput',
  component: TimeInput,
  argTypes: {
    id: '',
    name: '',
    value: '',
    onChange: () => {},
    onBlur: () => {},
    isError: [true, false],
    isDisabled: [true, false],
    fullWidth: [true, false],
  },
}

// eslint-disable-next-line react/prop-types
export const TimeInputComponent = ({ onChange, ...args }) => {
  const [{ value }, updateArgs] = useArgs()
  const handleChange = (val) => updateArgs({ value: val })
  return <TimeInput {...args} onChange={handleChange} value={value} />
}

TimeInputComponent.args = {
  id: 'time-input',
  name: 'time-input',
  value: '',
  onChange: () => {},
  onBlur: () => {},
  isError: false,
  isDisabled: false,
  fullWidth: false,
}
