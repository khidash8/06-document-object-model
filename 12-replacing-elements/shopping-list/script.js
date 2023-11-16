//! create button and icon
function creteIcon(cls) {
  const icon = document.createElement("i");
  icon.className = cls;
  return icon;
}

function createBtn(cls = "") {
  const btn = document.createElement("button");
  btn.className = cls;

  const icon = creteIcon("fa-solid fa-xmark");
  btn.appendChild(icon);

  return btn;
}

//! 1: replaceWith()
function useReplaceWith() {
  const firstLi = document.querySelector("li:first-child");

  const li = document.createElement("li");
  li.innerHTML = "Loki";
  const btn = createBtn("remove-item btn-link text-red");
  li.appendChild(btn);

  firstLi.replaceWith(li);
}
useReplaceWith();

//! 2: outerHTML = ''
function replaceWithOuterHTML() {
  const secondLi = document.querySelector("li:nth-child(2)");

  secondLi.outerHTML = `<li>KiiD<button class="remove-item btn-link text-red"><i class="fa-solid fa-xmark"></i></button></li>`;
}

replaceWithOuterHTML();

//! 3: innerHTML = ''
function replaceWithInnerHTML() {
  const thirdLi = document.querySelector("li:nth-child(3)");
  thirdLi.innerHTML = `bublu<button class="remove-item btn-link text-red"><i class="fa-solid fa-xmark"></i></button>`;
}

replaceWithInnerHTML();

//! 4: foreach loop
//*
function replaceAllWithForEach() {
  const li = document.querySelectorAll("li");

  li.forEach((item) => {
    item.innerHTML = `hacked<button class="remove-item btn-link text-red"><i class="fa-solid fa-xmark"></i></button>`;
  });
}

replaceAllWithForEach();

//*
function replaceAllWithForEach2() {
  const li = document.querySelectorAll("li");

  li.forEach(
    (item, index) =>
      (item.innerHTML =
        index === 1
          ? `escaped<button class="remove-item btn-link text-red"><i class="fa-solid fa-xmark"></i></button>`
          : `hacked<button class="remove-item btn-link text-red"><i class="fa-solid fa-xmark"></i></button>`)
  );
}
replaceAllWithForEach2();

//! 5: replace child(a,b)
function replaceChildElemntFromParent() {
  const headParent = document.querySelector("header");

  const h1 = document.querySelector("h1");

  const h2 = document.createElement("h2");
  h2.classList.add("todo-head");
  h2.textContent = "Vallathoru Kadha";

  headParent.replaceChild(h2, h1);
}

replaceChildElemntFromParent();
