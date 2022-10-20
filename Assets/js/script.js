var weatherDash = "http://api.weatherbit.io/v2.0/";
//var APIKey = "ae31887480a74349b553027bfaa5c134";
var APIKey = "4844c08e191942d7a4145e4eef190f2e"; //my key expired so I had to create a new one

//create clickable search button that triggers function
var showSearchBtn = document.getElementById('searchBtn');
showSearchBtn.addEventListener("click", getWeather);

function getWeather(response) {
    let nameOfCity = document.getElementById('searchBar').value;
    console.log(nameOfCity); //verify the search is working

    //link to grab weatherbit.io data for given city
    var weatherDash =
        "http://api.weatherbit.io/v2.0/forecast/daily?city=" +
        nameOfCity +
        "&units=I" +
        "&days=5" +
        "&key=" +
        APIKey;
       
        //fetches resource from server link above
        fetch(weatherDash)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);//using th raw data to grab info needed
            var oneDay = "";
            var fiveDay = "";
            data.data.forEach((value, index) => {
                value = 5;
                //we need to loop through the 5 days, and store them
                //use iterated index to get each days information
                if (index < value) {
                    //converting the date so that it says the day of the week as well
                    const weekDay = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday", "Sunday"];
                    var day = new Date(data.data[index].datetime);
                    let currentDay = weekDay[day.getDay()];
                    //console.log(currentDay);
                    var currentDate = data.data[index].datetime;
                    //console.log(currentDate);
                    var currentIcon = data.data[index].weather.icon;
                    //console.log(currentIcon);
                    var currentDesc = data.data[index].weather.description;
                    var currentTemp = data.data[index].temp;
                    //console.log(currentTemp);
                    var currentHumidity = data.data[index].rh;
                    //console.log(currentHumidity);
                    var currentWind = data.data[index].wind_spd;
                    //console.log(currentWind);

                    //create new HTML elements to hold all of the new information stored above
                    fiveDay += `<div id="forecastDates">
                                <p id="day">${currentDay}</p>
                                <p>${currentDate}</p>
                                <img src="./Assets/icons/${currentIcon}.png"></img>
                                <div id="forecastDesc">${currentDesc}</div>
                                <p>
                                <div id="forecastTemp">Temperature: ${currentTemp}<sup>˚C</sup></div>
                                <p>
                                <div id="forecastRH">Relative Humidity: ${currentHumidity}<sup>%</sup></div>
                                <p>
                                <div id="forecastWind">Wind: ${currentWind}<sup>mph</sup></div>
                               </div>`;
                };
            });
            //create new HTML elements for current days information
            oneDay += `<div id="forecastDates">
                                <p>Today's Forecast</p>
                                <img src="./Assets/icons/${data.data[0].weather.icon}.png"></img>
                                <div id="forecastDesc">${data.data[0].weather.description}</div>
                                <p>
                                <div id="forecastTemp">Temperature: ${data.data[0].temp}<sup>˚C</sup></div>
                                <p>
                                <div id="forecastRH">Relative Humidity: ${data.data[0].rh}<sup>%</sup></div>
                                <p>
                                <div id="forecastWind">Wind: ${data.data[0].wind_spd}<sup>mph</sup></div>
                                <p>
                                </div>`
            //print the new HTML elements to webpage
            document.getElementById("todayForecast").innerHTML = oneDay;
            document.getElementById("forecast").innerHTML = fiveDay;
        });
        //console.log(response);
    }