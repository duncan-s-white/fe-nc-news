import * as api from "../api";
import { Alert, Box, Button, TextField } from "@mui/material";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

const AddComment = ({ articleId, setComments, setCommentCount }) => {
  const { loggedInUser } = useContext(UserContext);
  const [comment, setComment] = useState("");
  const [error, setError] = useState(false);
  const [helperText, setHelperText] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState(null);

  const handleChangeComment = (event) => {
    if (event.target.value.length >= 5) {
      setError(false);
      setHelperText("");
    }
    setComment(event.target.value);
  };

  const handleAddComment = (event) => {
    event.preventDefault();
    if (comment.length < 5) {
      setError(true);
      setHelperText("You comment must be at least 5 characters long!");
      return;
    }
    setComments((comments) => [
      { body: comment, created_at: "Just now", author: loggedInUser.username },
      ...comments,
    ]);
    setCommentCount((currCount) => currCount + 1);
    setSubmitSuccess(true);
    api
      .postComment(articleId, {
        body: comment,
        username: loggedInUser.username,
      })
      .catch(() => {
        setCommentCount((currCount) => currCount - 1);
        setSubmitSuccess(false);
        setComments((comments) => {
          const newComments = [...comments];
          newComments.shift();
          return newComments;
        });
      });
  };

  if (!loggedInUser) {
    return (
      <Button component={Link} to={"/users"}>
        Log In to Comment
      </Button>
    );
  }

  if (submitSuccess !== null) {
    if (submitSuccess) {
      return <Alert severity="success">Your comment has been added</Alert>;
    } else {
      return (
        <Alert severity="error">Your comment could not be submitted</Alert>
      );
    }
  }

  return (
    <>
      <Box component="form" onSubmit={handleAddComment}>
        <TextField
          error={error}
          helperText={helperText}
          onChange={handleChangeComment}
          value={comment}
          id="outlined-multiline-static"
          label="Comment on this Article"
          multiline
          rows={3}
          placeholder="Comment on this Article"
          fullWidth
        />
        <Button
          type="submit"
          variant="contained"
          align="right"
          sx={{ m: 1, display: "float", float: "right" }}
        >
          Add
        </Button>
      </Box>
    </>
  );
};

export default AddComment;
