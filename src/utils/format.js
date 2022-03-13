export const cardTitle = (title, maxLength = 60) => {
  if (title.length <= maxLength) return title;
  return title.substring(0, maxLength - 3) + "...";
};

export const topicTitle = (topic, sortBy, order) => {
  let title = "Articles";
  if (topic !== "all") {
    title = topic[0].toUpperCase() + topic.slice(1) + " Articles";
  }
  switch (sortBy) {
    case "created_at":
      return `${order === "desc" ? "Latest" : "Oldest"} ${title}`;
    case "votes":
      return `${order === "desc" ? "Most" : "Least"} Popular ${title}`;
    case "comment_count":
      return `${order === "desc" ? "Most" : "Least"} Talked About ${title}`;
    default:
      return `${topic === "all" ? "All " : ""}${title}`;
  }
};

export const sortByText = (sortBy) => {
  switch (sortBy) {
    case "created_at":
      return [
        ["Newest", "desc"],
        ["Oldest", "asc"],
      ];
    case "votes":
    case "comment_count":
      return [
        ["Most", "desc"],
        ["Least", "asc"],
      ];
    default:
      return [
        ["A-Z", "asc"],
        ["Z-A", "desc"],
      ];
  }
};

export const cardDate = (rawDate) => {
  if (rawDate === "Just now") return rawDate;
  return new Date(rawDate).toDateString();
};
