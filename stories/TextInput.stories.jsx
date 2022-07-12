import { useArgs } from '@storybook/client-api'
import TextInput from '../src/components/_forms/TextInput/TextInput'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/TextInput',
  component: TextInput,
  argTypes: {
    id: 'input',
    name: 'input',
    min: 0,
    isError: [true, false],
    value: '',
    onChange: () => null,
    onBlur: () => null,
    fullWidth: [true, false],
    isDisabled: [true, false],
    isMultiline: [true, false],
    rows: 0,
    placeholder: 'Text Input',
  },
}

// eslint-disable-next-line react/prop-types
export const TextInputComponent = ({ onChange, ...args }) => {
  const [{ value }, updateArgs] = useArgs()
  const handleChange = (e) => updateArgs({ value: e?.target?.value })
  return <TextInput {...args} onChange={handleChange} value={value} />
}

TextInputComponent.args = {
  id: 'input',
  name: 'input',
  min: 0,
  isError: false,
  value: '',
  onChange: () => null,
  onBlur: () => null,
  fullWidth: false,
  isDisabled: false,
  isMultiline: false,
  rows: 0,
  placeholder: 'Text Input',
}
