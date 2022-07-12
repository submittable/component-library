import LoadingSpinner from '../src/components/LoadingSpinner/LoadingSpinner'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/LoadingSpinner',
  component: LoadingSpinner,
  argTypes: {
    size: 50,
  },
}

// eslint-disable-next-line react/prop-types
export const LoadingSpinnerComponent = (args) => <LoadingSpinner {...args} />

LoadingSpinnerComponent.args = {
  size: 50,
}
