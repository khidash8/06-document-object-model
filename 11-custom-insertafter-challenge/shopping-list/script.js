function createIcon() {
  const icon = document.createElement("i");
  icon.className = "fa-solid fa-xmark";
  icon.style.color = "red";
  return icon;
}

//? insertAfter function
function insertAfter(newElement, existingElement) {
  existingElement.parentNode.insertBefore(
    newElement,
    existingElement.nextElementSibling
  );

  newElement.appendChild(createIcon());
}

// New element to insert
const li = document.createElement("li");
li.textContent = "Insert Me After!";

// Existing element to insert after
const firstItem = document.querySelector("li:first-child");

// Our custom function
insertAfter(li, firstItem);
