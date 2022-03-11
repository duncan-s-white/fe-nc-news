import * as api from "../api";
import { IconButton, Typography, FormHelperText } from "@mui/material";
import { ThumbUpOffAlt, ThumbDownOffAlt } from "@mui/icons-material";
import { useState } from "react";

const UserVote = ({ votes, id }) => {
  const [voted, setVoted] = useState(0);
  const [errorMessage, setErrorMessage] = useState(false);
  const msg = "You vote could not be placed";

  const updateVotes = (value) => {
    if (voted === value) return;
    api
      .patchArticle(id, { inc_votes: value })
      .then(() => {
        setErrorMessage(false);
      })
      .catch((err) => {
        setErrorMessage(msg);
        setVoted((voted) => voted - value);
      });
    setVoted((voted) => voted + value);
  };

  const incrementVotes = () => {
    updateVotes(1);
  };

  const decrementVotes = () => {
    updateVotes(-1);
  };

  return (
    <>
      <Typography variant="span" component="span" id={`vote-article`}>
        <IconButton aria-label="vote up" onClick={incrementVotes}>
          <ThumbUpOffAlt color={voted === 1 ? "primary" : "default"} />
        </IconButton>
        <Typography variant="caption">{votes + voted}</Typography>
        <IconButton aria-label="vote down" onClick={decrementVotes}>
          <ThumbDownOffAlt color={voted === -1 ? "primary" : "default"} />
        </IconButton>
      </Typography>
      {errorMessage ? (
        <FormHelperText error={true}>{errorMessage}</FormHelperText>
      ) : (
        ""
      )}
    </>
  );
};

export default UserVote;
