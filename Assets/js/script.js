var weatherDash = "http://api.weatherbit.io/v2.0/";
//var APIKey = "ae31887480a74349b553027bfaa5c134";
var APIKey = "4844c08e191942d7a4145e4eef190f2e";

var showSearchBtn = document.getElementById('searchBtn');
showSearchBtn.addEventListener("click", getWeather);

function getWeather(response) {
    let nameOfCity = document.getElementById('searchBar').value;
    console.log(nameOfCity);
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
            console.log(data);
            var fiveDay = "";
            data.data.forEach((value, index) => {
                value = 5;

                if (index < value) {
                    var currentDate = data.data[index].datetime;
                    //console.log(currentDate);
                    var currentTemp = data.data[index].temp;
                    //console.log(currentTemp);
                    var currentHumidity = data.data[index].rh;
                    //console.log(currentHumidity);
                    var currentWind = data.data[index].wind_spd;
                    //console.log(currentWind);
                    var currentUVIndex = data.data[index].uv;
                    //console.log(currentUVIndex);

                    fiveDay += `<div id="forecastDates">
                                <p>${currentDate}</p>
                                <div id="forecastTemp">Temperature: ${currentTemp}<sup>˚C</sup></div>
                                <p>
                                <div id="forecastRH">Relative Humidity: ${currentHumidity}<sup>%</sup></div>
                                <p>
                                <div id="forecastWind">Wind: ${currentWind}<sup>mph</sup></div>
                                <p>
                                <div id="forecastUV">UV Index: ${currentUVIndex}</div>
                               </div>`;
                };
            });
            document.getElementById("forecast").innerHTML = fiveDay;
        });
        console.log(response);
    }