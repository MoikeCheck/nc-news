import { useState, useContext } from "react";
import { postComment } from "../Api";
import { UserContext } from "./Contexts/UserContext";
import { Container, Form, Card, Button } from "react-bootstrap";
import React from "react";

export default function PostComment({ setPosted, id }) {
  const [comment, setComment] = useState("");
  const [commentPosted, setCommentPosted] = useState();
  const [message, setMessage] = useState("");

  const { loggedInUser } = useContext(UserContext);

  const handlePostComment = (e) => {
    e.preventDefault();
    if (comment.length > 0) {
      postComment(id, {
        username: loggedInUser.username,
        body: comment
      }).then((res) => {
        setCommentPosted(res.comment_id);
        setComment("");
        setTimeout(() => {
          setPosted((preValue) => {
            return preValue + 1;
          });
        }, 2000);
      });
    } else {
      setMessage("comment is empty");
    }
  };

  return (
    <Container className="new-comment-container">
      {commentPosted !== undefined ? (
        <div className="alert alert-success my-2" role="alert">
          <p className="alert-heading">comment posted </p>
        </div>
      ) : (
        <Container>
          <Card
            style={{ color: "white" }}
            className="article__card my-3 pt-2 justify-content-center"
            xs="4"
            md="4"
            lg="4"
          >
            <Form className="my-3 mx-4" onSubmit={handlePostComment}>
              <label className="my-1">hey,</label>
              <h6>@{loggedInUser.username}</h6>
              <label htmlFor="new-comment" className="card-text my-1">
                write a comment
              </label>
              <br />
              <Form.Control
                id="new-comment"
                as="textarea"
                rows={5}
                className="my-2"
                type="text"
                value={comment}
                style={{ height: "150px", width: "100%" }}
                placeholder=" what do you think?"
                onChange={(e) => {
                  setComment(e.target.value);
                }}
              ></Form.Control>
              <Container className="text-center">
                <Button
                  id="pop-btn"
                  type="submit"
                  className="btn btn-primary mt-2"
                  variant="warning"
                >
                  send comment
                </Button>
                <div
                  style={{ color: "white" }}
                  className="article__card my-3 pt-2 justify-content-center"
                  xs="4"
                  md="4"
                  lg="4"
                  role="alert"
                >
                  {message}
                </div>
              </Container>
            </Form>
          </Card>
        </Container>
      )}
    </Container>
  );
}
