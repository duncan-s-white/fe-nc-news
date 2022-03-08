import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { fontWeight } from "@mui/system";

let theme = createTheme({
  typography: {
    color: "#212121",
  },
  palette: {
    primary: {
      main: "#fb8c00",
      contrastText: "#fff",
    },
    secondary: {
      main: "#3e3b68",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

theme = createTheme(theme, {
  typography: {
    fontSize: 14,
    h1: {
      svg: { marginRight: 10 },
      fontSize: 26,
      lineHeight: 1.5,
      [theme.breakpoints.up("xs")]: {
        fontSize: "1.5em",
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: "1.5em",
      },
    },
    h2: {
      fontSize: 28,
      margin: "12px 0 24px",
      padding: "4px 12px",
      color: theme.palette.primary.main,
    },
    h4: {
      fontSize: 16,
      padding: 8,
      height: 48,
    },
  },
});

theme = responsiveFontSizes(theme);
export default theme;
