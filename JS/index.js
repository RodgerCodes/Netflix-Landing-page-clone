const tabitems = document.querySelectorAll(".tab-item");

const tabcontentitems = document.querySelectorAll(".tab-content-item");

function selectItem() {
  removeborder();
  removeShow();

  this.classList.add("tab-border");

  const tabcontentitem = document.querySelector(`#${this.id}-content`);

  tabcontentitem.classList.add("show");
}

function removeborder() {
  tabitems.forEach(items => items.classList.remove("tab-border"));
}

function removeShow() {
  tabcontentitems.forEach(items => items.classList.remove("show"));
}

tabitems.forEach(items => items.addEventListener("click", selectItem));
