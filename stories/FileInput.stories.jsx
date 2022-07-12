import FileInput from '../src/components/_forms/FileInput/FileInput'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/FileInput',
  component: FileInput,
  argTypes: {
    id: '',
    accept: '',
    onChange: () => {},
    onBlur: () => {},
  },
}

// eslint-disable-next-line react/prop-types
export const FileInputComponent = (args) => <FileInput {...args} />

FileInputComponent.args = {
  id: '',
  accept: '',
  onChange: () => {},
  onBlur: () => {},
}
