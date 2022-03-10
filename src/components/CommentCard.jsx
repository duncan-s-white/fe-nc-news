import { Paper, Typography } from "@mui/material";
import * as format from "../utils/format";

const CommentCard = ({ body, author, created_at }) => {
  return (
    <>
      <Paper variant="outlined" square sx={{ px: 1.5, py: 2 }}>
        <Typography> {body} </Typography>
        <Typography
          variant="div"
          component="div"
          className="card-summary"
          sx={{ px: 0 }}
          color="initial"
        >
          <Typography variant="address" component="address">
            By{" "}
            <a rel="author" href={`/users/${author}`}>
              {author}
            </a>
          </Typography>{" "}
          <time
            dateTime={format.cardDate(created_at)}
            title={format.cardDate(created_at)}
          >
            {format.cardDate(created_at)}
          </time>
          <br />
        </Typography>
      </Paper>
    </>
  );
};

export default CommentCard;
