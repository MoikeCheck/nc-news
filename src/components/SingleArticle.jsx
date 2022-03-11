import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";
import * as api from "../Api";
import { useParams } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import logo from "../assets/orange-slice (1).png";

export default function SingleArticle() {
  const [article, setArticle] = useState([]);
  const { article_id } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    api.getArticleById(article_id).then((article) => {
      console.log(article);
      setArticle(article);
      setIsLoading(false);
    });
  }, [article_id]);

  return (
    <div>
      <Card style={{ width: "18rem" }} className="article__card">
        <Card.Img src={logo} className="card__img" />
        <Card.Body>
          <Card.Title className="card__title">{article.title}</Card.Title>
          <Card.Text className="card__text">
            Topic: {article.topic} Author: {article.author} Votes:{" "}
            {article.votes} Body:{article.body}
            {article.comment_count}
          </Card.Text>
          <Button variant="primary" className="card__button">
            Comments
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}
