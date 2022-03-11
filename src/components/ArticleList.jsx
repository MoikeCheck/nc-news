import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";
import * as api from "../Api";
import { useParams } from "react-router-dom";
import React from "react";

export default function ArticleList() {
  const { slug } = useParams();
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    api.getArticles(slug).then((articles) => {
      setArticles(articles);
      setIsLoading(false);
    });
  }, [slug]);

  if (isLoading) return <p>loading..</p>;
  return (
    <section className="section__article">
      <h2 className="topic__header">{slug ? slug : "All Topics"}</h2>
      <ul>
        {articles.map(
          ({
            title,
            body,
            topic,
            author,
            votes,
            comment_count,
            article_id,
          }) => {
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
      </ul>
    </section>
  );
}
