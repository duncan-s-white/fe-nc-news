import * as api from "../api";
import { useState, useEffect } from "react";
import { Button, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import Loading from "./Loading";
import { Box } from "@mui/system";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const UserProfile = () => {
  const { username } = useParams();
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);
  const [user, setUser] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const logIn = (user) => {
    setLoggedInUser(user);
  };

  useEffect(() => {
    setIsLoading(true);
    api
      .fetchUser(username)
      .then(({ data }) => {
        setUser(data.user);
        setIsLoading(false);
      })
      .catch(console.log);
  }, [username]);

  if (isLoading) return <Loading />;
  return (
    <>
      <Typography variant="h2" component="h2">
        @{username} - {user.name}
      </Typography>
      <Box variant="div" component="div" textAlign={"center"}>
        <img src={user.avatar_url} className="user-profile" />
        <br />
        <Button variant="contained" sx={{ my: 1 }} onClick={() => logIn(user)}>
          Log In
        </Button>
      </Box>
    </>
  );
};

export default UserProfile;
