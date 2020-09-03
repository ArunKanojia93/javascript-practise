export const question23 = () => {
  const str = (document.getElementById("q23") as HTMLInputElement).value;

  if (str.length < 1 || !str) {
    document.getElementById("question-23")!.innerHTML =
      "Text must contain<br/> atleast one character.";
    return;
  }

  if (str.length === 1) {
    document.getElementById("question-23")!.innerHTML = str;
    return;
  }

  const midStr = str.substring(1, str.length - 1);
  document.getElementById("question-23")!.innerHTML = `${str.charAt(
    str.length - 1
  )}${midStr}${str.charAt(0)}`;
  return;
};
