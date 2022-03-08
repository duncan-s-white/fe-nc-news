import "./App.css";
import "@fontsource/roboto";
import { CssBaseline } from "@mui/material";
import theme from "./theme";
import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import { ThemeProvider } from "@emotion/react";
import HomePage from "./components/HomePage";
import TopicPage from "./components/TopicPage";

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
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/topic/:slug" element={<TopicPage />} />
        </Routes>
      </Box>
    </ThemeProvider>
  );
}

export default App;
