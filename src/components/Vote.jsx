import React from "react";
import { useEffect, useState } from "react";
import { patchVotes } from "../Api";

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
    <div className="vote">
      <button onClick={handleVoteUp}>like</button>
      <p>Votes {displayVote}</p>
      <button onClick={handleVoteDown}>dislike</button>
    </div>
  );
}
