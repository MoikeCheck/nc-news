import { useEffect, useState } from "react";
import * as api from "../Api";
import { useParams } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import logo from "../assets/orange-slice (1).png";
import React from "react";
import Vote from "./Vote";

export default function SingleArticle() {
  const [article, setArticle] = useState([]);
  const { article_id } = useParams();
  // const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // setIsLoading(true);
    api.getArticleById(article_id).then((article) => {
      console.log(article);
      setArticle(article);
      // setIsLoading(false);
    });
  }, [article_id]);

  return (
    <div>
      <Card style={{ width: "18rem" }} className="single__card">
        <Card.Body>
          <Card.Title className="card__title">{article.title}</Card.Title>
          <Card.Text className="card__text__single">
            {article.body}
            <br />
            <br />
            Author: {article.author}
            <br />
            <br />
          </Card.Text>
          <Button variant="primary" className="card__button">
            Comments
          </Button>{" "}
          {article.comment_count}
          <Card.Img src={logo} className="card__img__single" />
          {article.votes}
        </Card.Body>
      </Card>
    </div>
  );
}
