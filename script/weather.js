
function geo_ok(position){
    console.log("hello");

    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    console.dir(position);

    
    const API_KEY = "15da57b712f9511bf132177814f37273";
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const name = data.name;
        const weather = data.weather[0].main;

        console.log(name, weather);
    });

    
}

function geo_err(){
    alert("Can't find you");
}


navigator.geolocation.getCurrentPosition(geo_ok, geo_err);