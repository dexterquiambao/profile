$(document).ready(function() {

// Transition effect for navbar and back-to-top icon
$(window).scroll(function() {
// checks if window is scrolled more than 500px, adds/removes solid class
if($(this).scrollTop() > 550) {
  $('.navbar').addClass('solid');
  $('.back-to-top').addClass('visible');
} else {
  $('.navbar').removeClass('solid');
  $('.back-to-top').removeClass('visible');
}

});


// Scrolling effect for Arrow icons
$("#scrollIcon").click(function() {
  $('html, body').animate({
    scrollTop: $("#about").offset().top
  }, 1000);
  return true;
});

$("#nav-portfolio").click(function() {
  $('html, body').animate({
    scrollTop: $("#portfolio").offset().top
  }, 1000);
  return false;
});

$("#nav-contact").click(function() {
  $('html, body').animate({
    scrollTop: $("#contact").offset().top
  }, 1000);
  return false;
});

$(".navbar-brand").click(function(e) {
  e.preventDefault();
  $.scrollTo(0, 1000);
});



});
