$(document).ready(function() {
    
    one();
    $(".form-style-5").hide().fadeIn();
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
    /*$('#line').animate({ opacity: 1, top: "-10px" }, 'slow');*/
}



// Docs at http://simpleweatherjs.com

/* Does your browser support geolocation? */
if ("geolocation" in navigator) {
  $('.js-geolocation').show(); 
} else {
  $('.js-geolocation').hide();
}

/* Where in the world are you? */
$('.js-geolocation').on('click', function() {
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
  loadWeather('Seattle',''); //@params location, woeid
});

function loadWeather(location, woeid) {
  $.simpleWeather({
    location: location,
    woeid: woeid,
    unit: 'f',
    success: function(weather) {
      html = '<h2><i class="icon-'+weather.code+'"></i> '+weather.temp+'&deg;'+weather.units.temp+'</h2>';
      html += '<ul><li>'+weather.city+', '+weather.region+'</li>';
      html += '<li class="currently">'+weather.currently+'</li>';
      //html += '<li>'+weather.alt.temp+'&deg;C</li></ul>';
      html += '<li>'+weather.humidity+'&#37</li></ul>';  
      
      $("#weather").html(html);
    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
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