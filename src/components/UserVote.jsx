import { IconButton, Typography } from "@mui/material";
import { ThumbUpOffAlt, ThumbDownOffAlt } from "@mui/icons-material";

const UserVote = ({ votes }) => {
  return (
    <>
      <Typography variant="span" component="span">
        <IconButton aria-label="add to favorites">
          <ThumbUpOffAlt />
        </IconButton>
        <IconButton aria-label="add to favorites">
          <ThumbDownOffAlt />
        </IconButton>
        <Typography variant="caption">{votes}</Typography>
      </Typography>
    </>
  );
};

export default UserVote;
