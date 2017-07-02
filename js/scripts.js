$(document).ready(function() {
    one();
    three();
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
    three();
}

function three() {
    $("#form-style-5").delay(750).hide().fadeIn();
}

var d = new Date();

var month = d.getMonth()+1;
var day = d.getDate();

var output = d.getFullYear() + '/' +
    ((''+month).length<2 ? '0' : '') + month + '/' +
    ((''+day).length<2 ? '0' : '') + day;

output = String(output);
$("#demo").html(output);