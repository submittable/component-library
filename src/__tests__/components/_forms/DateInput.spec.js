import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import DateInput from '../../../components/_forms/DateInput/DateInput'

const defaultProps = {
  id: 'date-input',
  name: 'date-input',
  value: '2022-07-20',
  onChange: () => {},
  onBlur: () => {},
  isError: false,
  isDisabled: false,
  isPastDisabled: false,
  isFutureDisabled: false,
  fullWidth: false,
  inputRef: () => {},
}

describe('DateInput', () => {
  describe('Given the DateInput has rendered', () => {
    test('it should show contents', () => {
      const { getByDisplayValue } = render(<DateInput {...defaultProps} />)
      const dateInput = getByDisplayValue('07/20/2022')
      expect(dateInput).toBeInTheDocument()
    })
  })

  // TODO: Add more tests
})
