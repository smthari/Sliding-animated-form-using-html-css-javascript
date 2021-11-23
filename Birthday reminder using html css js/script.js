// object for storing a todoos items in array for localstorage
let todoItems = [];

function renderTodo(todo) {
  /* set item to localStorage to store data */
  localStorage.setItem("todoItems", JSON.stringify(todoItems));

  // selecting the list where we will appending a all node items
  const list = document.querySelector(".People_list");

  // creating new element article
  const node = document.createElement("article");
  node.setAttribute("class", "person"); // setting attribute class:"person"
  // adding a image name and dob in article element
  // we can access the todoobject items with todo.objectitem because we rendered a todoobject in rendertodo function as a parameter
  node.innerHTML = `
<img src="${todo.imageurl}">
<div class="tododetail">
<h1>${todo.name}</h1>
<p>${todo.dob}</p>
</div>
<button class="delete-todo js-delete-todo">
    <button class="delete-todo js-delete-todo">
        <svg fill="var(--svgcolor)" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
        </svg>
    </button>
`;
  // appending a node in list
  list.append(node);
}

// function for adding todo
function addTodo(name, dob, imageurl) {
  const todoobject = {
    name: document.getElementById("fullName").value,
    dob: document.getElementById("myDate").value,
    imageurl: document.getElementById("imgurl").value,
  };

  // push a todoobject in todoItems array for store a data as a array in localstorage
  todoItems.push(todoobject);
  // console.log(todoItems);
  // rendering todoobject in renderTodo function as a prameter
  renderTodo(todoobject);
}

// add a event listner submit to the form
const form = document.querySelector(".js-form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  // when the form is submitted addTodo function is called
  addTodo();
});

// adding a add event listner when content is loaded and showing stored data array on the screen
document.addEventListener("DOMContentLoaded", () => {
  const ref = localStorage.getItem("todoItems");
  if (ref) {
    todoItems = JSON.parse(ref);
    todoItems.forEach((t) => {
      renderTodo(t);
    });
  }
});
