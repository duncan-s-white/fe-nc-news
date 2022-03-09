export const cardTitle = (title, maxLength = 60) => {
  if (title.length <= maxLength) return title;
  return title.substring(0, maxLength - 3) + "...";
};

export const slugTitle = (str) => {
  return str[0].toUpperCase() + str.slice(1);
};