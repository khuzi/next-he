import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";
import { red } from "@material-ui/core/colors";

// Create a theme instance.
let theme = createMuiTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fff",
    },
  },
  typography: {
    fontFamily: '"Staatliches", cursive',
    subtitle1: {
      fontFamily: '"Lato", sans-serif',
    },
    subtitle2: {
      fontFamily: '"Lato", sans-serif',
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
