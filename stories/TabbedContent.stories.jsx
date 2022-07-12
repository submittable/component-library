import TabbedContent from '../src/components/TabbedContent/TabbedContent'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/TabbedContent',
  component: TabbedContent,
  argTypes: {
    tabs: [],
    ariaLabel: '',
    isSmallTabs: [true, false],
    isVertical: [true, false],
  },
}

export const TabbedContentComponent = (args) => <TabbedContent {...args} />

TabbedContentComponent.args = {
  isSmallTabs: false,
  isVertical: false,
  ariaLabel: '',
  selectedTab: 'policies',
  tabs: [
    { label: 'Policies', value: 'policies' },
    { label: 'ERGs', value: 'ergs' },
    { label: 'Volunteering Categories', value: 'categories' },
    { label: 'Causes', value: 'causes' },
  ],
}
