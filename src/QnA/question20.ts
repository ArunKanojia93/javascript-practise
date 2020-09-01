export const question20 = () => {
  const number1: any = (document.getElementById(
    "q20input1"
  ) as HTMLInputElement).value;
  const number2: any = (document.getElementById(
    "q20input2"
  ) as HTMLInputElement).value;

  if (!number1 || !number2) {
    document.getElementById("question-20")!.innerHTML =
      "Please enter both numbers";
    return;
  }

  const result =
    (parseInt(number1) < 0 && parseInt(number2) >= 0) ||
    (parseInt(number2) < 0 && parseInt(number1) >= 0);
  document.getElementById("question-20")!.innerHTML = JSON.stringify(
    result
  ).toUpperCase();
  return;
};
