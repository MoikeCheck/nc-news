import React from "react";
import { useEffect, useState } from "react";
import { patchVotes } from "../Api";
import down from "../assets/down.png";
import up from "../assets/up.png";
import { Container, Image } from "react-bootstrap";

export default function Vote({ article_id, votes }) {
  const [votedUp, setVotedUp] = useState(false);
  const [votedDown, setVotedDown] = useState(false);
  const [displayVote, setDisplayVote] = useState(0);

  useEffect(() => {
    setDisplayVote(votes);
  }, []);

  const handleVoteUp = () => {
    if (!votedUp) {
      setDisplayVote((currVote) => {
        return currVote + 1;
      });
      setVotedUp(true);
      patchVotes(article_id, +1);
    } else {
      setDisplayVote((currVote) => {
        return currVote - 1;
      });
      setVotedUp(false);
      patchVotes(article_id, -1);
    }
  };

  const handleVoteDown = () => {
    if (!votedDown) {
      setDisplayVote((currVote) => {
        return currVote - 1;
      });
      setVotedDown(true);
      patchVotes(article_id, -1);
    } else {
      setDisplayVote((currVote) => {
        return currVote + 1;
      });
      setVotedDown(false);
      patchVotes(article_id, +1);
    }
  };

  return (
    <Container className="vote">
      <Image
        onClick={handleVoteUp}
        src={up}
        className="card__img ml-5"
        width="30"
      ></Image>
      <p>Votes {displayVote}</p>
      <Image
        onClick={handleVoteDown}
        src={down}
        className="card__img ml-5"
        width="30"
      ></Image>
    </Container>
  );
}
