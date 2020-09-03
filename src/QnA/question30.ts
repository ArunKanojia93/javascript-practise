export const question30 = () => {
  const str = (document.getElementById("q30") as HTMLInputElement).value;

  if (!str) {
    document.getElementById("question-30")!.innerHTML = "Please enter text.";
    return;
  }

  if (str.length <= 5) {
    document.getElementById("question-30")!.innerHTML = str;
    return;
  }

  if (str.substring(4, 10) === "Script") {
    const result = str.substring(0, 4) + str.substring(10, str.length);
    document.getElementById("question-30")!.innerHTML = result;
    return;
  }
  document.getElementById("question-30")!.innerHTML = str;
  return;
};
