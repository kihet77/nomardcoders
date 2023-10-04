const toDoForm = document.getElementById("todo-form")
const toDoInput = toDoForm.querySelector("input")
const toDoList = document.getElementById("todo-list")

let toDos = [];

const toDoskey = "todos"

function saveToDos(){
    localStorage.setItem(toDoskey, JSON.stringify(toDos))
}

function deletToDo(event) {
    const li = event.target.parentNode;
    li.remove()
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id))
    saveToDos()
}


function paintToDo(newTodo){
    const li = document.createElement("li")
    li.id =newTodo.id
    const span = document.createElement("span")
    span.innerText = newTodo.text
    const button = document.createElement("button")
    button.innerText = "🌹"
    button.addEventListener("click", deletToDo)
    li.appendChild(span)
    li.appendChild(button)
    toDoList.appendChild(li)
}



function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value
    toDoInput.value="";
    const newTodoObj={
        text: newTodo,
        id: Date.now(),
    }
    toDos.push(newTodoObj)
    paintToDo(newTodoObj)
    saveToDos()
}

toDoForm.addEventListener("submit", handleToDoSubmit)

const savedToDos = localStorage.getItem(toDoskey)
if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos
    parsedToDos.forEach(paintToDo);
}


