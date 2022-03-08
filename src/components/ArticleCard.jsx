import { Card, Button } from "react-bootstrap";

export default function ArticleCard({
  ArticleName,
  Topic,
  Author,
  Votes,
  CommentCount,
}) {
  return (
    <Card style={{ width: "18rem" }} className="article__card">
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <Card.Title className="card__title">{ArticleName}</Card.Title>
        <Card.Text className="card__text">
          Topic: {Topic} Author: {Author} Votes: {Votes} Comments:{" "}
          {CommentCount}
        </Card.Text>
        <Button variant="primary" className="card__button">View More</Button>
      </Card.Body>
    </Card>
  );
}
