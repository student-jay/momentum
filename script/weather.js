
function geo_ok(position){
    console.log("hello");

    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    console.dir(position);

    const API_KEY = "15da57b712f9511bf132177814f37273";
    const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${API_KEY}`
    fetch(url);
}

function geo_err(){
    alert("Can't find you");
}


navigator.geolocation.getCurrentPosition(geo_ok, geo_err);