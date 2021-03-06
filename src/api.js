import axios from "axios";

const ncNewsApi = axios.create({
  baseURL: " https://dw-nc-news.herokuapp.com/api",
});

export const fetchArticle = (articleId) => {
  return ncNewsApi.get(`/articles/${articleId}`);
};

export const fetchComments = (articleId) => {
  return ncNewsApi.get(`/articles/${articleId}/comments`);
};

export const fetchArticles = (
  topic = null,
  sort_by = "created_at",
  order = "desc",
  p = 1,
  limit = 10
) => {
  const params = {
    p,
    limit,
    sort_by,
    order,
    topic,
  };
  if (params.topic === "all") delete params.topic;
  return ncNewsApi.get("/articles", { params });
};

export const fetchTopics = () => {
  return ncNewsApi.get("/topics");
};

export const fetchUsers = () => {
  return ncNewsApi.get("/users");
};

export const fetchUser = (username) => {
  return ncNewsApi.get(`/users/${username}`);
};

export const patchArticle = (articleId, updatedArticle) => {
  return ncNewsApi.patch(`/articles/${articleId}`, updatedArticle);
};

export const patchComment = (commentId, updatedComment) => {
  return ncNewsApi.patch(`/comments/${commentId}`, updatedComment);
};

export const postComment = (articleId, newComment) => {
  return ncNewsApi.post(`/articles/${articleId}/comments`, newComment);
};

export const deleteComment = (commentId) => {
  return ncNewsApi.delete(`/comments/${commentId}`);
};
