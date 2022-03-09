import { Box, Card, Chip } from "@mui/material";

const TopicsButtons = ({ topics, topic: selectedTopic }) => {
  console.log(selectedTopic);
  return (
    <Box variant="div" sx={{ mb: 1 }}>
      <Chip
        sx={{ mr: 1 }}
        key="all"
        label="all"
        component="a"
        href={`/`}
        variant={typeof selectedTopic === "undefined" ? "filled" : "outlined"}
        clickable
      />
      {topics.map((topic) => {
        return (
          <Chip
            sx={{ mr: 1 }}
            key={topic.slug}
            label={topic.slug}
            component="a"
            href={`/topic/${topic.slug}`}
            variant={selectedTopic === topic.slug ? "filled" : "outlined"}
            clickable
          />
        );
      })}
    </Box>
  );
};

export default TopicsButtons;
