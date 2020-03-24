import React from 'react';
import { ThemeProvider, CssBaseline } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import theme from './config/theme'

import HeaderSection from './fragments/headerSection'
/**
 * Entire App; To contain the components that make up the website
 * TODO: Theming buttons and fonts
 *  As well as dealing with the Container 'lg' issue. (you'll know when you run the app)
 */
function App({ children }) {
  return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <div style={{ padding: 0, margin: 0 }}>
                <HeaderSection />
            </div>
        </ThemeProvider>
  )
}

export default App;
