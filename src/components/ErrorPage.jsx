import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <Typography variant="h2" component="h2">
        Page not found
      </Typography>
      <Box variant="section" my={5} pl={1}>
        <Typography variant="p" component="p">
          It looks like you are lost! <Link to={"/"}>Return Home &gt;&gt;</Link>
        </Typography>
      </Box>
    </>
  );
};

export default ErrorPage;
