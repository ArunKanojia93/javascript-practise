export const question25 = () => {
  const number = (document.getElementById("q25") as HTMLInputElement).value;

  if (!number || parseInt(number) <= 0) {
    document.getElementById("question-25")!.innerHTML =
      "Please enter a number<br/> greater than 0.";
    return;
  } else if (
    Math.abs(parseInt(number)) % 3 === 0 &&
    Math.abs(parseInt(number)) % 7 === 0
  ) {
    document.getElementById(
      "question-25"
    )!.innerHTML = `${number} is a multiple of<br/> both 3 & 7.`;
    return;
  } else if (Math.abs(parseInt(number)) % 7 === 0) {
    document.getElementById(
      "question-25"
    )!.innerHTML = `${number} is a multiple of 7.`;
    return;
  } else if (Math.abs(parseInt(number)) % 3 === 0) {
    document.getElementById(
      "question-25"
    )!.innerHTML = `${number} is a multiple of 3.`;
    return;
  } else {
    document.getElementById("question-25")!.innerHTML = "FALSE";
  }
};
