import * as React from "react";
import * as format from "../utils/format";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ShareIcon from "@mui/icons-material/Share";
import { CardActionArea, Chip, Divider, Grid, Link } from "@mui/material";
import {
  ChatBubble,
  ChatBubbleOutline,
  ThumbsUpDown,
  ThumbUpOffAlt,
} from "@mui/icons-material";

export default function ArticleCard({
  title,
  created_at,
  author,
  topic,
  comment_count,
  votes,
}) {
  const articleDate = new Date(created_at).toDateString();

  return (
    <Card>
      <CardActionArea>
        <Typography variant="h4">{format.cardTitle(title)}</Typography>
        <Divider />
      </CardActionArea>
      <Typography
        variant="div"
        component="div"
        className="card-summary"
        color="initial"
      >
        <Typography variant="address" component="address" className="author">
          By{" "}
          <a rel="author" href={`/users/${author}`}>
            {author}
          </a>
        </Typography>{" "}
        <time dateTime="{created_at}" title="August 28th, 2011">
          {articleDate}
        </time>
        <br />
      </Typography>
      <CardActions disableSpacing>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Chip
            size="small"
            label={topic}
            component="a"
            href="#basic-chip"
            variant="outlined"
            clickable
          />
          <Grid item>
            <IconButton aria-label="view comments">
              <ChatBubbleOutline fontSize="small" />
            </IconButton>
            <Typography variant="caption">{comment_count}</Typography>
            <IconButton aria-label="add to favorites">
              <ThumbUpOffAlt fontSize="small" />
            </IconButton>
            <Typography variant="caption">{votes}</Typography>
            <IconButton aria-label="share">
              <ShareIcon fontSize="small" />
            </IconButton>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
}
