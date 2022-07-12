import Divider from '../src/components/Divider/Divider'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/Divider',
  component: Divider,
  argTypes: {},
}

// eslint-disable-next-line react/prop-types
export const DividerComponent = () => {
  return (
    <>
      <h1>Text above divider</h1>
      <Divider />
      <h2>Text below divider</h2>
    </>
  )
}
