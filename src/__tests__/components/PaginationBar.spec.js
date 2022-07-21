import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import PaginationBar from '../../components/PaginationBar/PaginationBar'

const defaultProps = {
  currentPage: 2,
  numPages: 3,
  onChange: () => {},
  shouldHideIfOnePage: true,
}

describe('PaginationBar', () => {
  describe('Given the PaginationBar has rendered', () => {
    test('it should show contents', () => {
      const { getByText } = render(<PaginationBar {...defaultProps} />)
      const numPages = getByText(defaultProps.numPages)
      expect(numPages).toBeInTheDocument()
    })
  })

  describe('Given the PaginationBar has rendered,', () => {
    test('the currentPage should have the attribute aria-current=true indicating it is the active page', async () => {
      const { getByText } = render(<PaginationBar {...defaultProps} />)
      const currentPage = getByText(defaultProps.currentPage)
      expect(currentPage).toHaveAttribute('aria-current', 'true')
    })
  })
})
