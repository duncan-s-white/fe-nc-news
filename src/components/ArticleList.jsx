import { useState, useEffect } from "react";
import * as api from "../api";
import { Grid } from "@mui/material";
import ArticleCard from "./ArticleCard";
import TopicsButtons from "./TopicsButtons";
import Loading from "./Loading";

const ArticleList = ({ topic }) => {
  const [articles, setArticles] = useState([]);
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    Promise.all([api.fetchArticles(topic), api.fetchTopics()]).then(
      ([articlesRes, topicRes]) => {
        setArticles(articlesRes.data.articles);
        setTopics(topicRes.data.topics);
        setIsLoading(false);
      }
    );
  }, [topic]);

  if (isLoading) return <Loading />;

  return (
    <>
      <TopicsButtons topics={topics} topic={topic} />
      <Grid container spacing={2}>
        {articles.map((article) => {
          return (
            <Grid item xs={12} sm={6} md={4} lg={3} key={article.article_id}>
              <ArticleCard {...article} />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default ArticleList;
