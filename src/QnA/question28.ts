export const question28 = () => {
  const number1 = (document.getElementById("q28input1") as HTMLInputElement)
    .value;
  const number2 = (document.getElementById("q28input2") as HTMLInputElement)
    .value;

  if (!number1 || !number2) {
    document.getElementById("question-28")!.innerHTML =
      "Please enter both numbers.";
    return;
  }

  const result =
    (parseInt(number1) >= 50 && parseInt(number1) <= 99) ||
    (parseInt(number2) >= 50 && parseInt(number2) <= 99);

  document.getElementById("question-28")!.innerHTML = JSON.stringify(
    result
  ).toUpperCase();
};
