let myTodos = [];
let pendingTodos = [];
let completedTodos = [];
const inputEl = document.getElementById("input-el");
// const chkBoxEl = document.getElementById("chk-box-el");
const inptBtnEl = document.getElementById("inpt-btn-el");
const allEl = document.getElementById("all-el");
const pndgEl = document.getElementById("pndg-el");
const cmpltEl = document.getElementById("cmplt-el");
const clrBtnEl = document.getElementById("clr-btn-el");
// const moreEl = document.getElementById("more-el");
const itemsEl = document.getElementById("items-el");

const todosFromLocalStorage = JSON.parse(localStorage.getItem("myTodos"));
const pendingTodosFromLocalStorage = JSON.parse(
  localStorage.getItem("pendingTodos")
);
const completedTodosFromLocalStorage = JSON.parse(
  localStorage.getItem("compledTodos")
);

if (todosFromLocalStorage) {
  myTodos = todosFromLocalStorage;
  render(myTodos);
}

if (pendingTodosFromLocalStorage) {
  pendingTodos = pendingTodosFromLocalStorage;
}

if (completedTodosFromLocalStorage) {
  completedTodos = completedTodosFromLocalStorage;
}

function render(todos) {
  if (!todos) {
    itemsEl.innerHTML = "<li>No items to display!</li>";
  } else {
    let listItems = "";

    for (let i = 0; i < todos.length; i++) {
      listItems += `<li data-id="${i}"> <input onclick="checkTodo(this)" type="checkbox" id="${i}">
       ${todos[i]}  <span>...</span></li>`;
    }
    itemsEl.innerHTML = listItems;
  }
}

inptBtnEl.addEventListener("click", function () {
  if (inputEl.value) {
    myTodos.push(inputEl.value);
    pendingTodos.push(inputEl.value);
    localStorage.setItem("myTodos", JSON.stringify(myTodos));
    localStorage.setItem("pendingTodos", JSON.stringify(pendingTodos));
    inputEl.value = "";
    render(myTodos);
  }
});

allEl.addEventListener("click", function () {
  render(myTodos);
});

pndgEl.addEventListener("click", function () {
  render(pendingTodos);
});

cmpltEl.addEventListener("click", function () {
  render(completedTodos);
});

// chkBoxEl.addEventListener("click", function () {
//   console.log(this);

//   const id = this.getAttribute("data-id");

//   completedTodos.push(pendingTodos[id]);
//   pendingTodos.splice(id,1);
// });

function checkTodo(selectedTodo) {
  // console.log(selectedTodo);
  let id = selectedTodo.getAttribute("id");
  console.log(id);
  completedTodos.push(pendingTodos[id]);
  pendingTodos[id].splice(id,1);
  localStorage.setItem("compledTodos", JSON.stringify(completedTodos));
  localStorage.setItem("pendingTodos", JSON.stringify(pendingTodos));

}

clrBtnEl.addEventListener("click", function () {
  localStorage.clear();
  myTodos = [];
  pendingTodos = [];
  completedTodos = [];
  render(myTodos);
});
