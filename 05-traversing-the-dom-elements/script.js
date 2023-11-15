let output;
//? get first child
const container = document.querySelector(".container");
const parent = document.querySelector(".parent");

const firstChild = parent.firstElementChild;
const scndsibling = firstChild.nextElementSibling;
const prevSibling = scndsibling.previousElementSibling;

output = prevSibling.innerText;

console.dir(output);
