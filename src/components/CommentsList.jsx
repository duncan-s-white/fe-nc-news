import * as api from "../api";
import { useState, useEffect } from "react";
import { Typography, Box, Grid, Alert } from "@mui/material";
import CommentCard from "./CommentCard";
import Loading from "./Loading";
import AddComment from "./AddComment";

const CommentsList = ({ articleId, setCommentCount }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [commentDeleted, setCommentDeleted] = useState(null);
  let commentDeletedMsg = "";

  if (commentDeleted !== null) {
    if (commentDeleted) {
      commentDeletedMsg = (
        <Alert severity="success" sx={{ mb: 2 }}>
          Comment deleted
        </Alert>
      );
    } else {
      commentDeletedMsg = (
        <Alert severity="error" sx={{ mb: 2 }}>
          Comment could not be deleted
        </Alert>
      );
    }
  }

  useEffect(() => {
    setIsLoading(true);
    api.fetchComments(articleId).then(({ data }) => {
      setComments(data.comments);
      setIsLoading(false);
    });
  }, [articleId]);

  if (isLoading) return <Loading />;

  return (
    <Box
      id="comments-list"
      variant="section"
      component="section"
      sx={{ py: 4, p: { lg: 8 }, lineHeight: { md: 1.8 } }}
    >
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} md={10}>
          {commentDeletedMsg}
        </Grid>
        <Grid item xs={12} md={10}>
          <AddComment
            articleId={articleId}
            setComments={setComments}
            setCommentCount={setCommentCount}
            commentDeleted={commentDeleted}
            setCommentDeleted={setCommentDeleted}
          />
        </Grid>
        <Grid item xs={12} md={10}>
          <Typography variant="h3" component="h3" sx={{ mb: 0 }}>
            User Comments:
          </Typography>
        </Grid>
        {comments.map((comment, index) => {
          return (
            <Grid item xs={12} md={10} key={index}>
              <CommentCard
                {...comment}
                setComments={setComments}
                setCommentCount={setCommentCount}
                setCommentDeleted={setCommentDeleted}
              />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default CommentsList;
