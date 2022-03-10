import {
  Avatar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

const UserInfo = () => {
  const { loggedInUser } = useContext(UserContext);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  if (!loggedInUser) {
    return (
      <Button
        component={Link}
        to={"/users"}
        sx={{ my: 2, color: "white", display: "block" }}
      >
        Log In
      </Button>
    );
  }

  const userPages = [
    { title: "Profile", link: `/user/${loggedInUser.username}` },
    { title: "Settings", link: `/user/${loggedInUser.username}/settings` },
  ];

  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Open User Options">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar alt="Remy Sharp" src={loggedInUser.avatar_url} />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {userPages.map((page) => (
          <MenuItem
            key={page.title}
            component={Link}
            to={page.link}
            onClick={handleCloseUserMenu}
          >
            <Typography textAlign="center">{page.title}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default UserInfo;
