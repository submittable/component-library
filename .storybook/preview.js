import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles'
import '../src/styles/fonts.less'
import '../src/styles/globals.less'
import customMuiTheme from '../src/styles/theme'

export const decorators = [
  (Story) => (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={customMuiTheme}>
        <Story />
      </ThemeProvider>
    </StyledEngineProvider>
  ),
]
