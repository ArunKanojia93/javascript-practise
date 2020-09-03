export const question26 = () => {
  const str = (document.getElementById("q26") as HTMLInputElement).value;

  if (str.length > 3) {
    const last3Char = str.substring(str.length - 3);
    document.getElementById("question-26")!.innerHTML =
      last3Char + str + last3Char;
    return;
  }
  document.getElementById("question-26")!.innerHTML =
    "Text must contain<br/> atleast 3 characters.";
  return;
};
