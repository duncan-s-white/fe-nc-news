import * as api from "../api";
import { useState, useEffect } from "react";
import { Alert, Button, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import Loading from "./Loading";
import { Box } from "@mui/system";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const UserProfile = () => {
  const { username } = useParams();
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);
  const [user, setUser] = useState([]);
  const [logInMessage, setLogInMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const logIn = (user) => {
    setLoggedInUser(user);
    localStorage.setItem("user", JSON.stringify(user));
    if (user === null) {
      setLogInMessage(
        <Alert severity="warning" sx={{ mb: 2 }}>
          You have logged out
        </Alert>
      );
    } else {
      setLogInMessage(
        <Alert severity="success" sx={{ mb: 2 }}>
          You have logged in
        </Alert>
      );
    }
  };

  useEffect(() => {
    setIsLoading(true);
    api.fetchUser(username).then(({ data }) => {
      setUser(data.user);
      setIsLoading(false);
    });
  }, [username]);

  if (isLoading) return <Loading />;

  const isUserLoggedIn =
    loggedInUser && loggedInUser.username === user.username;
  return (
    <>
      <Typography variant="h2" component="h2">
        @{username} - {user.name}
      </Typography>
      {logInMessage}
      <Box variant="div" component="div" textAlign={"center"}>
        <img src={user.avatar_url} className="user-profile" alt={username} />
        <br />
        <Button
          variant="contained"
          sx={{ my: 1 }}
          onClick={() => logIn(isUserLoggedIn ? null : user)}
        >
          {isUserLoggedIn ? "Log Out" : "Log In"}
        </Button>
      </Box>
    </>
  );
};

export default UserProfile;
