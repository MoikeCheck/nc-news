import { Link } from "react-router-dom";
import { Card, Container, Row, Image, Col, Button } from "react-bootstrap";
import React from "react";
import thumb from "../assets/thumbs-up.png";

export default function CommentCard({ comment }) {
  return (
    <Container className="article-card-wrapper">
      <Card
        style={{ color: "white" }}
        className="article__card my-3 pt-2 justify-content-center"
        xs="4"
        md="4"
        lg="4"
      >
        <Card.Body className="card-body">
          <Row>
            <Card.Title className="card-title topic">
              <Card.Text>@{comment.author}</Card.Text>
            </Card.Title>
          </Row>
          <Card.Text className="card-text my-2">{comment.body}</Card.Text>
          <br />
          <br />
          <Image src={thumb} width="30" />
          <Card.Text style={{ display: "inline" }}>{comment.votes}</Card.Text>
          <br />
          <br />
          <Button size="sm" type="submit" variant="warning">
            <Link
              className="link"
              style={{ textDecoration: "none" }}
              to={`/comment/${comment.comment_id}`}
            >
              delete
            </Link>
          </Button>
        </Card.Body>
      </Card>
      <footer className="blockquote-footer mt-1">
        {Date(comment.created_at)}
      </footer>
    </Container>
  );
}
