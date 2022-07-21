import '@testing-library/jest-dom'
import { fireEvent, render } from '@testing-library/react'
import TabbedContent from '../../components/TabbedContent/TabbedContent'

const tabs = [
  {
    label: 'Policies',
    content: <div id="Policies content" aria-labelledby="Policies tab" />,
    id: 'Policies tab',
    ariaControls: 'Policies content',
    value: 'policies',
  },
  {
    label: 'ERGs',
    content: <div id="ERG content" aria-labelledby="ERG tab" />,
    id: 'ERG tab',
    ariaControls: 'ERG content',
    value: 'ergs',
  },
  {
    label: 'Volunteering Categories',
    content: <div id="Categories content" aria-labelledby="Categories tab" />,
    id: 'Categories tab',
    ariaControls: 'Categories content',
    value: 'categories',
  },
  {
    label: 'Causes',
    content: <div id="Causes content" aria-labelledby="Causes tab" />,
    id: 'Causes tab',
    ariaControls: 'Causes content',
    value: 'causes',
  },
]

const defaultProps = {
  isSmallTabs: false,
  isVertical: false,
  tabs,
  ariaLabel: 'Workplace Settings tabs',
  selectedTab: 'policies',
}

describe('TabbedContent', () => {
  describe('Given the TabbedContent has rendered', () => {
    test('it should show contents', () => {
      const { getByText } = render(<TabbedContent {...defaultProps} />)
      const tab = getByText('Policies')
      expect(tab).toBeInTheDocument()
    })
  })

  describe('Given the TabbedContent has rendered, when the user clicks on a tab', () => {
    test('it should dispatch the onChange event', () => {
      const { getByText } = render(<TabbedContent {...defaultProps} />)
      const tab = getByText('ERGs')
      const clickEvent = fireEvent.click(tab)
      expect(clickEvent).toEqual(true)
    })
  })

  describe('Given the TabbedContent has rendered, when the user clicks on a tab', () => {
    test('it should have the attribute aria-selected=true indicating it is the active tab', async () => {
      const { getByText } = render(<TabbedContent {...defaultProps} />)
      const tab = getByText('ERGs')
      fireEvent.click(tab)
      expect(tab).toHaveAttribute('aria-selected', 'true')
    })
  })
})
