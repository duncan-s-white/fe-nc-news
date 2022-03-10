import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Box, Grid, Chip, IconButton, Typography } from "@mui/material";
import { ChatBubbleOutline, Share } from "@mui/icons-material";
import * as api from "../api";
import * as format from "../utils/format";
import UserVote from "./UserVote";
import CommentsList from "./CommentsList";
import Loading from "./Loading";

const ArticlePage = () => {
  const { articleId } = useParams();
  const [article, setArticle] = useState([]);
  const [commentCount, setCommentCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    api
      .fetchArticle(articleId)
      .then(({ data }) => {
        setArticle(data.article);
        setCommentCount(data.article.comment_count);
        setIsLoading(false);
      })
      .catch(console.log);
  }, []);

  if (isLoading) return <Loading />;

  const createdAt = format.cardDate(article.created_at);
  return (
    <Box
      variant="article"
      component="article"
      sx={{
        p: 2,
        maxWidth: [480, 720, 900, 1200],
        margin: "0 auto",
      }}
    >
      <Typography variant="h2" component="h2" sx={{ color: "neutral.main" }}>
        {article.title}
      </Typography>

      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item xs={9}>
          <Typography variant="address" component="address" className="author">
            By{" "}
            <Link rel="author" to={`/user/${article.author}`}>
              {article.author}
            </Link>
          </Typography>
          <Typography
            variant="time"
            component="time"
            dateTime={createdAt}
            title={createdAt}
          >
            {createdAt}
          </Typography>
          <br />
          <Chip
            sx={{ my: 0.5 }}
            size="small"
            label={article.topic}
            component={Link}
            to={`/topic/${article.topic}`}
            variant="outlined"
            clickable
          />
        </Grid>
        <Grid item container direction="column" xs={3} alignItems="flex-end">
          <Grid item>
            <Typography variant="caption">{commentCount}</Typography>
            <IconButton aria-label="view comments" color="default">
              <ChatBubbleOutline />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton aria-label="share">
              <Share />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>

      <Typography
        variant="article"
        component="article"
        sx={{ py: 4, p: { lg: 8 }, lineHeight: { md: 1.8 } }}
      >
        {article.body}
      </Typography>

      <UserVote votes={article.votes} id={article.article_id} />

      <CommentsList
        articleId={article.article_id}
        setCommentCount={setCommentCount}
      />
    </Box>
  );
};

export default ArticlePage;
