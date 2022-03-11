import * as format from "../utils/format";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { CardActionArea, Chip, Divider, Grid } from "@mui/material";
import { ChatBubbleOutline, ThumbUpOffAlt } from "@mui/icons-material";
import { Link } from "react-router-dom";
import ShareButton from "./ShareButton";

export default function ArticleCard({
  title,
  created_at,
  author,
  topic,
  comment_count,
  votes,
  article_id,
}) {
  return (
    <Card>
      <CardActionArea component={Link} to={`/article/${article_id}`}>
        <Typography variant="h4">{format.cardTitle(title)}</Typography>
        <Divider />
      </CardActionArea>
      <Typography
        variant="div"
        component="div"
        className="card-summary"
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
            component={Link}
            to={`/topic/${topic}`}
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
              <ShareButton
                title={title}
                path={`/article/${article_id}`}
                size="small"
              />
            </IconButton>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
}
