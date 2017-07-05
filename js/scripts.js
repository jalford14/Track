$(document).ready(function() {
    
    one();
    $(".form-style-5").hide().fadeIn();
    $("#loader").hide();
});
function one() {
        $("#title")
        .hide()
        .slideDown(750)
        .animate(
        { opacity: 1 },
        { queue: false, duration: 'slow' }
    )
    two();
}

function two () {
    $("#line").animate({width: "500"}, 750);
}



// Docs at http://simpleweatherjs.com

/* Does your browser support geolocation? */
if ("geolocation" in navigator) {
  $("#current_weather").show(); 
} else {
  $("#current_weather").hide();
}

/* Where in the world are you? */
$("#current_weather").on('click', function() {
  navigator.geolocation.getCurrentPosition(function(position) {
    loadWeather(position.coords.latitude+','+position.coords.longitude); //load weather using your lat/lng coordinates
  });
});

/* 
* Test Locations
* Austin lat/long: 30.2676,-97.74298
* Austin WOEID: 2357536
*/
$(document).ready(function() {
  //loadWeather('Seattle',''); //@params location, woeid
});

$("#current_weather").click(function() {
  loadWeather('','');
})
  function loadWeather(location, woeid) {
    $("#loader").show();
    $.simpleWeather({
      location: location,
      woeid: woeid,
      unit: 'f',
      success: function(weather) {
        $("#temp").val(weather.temp);
        $("#humidity").val(weather.humidity);
        $("#loader").hide();
      },
      error: function(error) {
        $("#current_weather").html('<p>'+error+'</p>');
      }
    });
  }




$("#submit").click(function () {
  $("#body").append('<div id="container"> <p>Miles</p> <p>Miles</p> <p>Miles</p> <img src="images/edit_icon.png"> </div>');
  // Preventing default action of the event
  event.preventDefault();
  // Getting the height of the document
  var n = $(document).height();
  $('html, body').animate({ scrollTop: n }, 500);
});
    


//Function to get Date
var d = new Date();

var month = d.getMonth()+1;
var day = d.getDate();

var output = ((''+month).length<2 ? '0' : '') + month + '/' +
    ((''+day).length<2 ? '0' : '') + day + '/' +
    d.getFullYear();
    

output = String(output);
$("#demo").html(output);