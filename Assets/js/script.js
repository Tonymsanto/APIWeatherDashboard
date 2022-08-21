var weatherDash = "http://api.weatherbit.io/v2.0/";
var APIKey = "ae31887480a74349b553027bfaa5c134";
var cityName = document.getElementById(cityName);
var currentDate = document.getElementById (currentDate);
var weatherIcon = document.getElementById (weatherIcon);
var currentTemp = document.getElementById (currentTemp);
var currentHumidity = document.getElementById (currentHumidity);
var currentWindSpeed = document.getElementById (currentWindSpeed);
var currentUVIndex = document.getElementById (currentUVIndex);

showSearchBtn.addEventListener("click", showWeather)

let nameOfCity = document.getElementById('searchBar').value;
console.log(nameOfCity);


function getWeather (response) {
    var weatherDash = 
        "http://api.weatherbit.io/v2.0/forecast/daily?city=" +
        nameOfCity +
        "&units=I" +
        "&days=5" +
        "&key=" +
        APIKey;
    fetch(weatherDash)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {

        })

}
