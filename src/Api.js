import axios from "axios";

const myApi = axios.create({
  baseURL: "https://nc-news-example-seminar-2-3.herokuapp.com/api",
});

export const getArticles = (slug) => {
  return myApi
    .get("/articles", { params: { topic: slug } })
    .then(({ data }) => {
      return data.articles;
    });
};

export const getTopics = () => {
  return myApi.get(`/topics`).then(({ data }) => {
    return data.topics;
  });
};

export const getArticleById = (article_id) => {
  return myApi.get(`/articles/${article_id}`).then(({ data }) => {
    return data.article;
  });
};

export const patchVotes = (article_id) => {
  return myApi
    .patch(`/articles/${article_id}`, { inc_votes: 1 })
    .then(({ data }) => {
      return data.article;
    });
};
