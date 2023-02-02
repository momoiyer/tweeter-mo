$(document).ready(function() {
  var $document = $(document),
    $scrollNav = $('#scrollTop'),
    $newTweetNav = $('.new-tweet-toggle'),
    show = 'showNav',
    hide = 'hideNav';

  $document.scroll(function() {
    if ($document.scrollTop() > 200) {
      $scrollNav.addClass(show);
      $newTweetNav.addClass(hide);
    } else {
      $scrollNav.removeClass(show);
      $newTweetNav.removeClass(hide);
    }
  });

  $('#scrollTop').on('click', function() {
    $(".new-tweet").slideDown();
    $("#tweet-text").focus();
    window.scrollTo(0, 0);
  });
});
