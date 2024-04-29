// console.dir(document);

// document.body.children[1].children[0].href = "https://google.com";

let anchorElement = document.getElementById("external-link");
anchorElement.href = "https://google.com";

anchorElement = document.querySelector("#external-link");
anchorElement.href = "https://yganalyst.github.io";

// Add Element
// 1. Create the new element

let newAnchorElement = document.createElement("a");
newAnchorElement.href = "https://google.com";
newAnchorElement.textContent = "This leads to Google!";

// 2. Get access to the paraent element that should hold the new element.

let fristParagraph = document.querySelector("p");

// 3. Insert the new element into the parent element content.

fristParagraph.append(newAnchorElement);

// Remove Elements
// 1. Select the element that should be removed

let firstH1Element = document.querySelector("h1");

// 2. Remove it!
firstH1Element.remove();

// Move Element

fristParagraph.parentElement.append(fristParagraph);

// innerHTML

console.log(fristParagraph.innerHTML);
console.log(fristParagraph.textContent);

fristParagraph.innerHTML = "Hi! This is <strong>important!</strong>";
