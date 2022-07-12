import EllipsisMenu from '../src/components/EllipsisMenu/EllipsisMenu'
import MenuItem from '../src/components/MenuItem/MenuItem'
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/EllipsisMenu',
  component: EllipsisMenu,
  argTypes: {
    buttonClassName: '',
    eventLabel: '',
    eventContext: {},
    children: '',
  },
}

export const EllipsisMenuComponent = (args) => {
  return (
    <div>
      <p>The ellipsis menu component includes the PopoverMenu component as a child</p>
      <EllipsisMenu {...args}>
        <MenuItem>Item 1</MenuItem>
        <MenuItem>Item 2</MenuItem>
        <MenuItem>Item 3</MenuItem>
      </EllipsisMenu>
    </div>
  )
}

EllipsisMenuComponent.args = {
  buttonClassName: '',
  eventLabel: '',
  eventContext: {},
  children: '',
}
