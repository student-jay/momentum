

function handleInputForm(event){
    event.preventDefault();
    
    ul = document.querySelector("#todoList")
    
    // Getting text from input tag and assign to li element
    const task = {"task": todoInput.value, "id":Date.now()};
    taskList.push(task);
    
    // Save to localstorage
    saveTaskListToStorage();
    paintTask(task);
    todoInput.value = "";

    
}

function saveTaskListToStorage(){
    localStorage.setItem("task", JSON.stringify(taskList));
}

function handleDeleteBtn(event){

    pNode = event.target.parentElement;
    pNode.remove();
    
    // Caution :: pNode Type is Stirng. So, if we remove the task, we have to change pNode Type
    taskList = taskList.filter(task => task.id !== parseInt(pNode.id));

    // Save to localstorage
    saveTaskListToStorage();
    
    
    
}

function paintTask(task){
    ul = document.querySelector("#todoList")
    
    li = document.createElement("li");    
    li.innerText = task.task;
    li.id = task.id;

    button = document.createElement("button");
    button.innerText = "x";
    li.appendChild(button);
    ul.appendChild(li);

    button.addEventListener("click", handleDeleteBtn);
}


const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
let taskList = [];

todoForm.addEventListener("submit", handleInputForm);

if (localStorage.getItem("task") !== null){
    const taskListFromStorage = JSON.parse(localStorage.getItem("task"));
    taskListFromStorage.forEach(element => taskList.push(element));
    taskListFromStorage.forEach(element => paintTask(element));

}
