import "./App.css";
import "@fontsource/roboto";
import { CssBaseline } from "@mui/material";
import theme from "./theme";
import { Box } from "@mui/material";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import { ThemeProvider } from "@emotion/react";
import HomePage from "./components/HomePage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ResponsiveAppBar />
      <Box
        component="main"
        sx={{
          p: 2,
          maxWidth: [480, 720, 1080, 1440],
          margin: "0 auto",
        }}
      >
        <HomePage />
      </Box>
    </ThemeProvider>
  );
}

export default App;
