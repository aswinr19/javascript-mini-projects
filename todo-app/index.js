let myTodos = [];
const inputEl = document.getElementById("input-el");
const inptBtnEl = document.getElementById("inpt-btn-el");
const clrBtnEl = document.getElementById("clr-btn-el");
const itemsEl = document.getElementById("items-el");

const todosFromLocalStorage = JSON.parse(localStorage.getItem("myTodos"));

if (todosFromLocalStorage) {
  myTodos = todosFromLocalStorage;
  render(myTodos);
}

function render(todos) {
  let listItems = "";

  for (let i = 0; i < todos.length; i++) {
    listItems += `<li> ${todos[i]} </li>`;
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
