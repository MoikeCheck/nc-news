import axios from "axios";

const baseURL = "https://nc-news-example-seminar-2-3.herokuapp.com/api";

export const getArticles = () => {
  return axios.get(`${baseURL}/articles`).then(({ data }) => {
    console.log(data.articles.topics);
    return data.articles;
  });
};
