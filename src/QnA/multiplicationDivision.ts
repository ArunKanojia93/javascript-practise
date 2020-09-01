export const multiplicationDivision = (id: string) => {
  const number1: any = (document.getElementById("number1") as HTMLInputElement)
    .value;
  const number2: any = (document.getElementById("number2") as HTMLInputElement)
    .value;
  if (!number1 || !number2) {
    document.getElementById("divide-multiply")!.textContent =
      "Please enter Number1 and Number2";
    return;
  }
  if (id === "Divide") {
    const result = parseInt(number1) / parseInt(number2);
    document.getElementById("divide-multiply")!.textContent = result.toString();
  }
  if (id === "Multiply") {
    const result = parseInt(number1) * parseInt(number2);
    document.getElementById("divide-multiply")!.textContent = result.toString();
  }
};
