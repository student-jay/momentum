
const clock = document.querySelector("h2#clock");
const date = document.querySelector("h2#date");

function getClock(){
    currentTime = new Date();

    const year = String(currentTime.getFullYear());
    const month = String(currentTime.getMonth());
    const day = String(currentTime.getDay());
    const hour =String(currentTime.getHours()).padStart(2, "0");
    const min = String(currentTime.getMinutes()).padStart(2, "0");
    const sec = String(currentTime.getSeconds()).padStart(2, "0");

    date.innerText = `${day}. ${month}. ${year}`;
    clock.innerText = `${hour}:${min}:${sec}`;

    
}

getClock();
setInterval(getClock, 1000);
