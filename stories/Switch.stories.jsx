import { useArgs } from '@storybook/client-api'
import Switch from '../src/components/_forms/Switch/Switch'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/Switch',
  component: Switch,
  argTypes: {
    id: '',
    name: '',
    value: [true, false],
    label: 'Switch Label',
    onChange: () => {},
  },
}

// eslint-disable-next-line react/prop-types
export const SwitchComponent = ({ onChange, ...args }) => {
  const [{ value }, updateArgs] = useArgs()
  const handleChange = () => updateArgs({ value: !value })
  return <Switch {...args} onChange={handleChange} />
}

SwitchComponent.args = {
  id: '',
  name: '',
  value: true,
  label: 'Switch Label',
  onChange: () => {},
}
