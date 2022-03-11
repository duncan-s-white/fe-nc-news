import { useParams } from "react-router-dom";
import { slugTitle } from "../utils/format";
import ArticleList from "./ArticleList";

const TopicPage = () => {
  const { slug } = useParams();

  return (
    <>
      <ArticleList topic={slug} title={slugTitle(slug)} />
    </>
  );
};

export default TopicPage;
