export const question21 = () => {
  const str = (document.getElementById("q21") as HTMLInputElement).value;

  if (!str) {
    document.getElementById("question-21")!.innerHTML =
      "Please enter text first.";
    return;
  }

  if (str.substring(0, 2) === "Py") {
    document.getElementById("question-21")!.innerHTML = str;
    return;
  }
  document.getElementById("question-21")!.innerHTML = `Py${str}`;
  return;
};
