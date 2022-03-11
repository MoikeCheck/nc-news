import { Card, Button } from "react-bootstrap";
import logo from "../assets/orange-slice (1).png";
import React from "react";
import { Link } from "react-router-dom";

export default function ArticleCard({
  ArticleName,
  Topic,
  Author,
  Votes,
  CommentCount,
  ArticleID,
}) {
  return (
    <Card style={{ width: "18rem" }} className="article__card">
      <Card.Body>
        <Card.Title className="card__title">{ArticleName}</Card.Title>
        <Card.Text className="card__text">
          Topic: {Topic}
          <br />
          Author: {Author}
          <br />
          <br />
          <Card.Img src={logo} className="card__img" />
          {Votes} Comments: {CommentCount}
        </Card.Text>
        <Button variant="primary" className="card__button">
          <Link className="nav__item__link" to={`/article/${ArticleID}`}>
            View More
          </Link>
        </Button>
      </Card.Body>
    </Card>
  );
}
