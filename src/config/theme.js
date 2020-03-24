import { createMuiTheme, withStyles } from "@material-ui/core";

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

/**
 * Custon
 */
export const GlobalCss = withStyles({
  "@global": {
    "p": {
      color: "#514D4D"
    },
    "h1": {
      fontFamily: "DM Serif Display",
      color: "#252021",
      fontSize: 56,      
    },
    ".subtitle": {
      color: "#252021"
    }
  }
})(() => null);

// Setting up the font-faces for the sites
const theme = createMuiTheme({
  /**
   * Color Themeing
   */
  palette: {
    primary: {
      main: '#5376BC',
      contrastText: '#FFF'
    },
    secondary: {
      main: '#252021'
    }
  },

  /**
   * Font Themeing
   */
  typography: {
    // Default font for the website
    fontFamily: 'DM Sans',
    fontSize: 16,
    button: {
      fontSize: 14,
      fontWeight: 'bold',
      fontStyle: 'normal',
      textTransform: 'inherit',
    },
  },

  overrides: {
    MuiCssBaseline: {
        "@global": {
            "@font-face": [dmSans, dmSerifDisplay]
        }
    },
    MuiButton: {
      root: {
        height: 56,
        paddingLeft: 45,
        paddingRight: 45,
        paddingTop: 16,
        paddingBottom: 16,

        minWidth:140,
        
        borderRadius: 0,
        boxShadow: 'none'
      }
    },
    MuiFilledInput: {
      underline: {
        "&&&:before": {
          borderBottom: "none"
        },
        "&&:after": {
          borderBottom: "none"
        }
      }
    },
    MuiInput: {
      underline: {
        "&&&:before": {
          borderBottom: "none"
        },
        "&&:after": {
          borderBottom: "none"
        },
        borderBottom: 1
      },
      root: {
        height: 56,
      }
    },
    MuiInputBase: {
      input: {
        height: 56,
        minWidth: 268,
        background: '#FFF',
        border: '1px solid #C8C7C7',
        boxSizing: 'border-box'
      }
    }
  }
})

export default theme