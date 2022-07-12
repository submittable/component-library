import Banner, { bannerTypes } from '../src/components/Banner/Banner'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/Banner',
  component: Banner,
  argTypes: {
    text: '',
    type: {
      options: [
        bannerTypes.primary,
        bannerTypes.secondary,
        bannerTypes.warning,
        bannerTypes.default,
        bannerTypes.cancelled,
      ],
    },
    children: '',
    className: '',
  },
}

// eslint-disable-next-line react/prop-types
export const BannerComponent = (args) => <Banner {...args} />

BannerComponent.args = {
  text: 'Bolded banner text',
  type: bannerTypes.primary,
  children: 'Smaller banner text below bolded',
  className: '',
}
