
function geo_ok(position){

    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    const city = document.querySelector("#city");

    const weather = document.querySelector(".weather");
    const weatherData = document.querySelector(".weather #weatherData");
    const temperature = document.querySelector("#temperature");
    const humidity = document.querySelector("#humidity");

    
    const API_KEY = "15da57b712f9511bf132177814f37273";
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const inName = data.name;
        const inWeather = data.weather[0].main;
        const weatherIcon = data.weather[0].icon;
        const iconUrl = `http://openweathermap.org/img/wn/${weatherIcon}.png`
        const inHumidity = data.main.humidity;
        const inTemperature = data.main.temp;

        city.innerText = inName;
        weatherData.innerText = inWeather;
        temperature.innerText = `${inTemperature} ℃` ;
        humidity.innerText = `${inHumidity} %`;

        const imgTag = document.createElement("img");
        imgTag.src = iconUrl;
        imgTag.width = 30;
        imgTag.height = 30;
        weather.appendChild(imgTag);
        
    });

    
}

function geo_err(){
    alert("Can't find you");
}


navigator.geolocation.getCurrentPosition(geo_ok, geo_err);