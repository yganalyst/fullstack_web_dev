let paragraphElement = document.querySelector("p");
let n = 1;
function changeParagraphText() {
  paragraphElement.textContent = "Clicked!" + n.toString();
  n += 1;
}

paragraphElement.addEventListener("click", changeParagraphText);

let inputElement = document.querySelector("input");

function retrieveUserInput(event) {
//   let enteredText = inputElement.value;
//   let enteredText = event.taret.value;
//   let enteredText = event.data; 
//   console.log(enteredText);
  console.log(event);
}

inputElement.addEventListener("input", retrieveUserInput);
