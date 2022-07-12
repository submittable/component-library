import { useArgs } from '@storybook/client-api'
import Checkbox from '../src/components/_forms/Checkbox/Checkbox'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  argTypes: {
    id: '',
    name: '',
    value: [true, false],
    labelText: 'Checkbox Label',
    onChange: () => {},
  },
}

// eslint-disable-next-line react/prop-types
export const CheckboxComponent = ({ onChange, ...args }) => {
  const [{ value }, updateArgs] = useArgs()
  const handleChange = () => updateArgs({ value: !value })
  return <Checkbox {...args} onChange={handleChange} />
}

CheckboxComponent.args = {
  id: '',
  name: '',
  value: true,
  labelText: 'Checkbox Label',
  onChange: () => {},
}
