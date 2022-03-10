import { Box, CircularProgress } from "@mui/material";

const Loading = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <CircularProgress color="neutral" disableShrink />
    </Box>
  );
};

export default Loading;
