import { useArgs } from '@storybook/client-api'
import CurrencyInput, { currencyTypes } from '../src/components/_forms/CurrencyInput/CurrencyInput'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/CurrencyInput',
  component: CurrencyInput,
  argTypes: {
    name: 'currencyInput',
    currency: currencyTypes.USD,
    value: '',
    onChange: () => {},
    onBlur: () => {},
  },
}

// eslint-disable-next-line react/prop-types
export const CurrencyInputComponent = ({ onChange, ...args }) => {
  const [{ value }, updateArgs] = useArgs()
  const handleChange = (e) => updateArgs({ value: e?.target?.value })
  return <CurrencyInput {...args} onChange={handleChange} value={value} />
}

CurrencyInputComponent.args = {
  name: 'currencyInput',
  currency: currencyTypes.USD,
  value: '',
  onChange: () => {},
  onBlur: () => {},
}
