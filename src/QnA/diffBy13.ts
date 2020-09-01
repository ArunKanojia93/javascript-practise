export const diffBy13 = () => {
  const number: any = (document.getElementById("diffBy13") as HTMLInputElement)
    .value;

  if (!number) {
    document.getElementById("diff-by-13")!.innerHTML = "Please enter a number.";
    return;
  }

  if (parseInt(number) > 13) {
    const result = (parseInt(number) - 13) * 2;
    document.getElementById("diff-by-13")!.innerHTML = result.toString();
    return;
  }
  const result = 13 - parseInt(number);
  document.getElementById("diff-by-13")!.innerHTML = result.toString();
  return;
};
