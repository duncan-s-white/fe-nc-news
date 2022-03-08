import axios from "axios";

const ncNewsApi = axios.create({
  baseURL: " https://dw-nc-news.herokuapp.com/api",
});

export const fetchArticles = (topic) => {
  const fetchArticleParams = {
    params: {
      limit: 0,
      sort_by: "created_at",
      order: "desc",
      topic,
    },
  };
  return ncNewsApi.get("/articles", fetchArticleParams);
};

export const fetchTopics = () => {
  return ncNewsApi.get("/topics");
};
