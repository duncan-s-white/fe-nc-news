import { useState, useEffect } from "react";
import * as api from "../api";
import { Grid, Typography } from "@mui/material";
import ArticleCard from "./ArticleCard";
import TopicsButtons from "./TopicsButtons";
import Loading from "./Loading";
import Error from "./Error";
import SortControls from "./SortControls";
import { useParams } from "react-router-dom";
import { topicTitle } from "../utils/format";

const ArticleList = () => {
  const { topic = "all" } = useParams();
  const [articles, setArticles] = useState([]);
  const [title, setTitle] = useState("Latest Articles");
  const [sortBy, setSortBy] = useState("created_at");
  const [order, setOrder] = useState("desc");
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    Promise.all([api.fetchArticles(topic, sortBy, order), api.fetchTopics()])
      .then(([articlesRes, topicRes]) => {
        setArticles(articlesRes.data.articles);
        setTopics(topicRes.data.topics);
        setTitle(topicTitle(topic, sortBy, order));
        setIsLoading(false);
      })
      .catch(({ response }) => {
        setError(() => ({
          title: `Error: ${response.status}`,
          msg: response.data.msg,
        }));
      });
  }, [topic, sortBy, order]);

  if (error) return <Error {...error} />;

  if (isLoading) return <Loading />;

  return (
    <>
      <Grid container justifyContent="space-between" s={2} pb={1}>
        <Grid item>
          <Typography variant="h2">{title}</Typography>
        </Grid>
        <Grid item>
          <SortControls
            order={order}
            sortBy={sortBy}
            setSortBy={setSortBy}
            setOrder={setOrder}
            topic={topic}
          />
        </Grid>
      </Grid>

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
