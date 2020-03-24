import React from 'react';
import { ThemeProvider, CssBaseline } from '@material-ui/core'
import theme from './config/theme'


// import HeaderSection from './fragments/HeaderSection'
// import FooterSection from './fragments/FooterSection'
import BookWithUjamaaSection from './fragments/BookWithUjamaaSection'
/**
 * Entire App; To contain the components that make up the website
 * TODO: Theming buttons and fonts
 *  As well as dealing with the Container 'lg' issue. (you'll know when you run the app)
 */
function App() {
  return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <div className='app'>
              <BookWithUjamaaSection />
            </div>
        </ThemeProvider>
  )
}

export default App;
