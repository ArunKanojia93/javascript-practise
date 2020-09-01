export const within20 = () => {
  const number: any = (document.getElementById("within20") as HTMLInputElement)
    .value;

  if (!number) {
    document.getElementById("within-20")!.innerHTML = "Please enter a number";
    return;
  }

  const result =
    Math.abs(100 - parseInt(number)) <= 20 ||
    Math.abs(400 - parseInt(number)) <= 20;
  document.getElementById("within-20")!.innerHTML = JSON.stringify(
    result
  ).toUpperCase();
  return;
};
