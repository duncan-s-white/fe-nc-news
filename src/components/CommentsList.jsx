import * as api from "../api";
import { useState, useEffect } from "react";
import { Typography, Box, Grid } from "@mui/material";
import CommentCard from "./CommentCard";
import Loading from "./Loading";
import AddComment from "./AddComment";

const CommentsList = ({ articleId }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    api
      .fetchComments(articleId)
      .then(({ data }) => {
        setComments(data.comments);
        setIsLoading(false);
      })
      .catch(console.log);
  }, []);

  if (isLoading) return <Loading />;

  return (
    <Box
      variant="section"
      component="section"
      sx={{ py: 4, p: { lg: 8 }, lineHeight: { md: 1.8 } }}
    >
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} md={10}>
          <Typography variant="h3" component="h3">
            {" "}
            Comments:{" "}
          </Typography>
        </Grid>
        {comments.map((comment) => {
          return (
            <Grid item xs={12} md={10} key={comment.comment_id}>
              <CommentCard {...comment} />
            </Grid>
          );
        })}
        <Grid item xs={12} md={10}>
          <Typography variant="h3" component="h3">
            {" "}
            Add a comment:{" "}
          </Typography>
          <AddComment articleId={articleId} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default CommentsList;
