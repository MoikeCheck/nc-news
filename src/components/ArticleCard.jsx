import { Card, Image, Container, Col, Row } from "react-bootstrap";
import thumb from "../assets/thumbs-up.png";
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
    <Link
      to={`/article/${ArticleID}`}
      className="normal-text"
      style={{ textDecoration: "none", color: "white" }}
    >
      <Container className='Article__container'>
        <Card
          className="article__card my-3 pt-2 justify-content-center"
          xs="4"
          md="4"
          lg="4"
        >
          <Card.Body>
            <Card.Title className="card__title">{ArticleName} </Card.Title>
            <Card.Text className="card__text">
              Topic: {Topic}
              <br />
              Author: {Author}
              <br />
              <br />
              <Row className="justify-content-md-center">
                <Col>Comments: {CommentCount}</Col>
                <Col className='Article__votes p-1' xs={12} sm={4} md={2}>
                  <Image src={thumb} className="card__img ml-5" width="40" />
                  {Votes}
                </Col>
              </Row>
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </Link>
  );
}
