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
        Made with React and Material UI
        <br />
        Created by Duncan White
      </Typography>
    </Box>
  );
};

export default Footer;
