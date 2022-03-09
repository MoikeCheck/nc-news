import { Card, Button } from "react-bootstrap";

export default function ArticleCard({ ArticleName, Article }) {
  return (
    <Card style={{ width: "18rem" }} className="article__card">
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <Card.Title>{ArticleName}</Card.Title>
        <Card.Text>{Article}</Card.Text>
        <Button variant="primary">View Comments</Button>
      </Card.Body>
    </Card>
  );
}
