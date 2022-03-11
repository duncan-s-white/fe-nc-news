import { Box, Chip } from "@mui/material";
import { Link } from "react-router-dom";

const TopicsButtons = ({ topics, topic: selectedTopic }) => {
  return (
    <Box variant="div" sx={{ mb: 1 }}>
      <Chip
        sx={{ mr: 1 }}
        key="all"
        label="all"
        component={Link}
        to={`/`}
        variant={typeof selectedTopic === "undefined" ? "filled" : "outlined"}
        clickable
      />
      {topics.map((topic) => {
        return (
          <Chip
            sx={{ mr: 1 }}
            key={topic.slug}
            label={topic.slug}
            component={Link}
            to={`/topic/${topic.slug}`}
            variant={selectedTopic === topic.slug ? "filled" : "outlined"}
            clickable
          />
        );
      })}
    </Box>
  );
};

export default TopicsButtons;
