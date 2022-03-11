import { Delete } from "@mui/icons-material";
import { Grid, Paper, Typography } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import * as api from "../api";
import * as format from "../utils/format";
import LoadingButton from "@mui/lab/LoadingButton";

const CommentCard = ({
  body,
  author,
  created_at,
  comment_id,
  setCommentCount,
  setComments,
  setCommentDeleted,
}) => {
  const [commentDeleting, setCommentDeleting] = useState(false);
  const handleDeleteComment = (event, commentId) => {
    setCommentDeleting(true);
    api
      .deleteComment(commentId)
      .then(() => {
        setCommentDeleting(false);
        setCommentDeleted(true);
        setCommentCount((currCount) => currCount - 1);
        setComments((comments) => {
          return comments.filter((comment) => comment.comment_id !== commentId);
        });
      })
      .catch(() => {
        setCommentDeleting(false);
        setCommentDeleted(false);
      });
  };

  return (
    <>
      <Paper variant="outlined" square sx={{ px: 1.5, py: 2 }}>
        <Typography> {body} </Typography>
        <Grid container justifyContent="space-between" s={2} pb={1}>
          <Grid item>
            <Typography
              variant="div"
              component="div"
              className="card-summary"
              sx={{ px: 0 }}
              color="initial"
            >
              <Typography variant="address" component="address">
                By{" "}
                <Link rel="author" to={`/user/${author}`}>
                  {author}
                </Link>
              </Typography>{" "}
              <time
                dateTime={format.cardDate(created_at)}
                title={format.cardDate(created_at)}
              >
                {format.cardDate(created_at)}
              </time>
              <br />
            </Typography>
          </Grid>
          <Grid item alignSelf="flex-end">
            {comment_id ? (
              <LoadingButton
                loading={commentDeleting}
                sx={{ color: "neutral.light" }}
                aria-label="delete comment"
                onClick={(event) => handleDeleteComment(event, comment_id)}
              >
                <Delete fontSize="small" />
              </LoadingButton>
            ) : (
              ""
            )}
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default CommentCard;
