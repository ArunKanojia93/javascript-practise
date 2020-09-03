export const question27 = () => {
  const str = (document.getElementById("q27") as HTMLInputElement).value;

  if (!str) {
    document.getElementById("question-27")!.innerHTML = "Please enter text.";
    return;
  }

  const result = str.includes("Java");

  document.getElementById("question-27")!.innerHTML = JSON.stringify(
    result
  ).toUpperCase();
  return;
};
