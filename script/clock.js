
const clock = document.querySelector("h2#clock");
const date = document.querySelector("h2#date");

const monthList = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const week = ["Sunday", "Monday", "Tuesday", "Wedsday", "Thursday", "Friday", "Saturday"];
function getClock(){
    currentTime = new Date();

    const weekDay = week[currentTime.getDay()];
    const year = String(currentTime.getFullYear());
    const month = monthList[currentTime.getMonth()];
    const day = String(currentTime.getDate());
    const hour =String(currentTime.getHours()).padStart(2, "0");
    const min = String(currentTime.getMinutes()).padStart(2, "0");
    const sec = String(currentTime.getSeconds()).padStart(2, "0");

    date.innerText = `${weekDay}, ${day}. ${month}. ${year}`;
    clock.innerText = `${hour}:${min}:${sec}`;

    
}

getClock();
setInterval(getClock, 1000);
