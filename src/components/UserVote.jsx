import { IconButton, Typography, FormHelperText } from "@mui/material";
import { ThumbUpOffAlt, ThumbDownOffAlt } from "@mui/icons-material";
import { useState } from "react";

const UserVote = ({ votes, id, updateMethod }) => {
  const [voted, setVoted] = useState(0);
  const [errorMessage, setErrorMessage] = useState(false);
  const msg = "Your vote could not be placed";

  const updateVotes = (value) => {
    if (voted === value) return;
    updateMethod(id, { inc_votes: value })
      .then(() => {
        setErrorMessage(false);
      })
      .catch((err) => {
        setErrorMessage(msg);
        setVoted((voted) => voted - value);
      });
    setVoted((voted) => voted + value);
  };

  return (
    <>
      <Typography variant="span" component="span" id={`vote-article`}>
        <IconButton
          aria-label="vote up"
          onClick={() => {
            updateVotes(1);
          }}
        >
          <ThumbUpOffAlt color={voted === 1 ? "primary" : "default"} />
        </IconButton>
        <Typography variant="caption">{votes + voted}</Typography>
        <IconButton
          aria-label="vote down"
          onClick={() => {
            updateVotes(-1);
          }}
        >
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
