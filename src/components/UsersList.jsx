import * as api from "../api";
import { useState, useEffect } from "react";
import {
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";
import Loading from "./Loading";

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    api.fetchUsers().then(({ data }) => {
      setUsers(data.users);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <Loading />;

  return (
    <>
      <Typography variant="h2" component="h2">
        Users
      </Typography>
      <Typography variant="p" component="p">
        Click a username to select a user
      </Typography>

      <nav aria-label="secondary mailbox folders">
        <List>
          {users.map((user) => {
            return (
              <ListItem disablePadding key={user.username}>
                <ListItemButton component={Link} to={`/user/${user.username}`}>
                  <ListItemText primary={`@${user.username}`} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </nav>
    </>
  );
};

export default UsersList;
