export const question29 = () => {
  const number1 = (document.getElementById("q29input1") as HTMLInputElement)
    .value;
  const number2 = (document.getElementById("q29input2") as HTMLInputElement)
    .value;
  const number3 = (document.getElementById("q29input3") as HTMLInputElement)
    .value;

  if (!number1 || !number2 || !number3) {
    document.getElementById("question-29")!.innerHTML =
      "Please enter all numbers.";
    return;
  }

  const result =
    (parseInt(number1) >= 50 && parseInt(number1) <= 99) ||
    (parseInt(number2) >= 50 && parseInt(number2) <= 99) ||
    (parseInt(number3) >= 50 && parseInt(number3) <= 99);

  document.getElementById("question-29")!.innerHTML = JSON.stringify(
    result
  ).toUpperCase();
};
