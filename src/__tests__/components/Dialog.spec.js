import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Dialog from '../../components/Dialog/Dialog'

const text = 'super cool dialog'

describe('Dialog', () => {
  describe('Given the Dialog is open', () => {
    test('should show contents', () => {
      render(
        <Dialog onClose={() => {}} isOpen>
          <>{text}</>
        </Dialog>
      )
      const dialogContent = screen.queryByText(text)
      expect(dialogContent).toBeInTheDocument()
    })

    test('should show loading indicator', () => {
      render(
        <Dialog onClose={() => {}} isOpen isLoading>
          <>{text}</>
        </Dialog>
      )

      const dialogContent = screen.queryByText(text)
      const loadingIndicator = screen.getByRole('progressbar')

      expect(loadingIndicator).toBeInTheDocument()
      expect(dialogContent).not.toBeInTheDocument()
    })

    describe('when the close button is clicked', () => {
      test('should fire onClose callback', () => {
        const onCloseMock = jest.fn()

        render(
          <Dialog onClose={onCloseMock} isOpen>
            <>{text}</>
          </Dialog>
        )

        fireEvent.click(screen.getByRole('button', { name: 'close' }))
        expect(onCloseMock).toHaveBeenCalledTimes(1)
      })
    })
  })

  describe('Given the Dialog is closed', () => {
    test('should not show contents', () => {
      render(
        <Dialog onClose={() => {}} isOpen={false}>
          <>{text}</>
        </Dialog>
      )
      const dialogContent = screen.queryByText(text)
      expect(dialogContent).not.toBeInTheDocument()
    })
  })
})
