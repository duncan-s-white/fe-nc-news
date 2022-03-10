import { Box, Divider, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box variant="footer" component="footer" sx={{ mb: 2 }}>
      <Divider variant="middle" sx={{ mb: 2 }} />
      <Typography
        variant="caption"
        component="div"
        align="center"
        color="neutral.light"
      >
        Made with{" "}
        <a
          href="https://reactjs.org/"
          sx={{ color: "neutral.light" }}
          target="blank"
        >
          React
        </a>{" "}
        and{" "}
        <a href="https://mui.com/" target="blank">
          Material UI
        </a>
        <br />
        Created by{" "}
        <a href="https://github.com/duncan-s-white" target="blank">
          Duncan White
        </a>
      </Typography>
    </Box>
  );
};

export default Footer;
