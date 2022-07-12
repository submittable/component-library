import ProgressBar from '../src/components/ProgressBar/ProgressBar'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/ProgressBar',
  component: ProgressBar,
  argTypes: {
    currentValue: '',
    goalValue: '',
    formatValues: () => {},
    shouldOnlyShowCurrentValue: [true, false],
    shouldHideAnnotations: [true, false],
    className: '',
  },
}

export const ProgressBarComponent = (args) => <ProgressBar {...args} />

ProgressBarComponent.args = {
  className: '',
  shouldOnlyShowCurrentValue: false,
  shouldHideAnnotations: false,
  formatValues: (value) => value,
  currentValue: 1,
  goalValue: 8,
}
