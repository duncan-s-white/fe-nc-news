import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    primary: {
      main: "#fb8c00",
      contrastText: "#fff",
    },
    secondary: {
      main: "#3e3b68",
      light: "#ebf0ff",
      contrastText: "#283044",
    },
    neutral: {
      main: "#212121",
      light: "#757575",
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
    color: theme.palette.neutral.main,
    fontSize: 14,
    h1: {
      a: {
        color: "#fff",
        textDecoration: "none",
      },
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
      margin: "6px 0 18px",
      padding: "4px",
      color: theme.palette.primary.main,
    },
    h4: {
      fontSize: 15,
      fontWeight: 400,
      padding: 10,
      height: 56,
      color: theme.palette.secondary.contrastText,
      backgroundColor: theme.palette.secondary.light,
    },
    address: {
      color: theme.palette.neutral.light,
      a: {
        color: theme.palette.neutral.light,
        fontWeight: "bold",
        textDecoration: "none",
      },
    },
  },
});

theme = responsiveFontSizes(theme);
export default theme;
