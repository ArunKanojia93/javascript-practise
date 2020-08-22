export const checkLeapYear = () => {
  const year: any = (document.getElementById("year") as HTMLInputElement).value;
  if (!year || year <= "0") {
    document.getElementById("leap-year")!.textContent =
      "Please enter a valid year.";
    return;
  }

  ((document.getElementById("leap-year")!.innerHTML as unknown) as boolean) =
    year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
  return;
};
