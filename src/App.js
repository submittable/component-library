import React from 'react'
import PropTypes from 'prop-types'
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles'
import { TextInput } from './components'
import './styles/fonts.less'
import './styles/globals.less'
import customMuiTheme from './styles/theme'

const App = ({ pageProps: { session, ...pageProps } }) => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={customMuiTheme}>
        <TextInput {...pageProps} />
      </ThemeProvider>
    </StyledEngineProvider>
  )
}

App.defaultProps = {
  pageProps: {},
}

App.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.shape({ session: PropTypes.shape({}) }),
}

export default App
