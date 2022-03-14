import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

const UserSettings = () => {
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);
  const artsPerPage =
    loggedInUser && loggedInUser.articlesPerPage
      ? loggedInUser.articlesPerPage
      : 10;
  const [articlesPerPage, setArticlesPerPage] = useState(artsPerPage);
  let options = [];
  for (let i = 3; i <= 12; i++) {
    options.push(i);
  }

  const handleSetArticles = (event) => {
    setArticlesPerPage(event.target.value);
    setLoggedInUser((current) => ({
      ...current,
      articlesPerPage: event.target.value,
    }));
  };

  if (!loggedInUser) {
    return (
      <Box py={5}>
        <Button component={Link} to={"/users"}>
          Log In to View Settings
        </Button>
      </Box>
    );
  }

  return (
    <>
      <Typography component="h2" variant="h2">
        Settings
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={10} md={8}>
          <FormControl sx={{ m: 1, minWidth: 140 }}>
            <InputLabel>Article Per Page</InputLabel>
            <Select
              value={articlesPerPage}
              onChange={handleSetArticles}
              label="Article Per Page"
            >
              {options.map((option) => {
                return (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </>
  );
};

export default UserSettings;
