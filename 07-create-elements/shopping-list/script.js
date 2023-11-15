//? create a list element
const listItem = document.createElement("li");
const parent = document.querySelector(".items");

// listItem.className = "items";
// listItem.id = "item-list";

listItem.innerText = "hello";

parent.appendChild(listItem);
