import '@testing-library/jest-dom'
import { fireEvent, render } from '@testing-library/react'
import Button from '../../components/Button/Button'

const defaultProps = {
  type: 'button',
  color: 'default',
  buttonType: 'contained',
  buttonText: 'My Button',
  onClick: () => null,
  isDisabled: false,
  isLoading: false,
  size: 'small',
}

describe('Button', () => {
  describe('Given the Button has rendered', () => {
    test('it should show contents', () => {
      const { queryByText } = render(<Button {...defaultProps} />)
      const button = queryByText('My Button')
      expect(button).toBeInTheDocument()
    })
  })

  describe('Given the Button has rendered, when the user clicks on it', () => {
    test('it should dispatch the onCLick event', () => {
      const handleOnClick = jest.fn()
      const props = { ...defaultProps, onClick: handleOnClick }
      const { queryByText } = render(<Button {...props} />)
      const button = queryByText('My Button')
      fireEvent.click(button)
      expect(handleOnClick.mock.calls.length).toEqual(1)
    })
  })

  describe('Given the Button has rendered, when the button is disabled', () => {
    test('it should have the disabled attribute', () => {
      const props = { ...defaultProps, isDisabled: true }
      const { queryByText } = render(<Button {...props} />)
      const button = queryByText('My Button')
      expect(button).toHaveAttribute('disabled')
    })
  })

  describe('Given the Button has rendered, when the button is loading', () => {
    test('it should have the disabled attribute', () => {
      const props = { ...defaultProps, isLoading: true }
      const { queryByText, getByRole } = render(<Button {...props} />)
      const button = queryByText('My Button')
      const loading = getByRole('progressbar')

      expect(loading).toBeInTheDocument()
      expect(button).not.toBeInTheDocument()
    })
  })
})
