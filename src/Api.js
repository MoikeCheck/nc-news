import axios from "axios";

const myApi = axios.create({
  baseURL: "https://nc-news-example-seminar-2-3.herokuapp.com/api",
});

export const getArticles = (slug) => {
  let path = "/articles";
  if (slug) path += `?topic=${slug}`;
  return myApi.get(path).then(({ data }) => {
    return data.articles;
  });
};

export const getTopics = () => {
  return myApi.get(`/topics`).then(({ data }) => {
    return data.topics;
  });
};
