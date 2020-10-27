import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";
import { red } from "@material-ui/core/colors";

// Create a theme instance.
let theme = createMuiTheme({
  palette: {
    primary: {
      main: "#00172d",
    },
    secondary: {
      main: "#dae1e7",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fff",
    },
  },
  typography: {
    fontFamily: '"Playfair Display", serif',
    subtitle1: {
      fontFamily: "'Roboto', sans-serif",
    },
    subtitle2: {
      fontFamily: "'Roboto', sans-serif",
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
