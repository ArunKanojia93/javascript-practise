export const rotate = () => {
  setInterval(rotateString, 200);

  const word = "w3resource ";
  const newArray = word.split("");

  function rotateString() {
    const letter = newArray.pop() as string;
    newArray.unshift(letter);
    const theWord = newArray.join("");
    document.getElementById("rotate")!.innerHTML = theWord;
  }
};

// function animate_string(id)
// {
//     var element = document.getElementById(id);
//     var textNode = element.childNodes[0]; // assuming no other children
//     var text = textNode.data;

// setInterval(function ()
// {
//  text = text[text.length - 1] + text.substring(0, text.length - 1);
//   textNode.data = text;
// }, 100);
// }
