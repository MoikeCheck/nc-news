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
          <Row>
            <Col>
              <Image src={thumb} className=" me-5" width="30" />
              <Card.Text className="mx-5" style={{ display: "inline" }}>
                {comment.votes}
              </Card.Text>
              </Col>
              <Col>
                <Button
                  id="pop-btn"
                  className="btn btn-primary mt-3"
                  type="submit"
                  variant="warning"
                >
                  <Link
                    className="link ps-5 ms-5"
                    style={{ textDecoration: "none" }}
                    to={`/comment/${comment.comment_id}`}
                  >
                    delete
                  </Link>
                </Button>
              </Col>
            
          </Row>
        </Card.Body>
      </Card>
      <footer className="blockquote-footer mt-1">
        {Date(comment.created_at)}
      </footer>
    </Container>
  );
}
