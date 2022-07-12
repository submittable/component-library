import { createTheme } from '@mui/material/styles'

const fonts = ['proxima-nova', 'sans-serif'].join(', ')

const customMuiTheme = createTheme({
  typography: {
    fontFamily: fonts,
    htmlFontSize: 10,
  },
  palette: {
    primary: { main: '#0DA2AF' },
    secondary: { main: '#14B6C0' },
    success: { main: '#24833A' },
    warning: { main: '#F0AD4E' },
    error: { main: '#D60D10' },
  },
  components: {
    MuiInputBase: {
      defaultProps: {
        size: 'small',
      },
    },
    MuiButtonBase: {
      defaultProps: {
        size: 'small',
      },
    },
  },
})

export default customMuiTheme
