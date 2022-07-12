import Tooltip, { placementOptions } from '../src/components/Tooltip/Tooltip'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/Tooltip',
  component: Tooltip,
  argTypes: {
    children: '',
    placement: {
      options: [placementOptions.default, placementOptions.top],
    },
    title: '',
  },
}

// eslint-disable-next-line react/prop-types
export const TooltipComponent = (args) => <Tooltip {...args} />

TooltipComponent.args = {
  children: <p>Hover here to view tooltip text</p>,
  placement: placementOptions.default,
  title: 'This is the inner tooltip text',
}
