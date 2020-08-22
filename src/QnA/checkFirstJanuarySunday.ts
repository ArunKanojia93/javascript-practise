export const checkFirstJanuarySunday = () => {
  let years: number[] = [];
  for (let year = 2014; year <= 2050; year++) {
    let date = new Date(year, 0, 1);
    if (date.getDay() === 0) {
      years = [...years, year];
    }
  }
  return years;
};
