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
import ArticlePage from "./components/ArticlePage";
import Footer from "./components/Footer";
import UsersList from "./components/UsersList";
import UserProfile from "./components/UserProfile";
import { useState } from "react";
import { UserContext } from "./contexts/UserContext";

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);
  return (
    <UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
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
            <Route path="/users" element={<UsersList />} />
            <Route path="/user/:username" element={<UserProfile />} />
            <Route path="/topic/:slug" element={<TopicPage />} />
            <Route path="/article/:articleId" element={<ArticlePage />} />
          </Routes>
        </Box>
        <Footer />
      </ThemeProvider>
    </UserContext.Provider>
  );
}

export default App;
