// jquery composer to toggle new tweet text area

$(document).ready(function() {
  $("#toggle-arrow-down").on("click", function() {
    $(".new-tweet").slideToggle('slow', function() {
      if (!$(this).is(':hidden')) {
        $("#tweet-text").focus();
      }
    });
  });
});