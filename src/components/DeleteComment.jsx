import * as api from "../Api";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import React from "react";
import { Button, Container, Card, Col } from "react-bootstrap";

export default function DeleteComment() {
  const [deleted, setDeleted] = useState();

  const { comment_id } = useParams();

  const handleDelete = (e) => {
    e.preventDefault();
    api.removeCommentById(comment_id).then((res) => {
      setDeleted(res.status);
    });
  };

  return (
    <Container className="delete-container mt-5 justify-content-center">
      <Card
        className="article__card my-3 pt-2 justify-content-center"
        xs="4"
        md="4"
        lg="4"
      >
        <Col>
          <Button
            type="button"
            id="pop-btn"
            className="btn btn-primary mt-3"
            onClick={handleDelete}
            variant="warning"
          >
            <Link
              className="link"
              to="/"
              style={{ textDecoration: "none" }}
            >
              Back
            </Link>
          </Button>

          {deleted !== undefined ? (
            <div className="alert alert-success my-2" role="alert">
              <p className="alert-heading">comment deleted </p>{" "}
            </div>
          ) : (
            <div className="confirm-delete my-3">
              <h3 className="title-main">
                Are you sure you want to delete the comment?
              </h3>
              <Button
                type="button"
                id="pop-btn"
                className="btn btn-primary mt-3"
                onClick={handleDelete}
                variant="warning"
              >
                Delete
              </Button>
            </div>
          )}
        </Col>
      </Card>
    </Container>
  );
}
