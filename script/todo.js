

function handleInputForm(event){
    event.preventDefault();
    
    ul = document.querySelector("#todoList")
    
    // Getting text from input tag and assign to li element
    const task = {"task": todoInput.value, "id":Date.now()};
    taskList.push(task);
    
    // Save to localstorage
    const taskToArrayString = JSON.stringify(taskList);
    localStorage.setItem("task", taskToArrayString);
    paintTask(task);
    todoInput.value = "";

    
}

function paintTask(task){
    ul = document.querySelector("#todoList")
    
    li = document.createElement("li");    
    li.innerText = task.task;
    li.id = task.id;

    button = document.createElement("button");
    button.innerText = "x";
    li.appendChild(button);
    console.dir(button);
    ul.appendChild(li);

}


const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
let taskList = [];

todoForm.addEventListener("submit", handleInputForm);

if (localStorage.getItem("task") !== null){
    const taskListFromStorage = JSON.parse(localStorage.getItem("task"));
    taskListFromStorage.forEach(element => taskList.push(element));
    console.log(taskListFromStorage);

    taskListFromStorage.forEach(element => paintTask(element));

}
