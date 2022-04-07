import { postComment } from "../Api";
import { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import React from "react";
import { Container, Card, Button } from "react-bootstrap";

export default function PostComment() {
  // // sets CONTEXT for logged in user
  // const { loggedInUser, setLoggedInUser } = useContext(UserContext);

  // Setting initial comment, isPosting, message, STATE:
  const [commentText, setCommentText] = useState("");
  const [isPosting, setIsPosting] = useState(false);
  const [message, setMessage] = useState("");

  // useParams to get comments for article_id
  const { article_id } = useParams();

  // function to render a message to the use
  function Message() {
    return message;
  }

  // functions to setMessage when field is blank/comment is posted:
  function blankMsg() {
    const msgTxt = "Comment cannot be blank";
    setMessage(msgTxt);
  }
  function postedMsg() {
    const msgTxt = `Comment Posted!`;
    setMessage(msgTxt);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const comment = {
      body: commentText,
    };

    setCommentText("");
    if (commentText.length === 0) {
      blankMsg();
    } else {
      setIsPosting(true);
      postComment(article_id, comment).then(() => {
        setIsPosting(false);
        postedMsg();
      });
    }
  }

  // conditional loading... and Error render
  function IsPosting() {
    if (isPosting) {
      return <p>posting comment...</p>;
    } else {
      return "";
    }
  }

  // RENDER page:
  return (
    <div>
      <Card
        className="article__card my-3 pt-2 justify-content-center"
        xs="4"
        md="4"
        lg="4"
      >
        <form onSubmit={handleSubmit} className="comment--form">
          <fieldset>
            <legend>Post Comment:</legend>
            <label htmlFor="comment">Input here: </label> <br />
            <input
              id="input--comment"
              type="text"
              size="30"
              value={commentText}
              onChange={(e) => {
                setMessage("");
                setCommentText(e.target.value);
              }}
            />
            <br />
            <br />
            <Button type="submit">Submit</Button>
          </fieldset>
        </form>
      </Card>
      <Message />
      <IsPosting />
    </div>
  );
}
