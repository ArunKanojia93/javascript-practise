export const daysLeftUntilChristmas = () => {
  const today = new Date();
  const xMas = new Date(today.getFullYear(), 11, 25);
  if (today.getMonth() === 11 && today.getDate() > 25) {
    xMas.setFullYear(xMas.getFullYear() + 1);
  }
  const oneDay = 1000 * 60 * 60 * 24;
  const daysLeft = Math.ceil((xMas.getTime() - today.getTime()) / oneDay);

  return daysLeft;
};
