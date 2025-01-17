const apiKey = "bacc63313618bf31af6e34a7ffaf929d";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data);
   

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/images/clouds.png";
    }
   else if(data.weather[0].main == "Clear"){
         weatherIcon.src = "images/images/clear.png";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "images/images/rain.png";
   }
   else if(data.weather[0].main == "Drizzle"){
    weatherIcon.src = "images/images/drizzle.png";
   }
else if(data.weather[0].main == "Mist"){
    weatherIcon.src = "images/images/mist.png";
}
} 

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})
