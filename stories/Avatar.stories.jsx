import { Divider } from '../src/components'
import Avatar, { avatarColors } from '../src/components/Avatar/Avatar'
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/Avatar',
  component: Avatar,
  argTypes: {
    firstName: '',
    lastName: '',
    color: {
      options: [avatarColors.primary, avatarColors.secondary, avatarColors.default],
    },
    className: '',
  },
}

// eslint-disable-next-line react/prop-types
export const AvatarComponent = (args) => {
  return (
    <>
      <p>Avatar with firstName and lastName props:</p>
      <Avatar {...args} firstName="Jane" lastName="Doe" />
      <br />
      <Divider />
      <br />
      <p>Avatar without firstName and lastName props</p>
      <Avatar {...args} />
    </>
  )
}

AvatarComponent.args = {
  firstName: '',
  lastName: '',
  color: avatarColors.primary,
  className: '',
}
