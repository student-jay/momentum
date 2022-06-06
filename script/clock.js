
const clock = document.querySelector("#clock");


function getClock(){
    currentTime = new Date();
    const hour =String(currentTime.getHours()).padStart(2, "0");
    const min = String(currentTime.getMinutes()).padStart(2, "0");
    const sec = String(currentTime.getSeconds()).padStart(2, "0");

    clock.innerText = `${hour}:${min}:${sec}`;
}

getClock();
setInterval(getClock, 1000);
