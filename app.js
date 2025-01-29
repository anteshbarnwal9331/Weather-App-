const cityName = document.querySelector(".city");
const date = document.querySelector(".date");
const btn = document.querySelector(".search-buuton");
const input = document.querySelector(".city-input");
const sunny = document.querySelector(".description-texts");
const temp = document.querySelector(".temperature");
const wind = document.querySelector(".wind-speed");
const humidity = document.querySelector(".humidity");
const visibility = document.querySelector(".Visibility");
const form = document.querySelector(".search-form");

async function getWeatherData (city) {
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=8HSP2LTMHFNC42GNRP9854UC9&contentType=json`);
    const data = await response.json();
    updateWeatherData(data);
}

    form.addEventListener("submit", (e)=> {
    e.preventDefault();
    const city = input.value;
    if(city!==''){
        getWeatherData(city);
        cityName.textContent = city;
    }
});

function updateWeatherData(data) {
    date.textContent = data.days[0].datetime;
    sunny.textContent = data.days[0].description;
    temp.textContent = `${Math.round(data.days[0].temp)}`;
    wind.textContent = data.days[0].windspeed + "  km/h";
    humidity.textContent = `${Math.floor(data.days[0].humidity) + "%"}`;
    visibility.textContent = data.days[0].visibility + " km/h";
};
