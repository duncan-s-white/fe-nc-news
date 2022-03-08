import axios from "axios";

const ncNewsApi = axios.create({
  baseURL: " https://dw-nc-news.herokuapp.com/api",
});

export const fetchArticles = () => {
  return ncNewsApi.get("/articles?limit=0&sort_by=article_id&order=asc");
};

export const fetchTopics = () => {
  return ncNewsApi.get("/topics");
};
