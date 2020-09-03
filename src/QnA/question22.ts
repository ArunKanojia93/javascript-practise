export const question22 = () => {
  const text = (document.getElementById("q22Input1") as HTMLInputElement).value;
  const number = (document.getElementById("q22Input2") as HTMLInputElement)
    .value;

  if (!text || !number) {
    document.getElementById("question-22")!.innerHTML =
      "Please enter both Text and Number.";
    return;
  }

  const result = text
    .split("")
    .filter((val, index) => index !== parseInt(number));
  console.log(result);
  document.getElementById("question-22")!.innerHTML = result.join("");
  return;
};
