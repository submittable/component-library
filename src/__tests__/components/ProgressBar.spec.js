import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import ProgressBar from '../../components/ProgressBar/ProgressBar'

const defaultProps = {
  className: '',
  shouldOnlyShowCurrentValue: false,
  shouldHideAnnotations: false,
  formatValues: (value) => value,
  currentValue: 2,
  goalValue: 8,
}

describe('ProgressBar', () => {
  describe('Given the ProgressBar has rendered', () => {
    test('it should show contents', () => {
      const { getByText } = render(<ProgressBar {...defaultProps} />)
      const goalValue = getByText('8')
      expect(goalValue).toBeInTheDocument()
    })
  })

  describe('Given the ProgressBar has rendered,', () => {
    test('it should have the attribute aria-valuenow = currentValue / goalValue * 100', async () => {
      const { getByRole } = render(<ProgressBar {...defaultProps} />)
      const progressBar = getByRole('progressbar')
      const progressValue = (defaultProps.currentValue / defaultProps.goalValue) * 100
      expect(progressBar).toHaveAttribute('aria-valuenow', progressValue.toString())
    })
  })
})
