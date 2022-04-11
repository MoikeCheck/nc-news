import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";
import * as api from "../Api";
import { useParams, useSearchParams } from "react-router-dom";
import React from "react";

export default function ArticleList() {
  const { slug } = useParams();
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [searchParams] = useSearchParams();
  const sort = searchParams.get("sort");
  const order = searchParams.get("order");

  useEffect(() => {
    setIsLoading(true);
    api.getArticles(slug, sort, order).then((articles) => {
      setArticles(articles);
      setIsLoading(false);
    });
  }, [slug, sort, order]);

  if (isLoading) return <p>loading..</p>;
  return (
    <section className="section__article">
      {articles.map(
        ({ title, body, topic, author, votes, comment_count, article_id }) => {
          return (
            <ArticleCard
              key={article_id}
              ArticleID={article_id}
              ArticleName={title}
              Article={body}
              Topic={topic}
              Author={author}
              Votes={votes}
              CommentCount={comment_count}
            />
          );
        }
      )}
    </section>
  );
}
