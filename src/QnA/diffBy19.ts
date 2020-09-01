export const diffBy19 = () => {
  const number: any = (document.getElementById("diffBy19") as HTMLInputElement)
    .value;

  if (!number) {
    document.getElementById("diff-by-19")!.innerHTML = "Please enter a number.";
    return;
  }

  if (parseInt(number) > 19) {
    const result = (parseInt(number) - 19) * 3;
    document.getElementById("diff-by-19")!.innerHTML = result.toString();
    return;
  }
  const result = 19 - parseInt(number);
  document.getElementById("diff-by-19")!.innerHTML = result.toString();
  return;
};
