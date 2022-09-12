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
      if(todos[i].status === "completed"){

        listItems += ` <li class="${todos[i].status}"> 
        <input type="checkbox" checked class="check" id="${i}" onclick="chcekTodo(this)" />
         ${todos[i].value} 
        </li> `;
      }else{
        listItems += ` <li class="${todos[i].status}"> 
        <input type="checkbox" class="check" id="${i}" onclick="chcekTodo(this)" />
         ${todos[i].value} 
        </li> `;
      }
      
    }
    itemsEl.innerHTML = listItems;
  }
}

inputEl.addEventListener("keydown", function (e) {
  inputEl.classList.remove("error");
  const content = inputEl.value.trim();

  if (e.key === "Enter" && content && myTodos.length <= 10) {
    myTodos.push({ value: content, status: "pending" });
    localStorage.setItem("myTodos", JSON.stringify(myTodos));
    inputEl.value = "";
    render(myTodos);

    pndgEl.classList.remove("selected");
    cmpltEl.classList.remove("selected");
    allEl.classList.add("selected");

  } else if (e.key === "Enter") {
    inputEl.classList.add("error");
  }
});

allEl.addEventListener("click", function () {
  pndgEl.classList.remove("selected");
  cmpltEl.classList.remove("selected");
  allEl.classList.add("selected");
  render(myTodos);
});

pndgEl.addEventListener("click", function () {
  let pendingTodos = [];

  allEl.classList.remove("selected");
  cmpltEl.classList.remove("selected");
  pndgEl.classList.add("selected");

  myTodos.forEach((todo) => {
    if (todo.status === "pending") pendingTodos.push(todo);
  });
  render(pendingTodos);
});

cmpltEl.addEventListener("click", function () {
  let compledtedTodos = [];

  pndgEl.classList.remove("selected");
  allEl.classList.remove("selected");
  cmpltEl.classList.add("selected");

  myTodos.forEach((todo) => {
    if (todo.status === "completed") compledtedTodos.push(todo);
  });
  render(compledtedTodos);

  // const checkBox = document.querySelectorAll('.check');
  // checkBox.forEach( ele => {
  //     ele.setAttribute("checked",true);
  // });

});

function chcekTodo(selectedTodo) {
  let id = selectedTodo.getAttribute("id");

  if (myTodos[id].status === "pending") {
    myTodos[id].status = "completed";

    localStorage.setItem("myTodos", JSON.stringify(myTodos));
    // render(myTodos);
    // console.log(myTodos);
  }
}

clrBtnEl.addEventListener("click", function () {
  localStorage.clear();
  myTodos = [];
  render(myTodos);
});
