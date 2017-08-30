$(document).ready(function() {
  $(".phone-post").addClass("active");
  setTimeout(function() {
    $(".phone-post").removeClass("active");
  }, 1000);
  setInterval(function() {
    $(".phone-post").addClass("active");
    setTimeout(function() {
      $(".phone-post").removeClass("active");
    }, 1000);
  }, 1500);
});
