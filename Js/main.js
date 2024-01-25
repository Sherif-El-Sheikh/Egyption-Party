// left Menu

$(".open-nav").click(function() {
    $("#sideMenu").animate({
        width: '250px'
    }, 50);
    $(".open-nav").animate({
        marginLeft: '250px'
    }, 50)
})

$(".close-menu").click(function() {
    $("#sideMenu").animate({
        width: '0'
    }, 50);
    $(".open-nav").animate({
        marginLeft: '0'
    }, 50)
})


// scroll smoothing
$("#sideMenu a").not(".close-menu").click(function() {
    let sectionId = $(this).attr('href');
    // console.log(sectionId);
    let sectionTop = $(sectionId).offset().top;
    // console.log(sectionTop);
    $("html, body").animate({
        scrollTop: sectionTop
    }, 3000)
})


// singer down

$("#singerDown .toggle").click(function() {
    $(".inner").not($(this).next()).slideUp(500);
    $(this).next().slideToggle(500);
});


// counter

/* The window.onload event is a JavaScript event that triggers
when the window object has finished loading all the content of a web page, including images, scripts, stylesheets, and other resources.
It is often used to execute some code after the page is fully loaded, such as initializing variables, attaching event listeners, or displaying dynamic content
 */

window.onload = function() {
    countDownToTime("28 August 2024 10:00:00");
}

function countDownToTime(countTo) {

    let nowDate = new Date();
    nowDate = (nowDate.getTime()/1000); // seconds

    let futureDate = new Date(countTo);
    futureDate = (futureDate.getTime()/1000); // seconds

    timeDifference = (futureDate- nowDate); // seconds
    
    let days = Math.floor( timeDifference / (24*60*60)); // convert seconds to days
    let hours = Math.floor((timeDifference - (days * (24*60*60))) / 3600); // عدد الساعات المتبقيه بالاضافه للايام والطرح بيكون بالثواني فلازم التحويل لثواني ثم قسمه النتيجه لتحويلها لساعات 
    let mins = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600 )) / 60);
    let secs = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600) - (mins * 60)))


$(".days").html(days < 10 ? `0${days} ` : `${days}`);
$(".hours").html(hours < 10 ? `0${hours} ` : `${hours}`);
$(".minutes").html(mins < 10 ? `0${mins} ` : `${mins}`);
$('.seconds').html(secs < 10 ? `0${secs} ` : `${secs}`)


setInterval(function() {
    countDownToTime(countTo);
    }, 1000);
}


// textarea counter
let maxLength = 100;
$("textarea").attr("maxlength", maxLength);
$("textarea").keyup(function() {
    let length = $(this).val().trim().length;
    let remainingChar = maxLength - length;
    if (remainingChar <= 0) {
        $("#chars").text("your available character finished");
    }else {
        $("#chars").text(remainingChar);
    }
})
