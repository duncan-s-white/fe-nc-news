import { useState, useEffect } from "react";
import * as api from "../api";
import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import ArticleCard from "./ArticleCard";
import TopicsButtons from "./TopicsButtons";
import Loading from "./Loading";
import Error from "./Error";

const ArticleList = ({ topic, title }) => {
  const [articles, setArticles] = useState([]);
  const [sortBy, setSortBy] = useState("created_at");
  const [order, setOrder] = useState("desc");
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const sortByOptions = [
    ["Author", "author"],
    ["Title", "title"],
    ["Topic", "topic"],
    ["Date", "created_at"],
    ["Votes", "votes"],
    ["Comments", "comment_count"],
  ];
  const orderOptions = [
    ["Asc", "asc"],
    ["Desc", "desc"],
  ];

  useEffect(() => {
    setIsLoading(true);
    Promise.all([api.fetchArticles(topic, sortBy, order), api.fetchTopics()])
      .then(([articlesRes, topicRes]) => {
        setArticles(articlesRes.data.articles);
        setTopics(topicRes.data.topics);
        setIsLoading(false);
      })
      .catch(({ response }) => {
        setError(() => ({
          title: `Error: ${response.status}`,
          msg: response.data.msg,
        }));
      });
  }, [topic, sortBy, order]);

  const handleChangeSortBy = (event) => {
    setSortBy(event.target.value);
  };

  const handleChangeOrder = (event) => {
    setOrder(event.target.value);
  };

  if (error) return <Error {...error} />;

  if (isLoading) return <Loading />;

  return (
    <>
      <Grid container justifyContent="space-between" s={2} pb={1}>
        <Grid item>
          <Typography variant="h2">{title}</Typography>
        </Grid>
        <Grid item>
          <FormControl sx={{ m: 1, minWidth: 80 }} size="small">
            <InputLabel>Sort By</InputLabel>
            <Select
              value={sortBy}
              onChange={handleChangeSortBy}
              autoWidth
              label="Sort By"
            >
              {sortByOptions.map((option) => {
                return (
                  <MenuItem key={option[1]} value={option[1]}>
                    {option[0]}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 80 }} size="small">
            <InputLabel>Order</InputLabel>
            <Select
              value={order}
              onChange={handleChangeOrder}
              autoWidth
              label="Order"
            >
              {orderOptions.map((option) => {
                return (
                  <MenuItem key={option[1]} value={option[1]}>
                    {option[0]}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
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
