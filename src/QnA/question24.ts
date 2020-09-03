export const question24 = () => {
  const text = (document.getElementById("q24") as HTMLInputElement).value;

  if (!text) {
    document.getElementById("question-24")!.innerHTML = "Please enter text.";
    return;
  }

  const firstChar = text.charAt(0);

  document.getElementById(
    "question-24"
  )!.innerHTML = `${firstChar}${text}${firstChar}`;
  return;
};
