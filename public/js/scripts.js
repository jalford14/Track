$(document).ready(function() {
    
    //Opening animation and general setup
    titleLoad();
    $(".form-style-5").hide().fadeIn();
    $("#loader").hide();
    $("#warning").hide();


    //Submit form
    $("#submit").click(function () {
      //Get input values
      var miles = $('input[type=miles]').val();
      if ($('#runType').val() != "Type of run") {
        var type = $('#runType').val();
      }
      else {
        type = '';
      }      
      var pace = $('input[type=pace]').val();
      var details = $('textarea#details').val();
      var temp = $('input[type=temp]').val();
      var humidity = $('input[type=humidity]').val();

      //Puts all the values in an arrary to check if it's empty
      var values = [miles, type, pace, details, humidity];
      var empty = true;

      //If an input is not empty, then we can make a summary tab
      for (i = 0; i < values.length; i++) {
        if (values[i] != '') {
          empty = false;
        }
      }

      //Scrolls down when new summary tab is created
      event.preventDefault();
      var n = $(document).height();
      $('html, body').animate({ scrollTop: n }, 500);


      //Gets date
      var d = new Date();
      var month = d.getMonth()+1;
      var day = d.getDate();
      var output = ((''+month).length<2 ? '0' : '') + month + '/' +
          ((''+day).length<2 ? '0' : '') + day + '/' +
          d.getFullYear();
      output = String(output);

      //Appends data from form to summary tabs
      if (!empty) { 
        $("#warning").slideUp("fast");
        $("#body").append('<div class="container"> </div>');
        $(".container:last-child").append('<p id="date_header">Run for: ' + output + ' <a href="#" onClick="return false;"> <img id="edit_icon" src="images/edit_icon.png" alt="Edit"> </a> </p> ');

        if (miles != '') { 
          $(".container:last-child").append('<p class ="stat_title">Miles: <p>' + miles + ' </p> </p>');
        }
        if (type != '') {
          $(".container:last-child").append('<p class ="stat_title">Type: <p>' + type + ' </p> </p>');
        }
        if (pace != '') {
          $(".container:last-child").append('<p class ="stat_title">Pace: <p>' + pace + ' </p> </p>');
        }
        if (temp != '' || humidity != '' || details != '') {
          $(".container:last-child").append('<p id="details_header"> Additional Details</p>');
        }
        if (temp != '') {
          $(".container:last-child").append('<p class="add_title">Temperature: <p class="info">' + temp + ' &#xb0;</p>');
        }
        if (humidity != '') {
          $(".container:last-child").append('<p class="add_title">Humidity: <p class="info">' + humidity + ' </p> </p>');
        }
        if (details != '') {
          $(".container:last-child").append('<p id="block"></p> <p class="add_title">Details: </p> <p id="details">' + details + ' </p>');
        }
        //Apends toggled arrows to the bottom
        $(".container:last-child").append(
          '<div id="arrow"><a  href="#" onClick="return false;">'+ 
            '<img src="images/down_arrow.png"/>'+
            '<img src="images/up_arrow.png" style="display:none"/></a>' +
          '</div>'
        );
        $(".container:last-child").find("#details_header").hide();
        $(".container:last-child").find(".add_title").hide();
        $(".container:last-child").find("#block").hide();
        $(".container:last-child").find(".info").hide();
        $(".container:last-child").find("#description").hide();
        $(".container:last-child").find("#details").hide();
      }
      else {
        $("#warning").slideDown("fast");
      }
      

      //Reset the fields 
      $("input").val('');
      $("textarea").val('');
      $("#submit").val('Apply');
      $("#current_weather").val('Use current weather?');
    });

    //Toggles between detailed view of summary tabs
    $(document).on('click', '#arrow',
    function() {
      $(this).find('img').toggle();
      $(this).parent().find('.add_title').slideToggle();
      $(this).parent().find('#block').slideToggle();
      $(this).parent().find('#details_header').slideToggle();
      $(this).parent().find('.info').slideToggle();
      $(this).parent().find('#description').slideToggle();
      $(this).parent().find('#details').slideToggle();
    });
});

//Functions that animate the title and lines.
function titleLoad() {
        $("#title")
        .hide()
        .slideDown(750)
        .animate(
        { opacity: 1 },
        { queue: false, duration: 'slow' }
    )
    lineLoad();
}

function lineLoad () {
    $("#line").animate({width: "500"}, 750);
}

//Functionality for edit button
$(document).on("click", "#edit_icon", function () {
    var currElmModelAttr = $(this).find('.advanced');
    $this = $(this);
    var input = $('<input />', {
        'type': 'text',
            'name': currElmModelAttr,
            'style': 'width:100px',
            'class': 'datePicker',
            'value': $(this).text()
    });
    $(".container").replaceWith(input);
});


//Weather plugin
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

$("#current_weather").click(function() {
  loadWeather('','');
})
  function loadWeather(location, woeid) {
    $("#current_weather").hide();
    $("#loader").show();
    $.simpleWeather({
      location: location,
      woeid: woeid,
      unit: 'f',
      success: function(weather) {
        $("#temp").val(weather.temp);
        $("#humidity").val(weather.humidity);
        $("#loader").fadeOut("fast");
        $("#current_weather").fadeIn("fast");
      },
      error: function(error) {
        $("#current_weather").html('<p>'+error+'</p>');
      }
    });
  }

//Function to get Date
var d = new Date();

var month = d.getMonth()+1;
var day = d.getDate();

var output = ((''+month).length<2 ? '0' : '') + month + '/' +
    ((''+day).length<2 ? '0' : '') + day + '/' +
    d.getFullYear();
    

output = String(output);
$("#demo").html(output);