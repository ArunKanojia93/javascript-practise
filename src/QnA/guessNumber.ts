export const guessNumber = () => {
  const num = Math.ceil(Math.random() * 10).toString();
  console.log(num);
  const inputNum = prompt("Guess the number between 1 and 10.");
  if (num === inputNum) {
    document.getElementById("guess-num")!.textContent = "Good Work";
  } else {
    document.getElementById(
      "guess-num"
    )!.textContent = `Not matched, the number was ${num}`;
  }
};
