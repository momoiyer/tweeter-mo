// jquery composer to activate/deactivate scroll up navigation button

$(document).ready(function() {
  var $document = $(document),
    $scrollNav = $('#scrollTop'),
    $newTweetNav = $('.new-tweet-toggle'),
    show = 'showNav',
    hide = 'hideNav';

  $document.scroll(function() {
    //if user scroll more than half of the profile image height
    if ($document.scrollTop() > 200) {
      //add scroll to top nav and hide new tweet toggle
      $scrollNav.addClass(show);
      $newTweetNav.addClass(hide);
    } else {
      // reverse the nav scroll and toggle view
      $scrollNav.removeClass(show);
      $newTweetNav.removeClass(hide);
    }
  });

  //when user click on scroll up nav, bring the page all the way to top and foucs on tweet text area
  $('#scrollTop').on('click', function() {
    $(".new-tweet").slideDown();
    $("#tweet-text").focus();
    window.scrollTo(0, 0);
  });
});
