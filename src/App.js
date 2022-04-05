import "./App.css";
import "@fontsource/roboto";
import { CssBaseline, Box } from "@mui/material";
import theme from "./theme";
import { Routes, Route } from "react-router-dom";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import { ThemeProvider } from "@emotion/react";
import ArticlePage from "./components/ArticlePage";
import Footer from "./components/Footer";
import UsersList from "./components/UsersList";
import UserProfile from "./components/UserProfile";
import Error from "./components/Error";
import ArticleList from "./components/ArticleList";
import UserSettings from "./components/UserSettings";

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
          <Route path="*" element={<Error />} />
          <Route path="/" element={<ArticleList />} />
          <Route path="/users" element={<UsersList />} />
          <Route path="/user/:username" element={<UserProfile />} />
          <Route path="/user/:username/settings" element={<UserSettings />} />
          <Route path="/topic/:topic" element={<ArticleList />} />
          <Route path="/article/:articleId" element={<ArticlePage />} />
        </Routes>
      </Box>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
