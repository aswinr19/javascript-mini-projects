let myTodos = [];
const inputEl = document.getElementById("input-el");
const allEl = document.getElementById("all-el");
const pndgEl = document.getElementById("pndg-el");
const cmpltEl = document.getElementById("cmplt-el");
const clrBtnEl = document.getElementById("clr-btn-el");
const itemsEl = document.getElementById("items-el");

const todosFromLocalStorage = JSON.parse(localStorage.getItem("myTodos"));

if (todosFromLocalStorage) {
  myTodos = todosFromLocalStorage;
  render(myTodos);
}

function render(todos) {
  if (todos) {
    let listItems = "";

    for (let i = 0; i < todos.length; i++) {
      listItems += ` <li class="${todos[i].status}"> 
       <input type="checkbox" class="check" id="${i}" onclick="chcekTodo(this)" />
        ${todos[i].value} 
       </li> `;
    }
    itemsEl.innerHTML = listItems;
  } 
}

inputEl.addEventListener("keydown", function (e) {
  const content = inputEl.value.trim();

  if (e.key === "Enter" && content) {
    myTodos.push({ value: content, status: "pending" });
    localStorage.setItem("myTodos", JSON.stringify(myTodos));
    inputEl.value = "";
    render(myTodos);
  }
});

allEl.addEventListener("click", function () {
  render(myTodos);
});

pndgEl.addEventListener("click", function () {
  let pendingTodos = [];

  myTodos.forEach((todo) => {
    if (todo.status === "pending") pendingTodos.push(todo);
  });
  render(pendingTodos);
});

cmpltEl.addEventListener("click", function () {
  let compledtedTodos = [];

  myTodos.forEach((todo) => {
    if (todo.status === "completed") compledtedTodos.push(todo);
  });
  render(compledtedTodos);
});

function chcekTodo(selectedTodo) {
  let id = selectedTodo.getAttribute("id");

  if (myTodos[id].status === "pending") {
    myTodos[id].status = "completed";

    localStorage.setItem("myTodos", JSON.stringify(myTodos));
    render(myTodos);
    // console.log(myTodos);
  }
}

clrBtnEl.addEventListener("click", function () {
  localStorage.clear();
  myTodos = [];
  render(myTodos);
});
