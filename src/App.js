import React from 'react';
import { ThemeProvider, CssBaseline } from '@material-ui/core'
import theme, { GlobalCss } from './config/theme'


import HeaderSection from './fragments/HeaderSection'
import BookWithUjamaaSection from './fragments/BookWithUjamaaSection'
import JoinUsSection from './fragments/JoinUsSection';
import FooterSection from './fragments/FooterSection'

/**
 * Entire App; To contain the components that make up the website
 * TODO: Theming buttons and fonts
 *  As well as dealing with the Container 'lg' issue. (you'll know when you run the app)
 */
function App() {
  return (
        <ThemeProvider theme={theme}>
            <GlobalCss />
            <CssBaseline />
            <div className='app'>
              <HeaderSection />
              <BookWithUjamaaSection />
              <JoinUsSection />
              <FooterSection />
            </div>
        </ThemeProvider>
  )
}

export default App;
