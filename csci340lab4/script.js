$(document).ready(function() {
    $('#open-meteo-data').click(function() {
        var lat = $('#lat-input').val();
        var lon = $('#lon-input').val();
        var apiURL = 
        $.ajax({
            dataType: "json",
            url: "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&daily=sunrise,sunset,weather_code,cloud_cover_mean,temperature_2m_max,temperature_2m_min&hourly=weather_code,cloud_cover,temperature_2m,relative_humidity_2m&current=weather_code,cloud_cover,is_day,temperature_2m&wind_speed_unit=mph&temperature_unit=fahrenheit&precipitation_unit=inch",
            success: function(results) {
                console.log(results);
            },
            error: function(xhr,status,error) {
                console.log(error);
            }
        })
    })
})

$(document).ready(function() {
    $('#iss-overhead').click(function() {
        var lat = $('#lat-input').val();
        var lon = $('#lon-input').val();
        /* var height = $('#height-input').val(); */

        var apiURL = 'https://api.open-notify.org/iss-pass.json?lat='+lat+'&lon='+lon;

        $.ajax({
            dataType: "json",
            url: apiURL,
            success: function(results) {
                console.log(results);

            },
            error: function(xhr,status,error) {
                console.log(error);
            }
        });
    });
})
