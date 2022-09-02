let myTodos = [];
const inputEl = document.getElementById("input-el");
const chkInputEl = document.getElementById("chk-btn-el");
const inptBtnEl = document.getElementById("inpt-btn-el");
const AllEl = document.getElementById("all-el");
const pndgEl = document.getElementById("pndg-el");
const cmpltEl = document.getElementById("cmplt-el");
const clrBtnEl = document.getElementById("clr-btn-el");
const moreEl = document.getElementById("more-el");
const itemsEl = document.getElementById("items-el");

const todosFromLocalStorage = JSON.parse(localStorage.getItem("myTodos"));

if (todosFromLocalStorage) {
  myTodos = todosFromLocalStorage;
  render(myTodos);
}

function render(todos) {
  let listItems = "";

  for (let i = 0; i < todos.length; i++) {
    listItems += `<li> <input id="chk-btn-el" type="checkbox"> ${todos[i]}  <span id="more-el">...</span></li>`;
  }
  itemsEl.innerHTML = listItems;
}

inptBtnEl.addEventListener("click", function () {
  if (inputEl.value) {
    myTodos.push(inputEl.value);
    localStorage.setItem("myTodos", JSON.stringify(myTodos));
    inputEl.value = "";
    render(myTodos);
  }
});

clrBtnEl.addEventListener("click", function () {
  localStorage.clear();
  myTodos = [];
  render(myTodos);
});
