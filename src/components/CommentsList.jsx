import * as api from "../api";
import { useState, useEffect } from "react";
import { Typography, Box, Grid } from "@mui/material";
import CommentCard from "./CommentCard";
import Loading from "./Loading";
import AddComment from "./AddComment";

const CommentsList = ({ articleId, setCommentCount }) => {
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
          <AddComment
            articleId={articleId}
            setComments={setComments}
            setCommentCount={setCommentCount}
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
              <CommentCard {...comment} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default CommentsList;
