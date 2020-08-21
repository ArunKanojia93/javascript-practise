export const getCurrentDate = (format: string) => {
  const date = new Date();
  let dd: string | number = date.getDate();
  let mm: string | number = date.getMonth() + 1;
  const yyyy = date.getFullYear();
  if (dd < 10) {
    dd = "0" + dd;
  }

  if (mm < 10) {
    mm = "0" + mm;
  }

  switch (format) {
    case "mm-dd-yyyy":
      return `${mm}-${dd}-${yyyy}`;
    case "mm/dd/yyyy":
      return `${mm}/${dd}/${yyyy}`;
    case "dd/mm/yyyy":
      return `${dd}/${mm}/${yyyy}`;
    default:
      return `${dd}-${mm}-${yyyy}`;
  }
};
