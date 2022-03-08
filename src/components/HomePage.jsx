import { Typography } from "@mui/material";
import ArticleList from "./ArticleList";

const HomePage = () => {
  return (
    <>
      <Typography variant="h2"> Latest Articles </Typography>
      <ArticleList />
    </>
  );
};

export default HomePage;
