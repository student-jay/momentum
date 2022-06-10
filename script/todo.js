

function handleInputForm(event){
    event.preventDefault();
    
    ul = document.querySelector("#todoList")
    
    // Getting text from input tag and assign to li element
    const task = todoInput.value;
    li = document.createElement("li");    
    li.innerText = task;
    ul.appendChild(li);

    todoInput.value = "";

}



const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");

todoForm.addEventListener("submit", handleInputForm);

