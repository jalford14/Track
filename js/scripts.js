$(document).ready(function() {
    one();
    two();
    
});
function one() {
        $("#title")
        .css('opacity', 0)
        .slideDown('slow')
        .animate(
        { opacity: 1 },
        { queue: false, duration: 'slow' }
    )
    two();
}

function two () {
    $("#line").animate({width: "500"}, 1000);
    /*$('#line').animate({ opacity: 1, top: "-10px" }, 'slow');*/
    
}