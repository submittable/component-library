import { useArgs } from '@storybook/client-api'
import DateInput from '../src/components/_forms/DateInput/DateInput'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/DateInput',
  component: DateInput,
  argTypes: {
    id: '',
    name: '',
    value: '',
    onChange: () => {},
    onBlur: () => {},
    isError: [true, false],
    isDisabled: [true, false],
    isPastDisabled: [true, false],
    isFutureDisabled: [true, false],
    fullWidth: [true, false],
    inputRef: () => {},
  },
}

// eslint-disable-next-line react/prop-types
export const DateInputComponent = ({ onChange, ...args }) => {
  const [{ value }, updateArgs] = useArgs()
  const handleChange = (val) => updateArgs({ value: val })
  return <DateInput {...args} onChange={handleChange} value={value} />
}

DateInputComponent.args = {
  id: 'date-input',
  name: 'date-input',
  value: '',
  onChange: () => {},
  onBlur: () => {},
  isError: false,
  isDisabled: false,
  isPastDisabled: false,
  isFutureDisabled: false,
  fullWidth: false,
  inputRef: () => {},
}
