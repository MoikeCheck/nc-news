import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";
import * as api from "../Api";

export default function PlanetList() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    api.getArticles().then((articles) => {
      setArticles(articles);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <p>loading..</p>;
  return (
    <section className="section__article">
      {articles.map(({ title, body }) => {
        return <ArticleCard ArticleName={title} Article={body}/>;
      })}
    </section>
  );
}
