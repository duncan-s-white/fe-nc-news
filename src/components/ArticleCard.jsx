import * as React from "react";
import * as format from "../utils/format";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";

export default function ArticleCard({ title, created_at, author }) {
  return (
    <Card>
      <Typography variant="h4">{format.cardTitle(title)}</Typography>
      <Typography variant="div" className="card-summary" color="initial">
        <address className="author">
          By{" "}
          <a rel="author" href="/users/{author}">
            {author}
          </a>
        </address>
        on{" "}
        <time dateTime="{created_at}" title="August 28th, 2011">
          {created_at}
        </time>
        <br />
      </Typography>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
