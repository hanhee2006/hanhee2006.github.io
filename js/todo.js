const toDoForm  = document.getElementById("todo-form")
const toDoInput = toDoForm.querySelector("input")
const toDoList = document.getElementById("todo-list")

const TODOS_KEY="todos"

let toDos = [];

function saveTodos(){
  localStorage.setItem("todos", JSON.stringify(toDos))
}

function deleteTodo(event){
  const li =event.target.parentElement
  li.remove();
  toDos= toDos.filter(toDo => toDo.id !== parseInt(li.id))
  saveTodos()
}


function paintTodo(newTodoObj){
  const li = document.createElement("li");
  li.id=newTodoObj.id
  const span =document.createElement("span");
  span.innerText = newTodoObj.text;

  const button = document.createElement("button")
  button.innerText="❌"
  li.appendChild(span);
  li.appendChild(button)
  toDoList.appendChild(li)
  button.addEventListener("click",deleteTodo)

}

function handelTodoSubmit(event){
  event.preventDefault();
  const newTodo = toDoInput.value
  toDoInput.value = "";
  const newTodoObj= {
    text:newTodo,
    id: Date.now()
  }
  toDos.push(newTodoObj)
  paintTodo(newTodoObj)
  saveTodos();
} 

toDoForm.addEventListener("submit", handelTodoSubmit)



const savedToDos = localStorage.getItem(TODOS_KEY)
// console.log(savedToDos)

if(savedToDos !== null){
  const parsedToDos=JSON.parse(savedToDos)
  toDos=parsedToDos
  parsedToDos.forEach(paintTodo);
}