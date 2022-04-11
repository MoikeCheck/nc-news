import { useEffect, useState, useContext } from "react";
import * as api from "../Api";
import { useParams } from "react-router-dom";
import { Card, Container, Row, Col } from "react-bootstrap";
import React from "react";
import Vote from "./Vote";
import Comments from "./Comments";
import PostComment from "./PostComment";
import { UserContext } from "./Contexts/UserContext";

export default function SingleArticle() {
  const [article, setArticle] = useState([]);
  const [comments, setComments] = useState([]);
  const [postComment, setPostComment] = useState(null);
  const [posted, setPosted] = useState(0);
  // const [isLoading, setIsLoading] = useState(true);

  const { loggedInUser } = useContext(UserContext);
  const { article_id } = useParams();

  useEffect(
    () => {
      // setIsLoading(true);
      api.getArticleById(article_id).then((article) => {
        setArticle(article);
        // setIsLoading(false);
      });
      api.getCommentsByArticleId(article_id).then((res) => {
        setComments(res);
        setPostComment(null);
      });
    },
    [article_id],
    posted
  );

  return (
    <>
      <Container>
        <Card
          style={{ color: "white" }}
          className="article__card my-3 pt-2 justify-content-center"
          xs="4"
          md="4"
          lg="4"
        >
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

            <Row className="justify-content-md-center">
              <Col xs={12} sm={4} md={4}>
                <Vote article_id={article_id} votes={article.votes} />
              </Col>
            </Row>
          </Card.Body>
        </Card>
        <footer className="blockquote-footer">
          {Date(article.created_at)}
        </footer>
      </Container>
      <PostComment setPosted={setPosted} id={article_id} />
      <div className="comments-container mx-2 my-3">
        <h3>comments</h3>
        {comments.map((comment) => {
          return <Comments key={comment.comment_id} comment={comment} />;
        })}
      </div>
    </>
  );
}
