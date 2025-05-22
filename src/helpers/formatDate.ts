// Get only the month and date from a date string
export const formatDate = (dateString: string) => {
  const newDate = new Date(dateString).toDateString();

  const [_, month, date, __] = newDate.split(' ');

  return `${month} ${date}`; //ex: May 22
};
