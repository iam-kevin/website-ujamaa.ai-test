import { createMuiTheme } from "@material-ui/core";

/**
 * Font for standard text in the site
 */
const dmSans = {
    fontFamily: 'DM Sans',
    fontStyle: 'normal',
    fontWeight: 'normal',
    lineHeight: 24,
    color: '#514D4D'
}

/**
 * Fonts in the title texts in the site
 */
const dmSerifDisplay = {
    fontFamily: 'DM Serif Display',
    fontStyle: 'normal',
    fontWeight: 'normal',
    color: '#252021'
}

// Setting up the font-faces for the sites
const theme = createMuiTheme({
  typography: {
    // Default font for the website
    fontFamily: 'DM Sans, DM Serif Display',
    fontSize: 16
  },
  overrides: {
    MuiCssBaseline: {
        "@global": {
            "@font-face": [dmSans, dmSerifDisplay]
        }
    }
  }
})

export default theme