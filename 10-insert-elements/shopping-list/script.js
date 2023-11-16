//? insertAdjacentElement Example
function adjacentElement() {
  const filter = document.querySelector(".filter");
  const head = document.createElement("h1");
  head.textContent = "blaah";
  filter.insertAdjacentElement("beforeend", head);
}

// adjacentElement();

//? insertAdjacentText Example
function adjacentText() {
  const filter = document.querySelector(".filter");
  filter.insertAdjacentText("beforebegin", "Hello");
}

// adjacentText();

//? insertAdjacentHTML example
function adjacentHtml() {
  const filter = document.querySelector(".filter");

  filter.insertAdjacentHTML("beforeend", "<button>Clear All</button>");
}

// adjacentHtml();

//? insertBefore Example (must have parent element)
function insertBefore() {
  const ul = document.querySelector(".items");
  const li = document.createElement("li");
  li.append(document.createTextNode("Before"));

  const firstLi = ul.firstElementChild;
  const secondLi = firstLi.nextElementSibling;

  ul.insertBefore(li, secondLi);
}

insertBefore();

/*
<!-- beforebegin -->
<p>
  <!-- afterbegin -->
  foo
  <!-- beforeend -->
</p>
<!-- afterend -->
*/
