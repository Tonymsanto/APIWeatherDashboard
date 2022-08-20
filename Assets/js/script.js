

function getAPI() {
    var weather = "http://api.weatherbit.io/v2.0/";

    fetch(weather)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log (data);
            for (var i = 0; i < data.length; i++) {
                var userName = document.createElement('')

            }
            
        })
}