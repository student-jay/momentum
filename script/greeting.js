
const loginform = document.querySelector("#loginform");
const loginformInput = document.querySelector("#loginform input");
const leftFrame = document.querySelector(".main-left");
const rightFrame = document.querySelector(".main-right");


const CLS_HIDDEN="hidden";
const KEY_USERNAME = "USERNAME";

function onClickSubmit(event){
    //Stop default action of event
    event.preventDefault();
    
    // Get user name from < html - form >
    const userName = loginformInput.value;
    loginform.classList.add(CLS_HIDDEN);
    leftFrame.classList.remove(CLS_HIDDEN);
    rightFrame.classList.remove(CLS_HIDDEN);
    //User name is set to storage 
    localStorage.setItem(KEY_USERNAME, userName);
    greeting(userName);
}

function greeting(userName){
    //Just say hello
    greeting = document.querySelector("#username");
    greeting.innerText=`${userName}`;
}

// get user name form mappped key value
savedUserName = localStorage.getItem(KEY_USERNAME);

if(savedUserName === null){
    loginform.classList.remove(CLS_HIDDEN);
    leftFrame.classList.add(CLS_HIDDEN);
    rightFrame.classList.add(CLS_HIDDEN);
    loginform.addEventListener("submit", onClickSubmit);
}
else{
    greeting(savedUserName);
}


