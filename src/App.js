import React from 'react';
import { ThemeProvider, CssBaseline } from '@material-ui/core'
import theme from './config/theme'

function App({ children }) {
  return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {/* {children} */}
            <div>
                <h1>Hi there</h1>
                <p>How are you doing?</p>
            </div>
        </ThemeProvider>
  )
}

export default App;
