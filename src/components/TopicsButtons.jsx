import { Card, Chip } from "@mui/material";

const TopicsButtons = ({ topics, topic: selectedTopic }) => {
  return (
    <Card variant="outlined" sx={{ mb: 1, p: 1 }}>
      {topics.map((topic) => {
        return (
          <Chip
            sx={{ mx: 1 }}
            key={topic.slug}
            label={topic.slug}
            component="a"
            href={`/topic/${topic.slug}`}
            variant={selectedTopic === topic.slug ? "filled" : "outlined"}
            clickable
          />
        );
      })}
    </Card>
  );
};

export default TopicsButtons;
