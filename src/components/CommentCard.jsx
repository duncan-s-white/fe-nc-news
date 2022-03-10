import { Box, Paper, Typography } from "@mui/material";

const CommentCard = ({ body }) => {
  return (
    <>
      <Paper variant="outlined" square sx={{ p: 1.5 }}>
        <Typography> {body} </Typography>
      </Paper>
    </>
  );
};

export default CommentCard;
