import { Share } from "@mui/icons-material";
import { IconButton, Popover, Typography } from "@mui/material";
import { useState } from "react";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

const ShareButton = ({ title, path, small }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  let url;
  if (path === "") url = window.location.href;
  else url = window.location + path;

  const handleClickShare = (event) => {
    if (navigator.share) {
      navigator.share({ title, url });
    } else {
      setAnchorEl(event.currentTarget);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const copyUrl = () => {
    navigator.clipboard.writeText(url);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <>
      <Share onClick={handleClickShare} fontSize={small ? "small" : "medium"} />
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Typography sx={{ p: 2 }}>
          {url}
          <IconButton aria-label="copy share link" onClick={copyUrl}>
            <ContentCopyIcon />
          </IconButton>
        </Typography>
      </Popover>
    </>
  );
};

export default ShareButton;
