import React, { useState, useEffect } from "react";
import * as api from "../api";
import CircularProgress from "@mui/material/CircularProgress";
import { Box, Grid } from "@mui/material";
import ArticleCard from "./ArticleCard";

const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    Promise.all([api.fetchArticles(), api.fetchTopics()]).then(
      ([articlesRes, topicRes]) => {
        setArticles(articlesRes.data.articles);
        setTopics(topicRes.data.topics);
        setIsLoading(false);
      }
    );
  }, []);

  if (isLoading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <CircularProgress color="neutral" disableShrink />
      </Box>
    );
  }

  return (
    <Grid container spacing={2}>
      {articles.map((article) => {
        return (
          <Grid item xs={12} sm={6} md={4} lg={3} key={article.article_id}>
            <ArticleCard {...article} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default ArticleList;
