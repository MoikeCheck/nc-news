import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";
import * as api from "../Api";

export default function ArticleList() {
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
      {articles.map(({ title, body, topic, author, votes, comment_count }) => {
        return (
          <ArticleCard
            ArticleName={title}
            Article={body}
            Topic={topic}
            Author={author}
            Votes={votes}
            CommentCount={comment_count}
          />
        );
      })}
    </section>
  );
}
