import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Error = ({
  title = "Page not found",
  msg = "It looks like you are lost!",
}) => {
  return (
    <>
      <Typography variant="h2" component="h2">
        {title}
      </Typography>
      <Box variant="section" my={4} pl={1} className="error-component">
        <Typography variant="p" component="p">
          {msg} <br />
          <Link to="/">Return Home &gt;&gt;</Link>
        </Typography>
      </Box>
    </>
  );
};

export default Error;
