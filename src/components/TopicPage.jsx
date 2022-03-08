import { Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { slugTitle } from "../utils/format";
import ArticleList from "./ArticleList";

const TopicPage = () => {
  const { slug } = useParams();
  return (
    <>
      <Typography variant="h2">{slugTitle(slug)}</Typography>
      <ArticleList topic={slug} />
    </>
  );
};

export default TopicPage;
