export const sumOfIntegers = () => {
  const number1: any = (document.getElementById(
    "sumInteger1"
  ) as HTMLInputElement).value;
  const number2: any = (document.getElementById(
    "sumInteger2"
  ) as HTMLInputElement).value;

  if (!number1 || !number2) {
    document.getElementById("sum-integers")!.innerHTML =
      "Please enter number1 & number2.";
    return;
  }

  if (number1 === number2) {
    const result = (parseInt(number1) + parseInt(number2)) * 3;
    document.getElementById("sum-integers")!.innerHTML = result.toString();
    return;
  }

  const result = parseInt(number1) + parseInt(number2);
  document.getElementById("sum-integers")!.innerHTML = result.toString();
  return;
};
