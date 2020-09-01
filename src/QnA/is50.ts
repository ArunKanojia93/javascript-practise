export const is50 = () => {
  const number1: any = (document.getElementById(
    "50Number1"
  ) as HTMLInputElement).value;
  const number2: any = (document.getElementById(
    "50Number2"
  ) as HTMLInputElement).value;

  if (!number1 || !number2) {
    document.getElementById("check-50")!.innerHTML =
      "Please enter number1 & number2.";
    return;
  }

  if (
    parseInt(number1) === 50 ||
    parseInt(number2) === 50 ||
    parseInt(number1) + parseInt(number2) === 50
  ) {
    document.getElementById("check-50")!.innerHTML = "TRUE";
    return;
  }
  document.getElementById("check-50")!.innerHTML = "FALSE";
  return;
};
