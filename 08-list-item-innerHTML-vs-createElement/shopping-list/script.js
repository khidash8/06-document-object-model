const parent = document.querySelector(".items");

//! Dirty and quick
function createDirtyElement(item) {
  const list = document.createElement("li");
  list.innerHTML = `${item}<button class="remove-item btn-link text-red">
  <i class="fa-solid fa-xmark"></i>
</button>`;

  parent.appendChild(list);
}

// createDirtyElement("mango");

//! clean and performant
function createNewElement(item) {
  const li = document.createElement("li");
  const liText = document.createTextNode(item);
  li.appendChild(liText);

  const btn = document.createElement("button");
  btn.className = "remove-item btn-link text-red";
  li.appendChild(btn);

  const icon = document.createElement("i");
  icon.className = "fa-solid fa-xmark";
  btn.appendChild(icon);

  parent.appendChild(li);
}

createNewElement("mangoos");
createNewElement("mango");
createNewElement("orange");
