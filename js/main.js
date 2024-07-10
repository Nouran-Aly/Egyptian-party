// side bar

$(".openbtn").on("click", function () {
    $("#mySidebar").width("250px");
    $("#main").css("margin-left", "250px")
})

$(".closebtn").on("click", function () {
    $("#mySidebar").width("0");
    $("#main").css("margin-left", "0px")
})

// accordion
var headers = $('#accordion .accordion-header');
var contentAreas = $('#accordion .ui-accordion-content ').hide();

headers.click(function () {
    var panel = $(this).next();
    var isOpen = panel.is(':visible');

    panel[isOpen ? 'slideUp' : 'slideDown']()
        .trigger(isOpen ? 'hide' : 'show');

    return false;
});


// countdown
setInterval(() => {
    var countDownDate = new Date("Jan 1, 2025 00:00:00").getTime();
    var currentDate = new Date().getTime()
    var timeGap = countDownDate - currentDate;

    var days = Math.floor(timeGap / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeGap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeGap % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeGap % (1000 * 60)) / 1000);

    $('#day').text(days + " days");
    $('#hour').text(hours + " hours");
    $('#min').text(minutes + " mins");
    $('#sec').text(seconds + " secs");
}, 1000);


// form
$(document).ready(function () {
    var $txtArea = $('textarea');
    var $chars = $('#chars');
    var textMax = $txtArea.attr('maxlength');

    $chars.html(textMax);

    $txtArea.on('keyup', countChar);

    function countChar() {
        var textLength = $txtArea.val().length;
        var textRemaining = textMax - textLength;
        $chars.html(textRemaining);
    };
});