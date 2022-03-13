import { Box, Chip } from "@mui/material";
import { Link } from "react-router-dom";

const TopicsButtons = ({ topics, topic: selectedTopic }) => {
  const topicButtons = [{ slug: "all" }, ...topics];
  return (
    <Box variant="div" sx={{ mb: 1 }}>
      {topicButtons.map((topic) => {
        return (
          <Chip
            sx={{ mr: 1 }}
            key={topic.slug}
            label={topic.slug}
            component={Link}
            to={topic.slug === "all" ? `/` : `/topic/${topic.slug}`}
            variant={selectedTopic === topic.slug ? "filled" : "outlined"}
            clickable
          />
        );
      })}
    </Box>
  );
};

export default TopicsButtons;
