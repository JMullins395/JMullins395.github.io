var user_loc = ''

$(document).ready(function() {
    $('#rand-user').click(function() {
        $.ajax({
            dataType: "json",
            url: "https://randomuser.me/api/",
            success: function(results) {
                console.log(results);
                var user = results.results[0];
                user_loc = user.location.country;
                console.log('User country: ', user_loc)
                // Add post-test logic here
            },
            error: function(xhr,status,error) {
                console.log(error);
            }
        })
    })
})

$(document).ready(function() {
    $('#country-stuff').click(function() {
        if (user_loc == '') {
            console.log('Please get a user first.');
            return;
        }

        countryUrl = 'https://restcountries.com/v3.1/name/' + encodeURIComponent(user_loc.trim());

        $.ajax({
            dataType: "json",
            url: countryUrl,
            success: function(results) {
                console.log(results);
                // add logic if test
            },
            error: function(xhr,status,error) {
                console.log(error);
            }
        });
    });
})
