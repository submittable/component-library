import { useArgs } from '@storybook/client-api'
import RadioGroup from '../src/components/_forms/RadioGroup/RadioGroup'
import RadioOption from '../src/components/_forms/RadioOption/RadioOption'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/Radio',
  component: RadioGroup,
  argTypes: {
    id: '',
    value: { options: [true, false], control: { type: 'radio' } },
    onChange: () => {},
    children: '',
  },
}

// eslint-disable-next-line react/prop-types
export const RadioComponent = ({ onChange, ...args }) => {
  const [{ value }, updateArgs] = useArgs()
  const handleChange = () => updateArgs({ value: !value })
  return (
    <RadioGroup {...args} onChange={handleChange}>
      <RadioOption value label="Yes" />

      <RadioOption value={false} label="No" />
    </RadioGroup>
  )
}

RadioComponent.args = {
  id: '',
  name: '',
  value: true,
  label: 'Switch Label',
  onChange: () => {},
}
