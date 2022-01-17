import { todoApi } from "./todoApis.js";

/*
Given an Api, implement a todo app(features includes Add a todo, Change a todo Status, Delete Todo) in Vanilla JavaScript. 
FYI: You can add some css styles you want.
*/

//implement your app here
let add = document.querySelector("form button");
let div = document.querySelector("div");
add.addEventListener("click", (e) => {
  let form = e.target.parentElement;
  e.preventDefault();
  let todo_value = form.children[0].value;
  todoApi.addTodo({ content: todo_value, isCompleted: false });
  let index = todoApi.todos.length;
  console.log(index);
  //create todo
  let todo = document.createElement("ul");
  todo.classList.add("todo");
  let text = document.createElement("li");
  text.classList.add("todo-text");
  text.innerText = todo_value;
  todo.appendChild(text);
  text.addEventListener("click", (e) => {
    text.classList.toggle("done");
  });

  let deleteButton = document.createElement("button");
  deleteButton.classList.add("delete");
  deleteButton.innerText = "delete Todo";
  todo.appendChild(deleteButton);
  deleteButton.addEventListener("click", (e) => {
    todoApi.delTodo(index);
    let ele = e.target.parentElement;
    ele.remove();
  });

  div.appendChild(todo);
});
