import axios from "axios";

const myApi = axios.create({
  baseURL: "https://nc-news-example-seminar-2-3.herokuapp.com/api",
});

export const getArticles = (slug, sort_by, order) => {
  return myApi
    .get("/articles", {
      params: { topic: slug, sort_by: sort_by, order: order },
    })
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

export const getCommentsByArticleId = (article_id) => {
  return myApi.get(`/articles/${article_id}/comments`).then(({ data }) => {
    return data.comments;
  });
};

export const getUsers = () => {
  return myApi.get("/users").then(({ data }) => {
    return data.users;
  });
};

export const postComment = (article_id, comment) => {
  return myApi
    .post(`/articles/${article_id}/comments`, comment)
    .then(({ data: { comment } }) => {
      return comment;
    });
};

export const removeCommentById = (comment_id) => {
  return myApi.delete(`/comments/${comment_id}`).then((data) => {
    return data;
  });
};
