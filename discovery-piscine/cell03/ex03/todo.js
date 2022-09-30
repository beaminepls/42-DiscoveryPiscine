var listContainer;
var taskArr = [];

function newElement(){
    let todoText = prompt("Enter Task: ");
    if (todoText != "")
    {
        createTask(todoText);
        saveTodos();
        console.log("Added Task");
    }
}

function createTask(todoText){
    let newTask = document.createElement("div");
    newTask.classList.add("task");
    newTask.addEventListener("click", removeElement);
    let taskContent = document.createTextNode(todoText);
    newTask.appendChild(taskContent);
    listContainer.prepend(newTask);
}

function saveTodos(){
    const savedTodo = [];
    for (const element of listContainer.children){
        savedTodo.push(element.textContent);
    }
    localStorage.setItem("todoItem", JSON.stringify(savedTodo));
}

function removeElement(){
    let isConfirmed = confirm("Remove item?");
    if (isConfirmed){
        this.remove();
        saveTodos();
    }
}

window.onload = () => {
    listContainer = document.getElementById("ft_list");
    const saveTodo = JSON.parse(localStorage.getItem("todoItem")) || [];
    for (let i = saveTodo.length - 1; i >= 0; i--){
        createTask(saveTodo[i]);
    }
}