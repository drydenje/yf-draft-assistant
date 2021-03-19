export const formatMonth = (date) =>
  new Intl.DateTimeFormat("en-US", {
    month: "long",
  }).format(date);
