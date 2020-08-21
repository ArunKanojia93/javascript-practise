export const qurrentDayAndTime = () => {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const date = new Date();
  const day = days[date.getDay()];
  let hours = date.getHours();
  let minutes: number | string = date.getMinutes();
  let seconds = date.getSeconds();
  let ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  const time = `${hours} ${ampm} :${minutes} :${seconds}`;

  return { day, time };
};
