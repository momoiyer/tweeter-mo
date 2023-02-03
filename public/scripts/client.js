/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


$(document).ready(function() {

  //reset tweet area to be hidden upon page load
  $(".tweet-error").slideUp();

  //FORM SUBMISSION
  $("#tweet-form").on('submit', (function(event) {
    // prevent the default form submission behaviour
    event.preventDefault();

    // Serialize the form data
    const tweetQueryString = $(this).serialize();

    //reset error element
    $(".tweet-error").removeClass("displayError").slideUp();

    //validate form input from validation.js
    if (!validation(tweetQueryString, this)) {
      // Use the jQuery library to submit a POST request that sends the serialized data to the server
      $.post("/tweets/", tweetQueryString).done(function() {
        $('#tweets-container').empty();
        loadTweets();
      });

      $(this).find("#tweet-text").val('');
      $(this).find(".counter").val(140);
    }
  }));


  //Responsible for FETCHING tweets from the http://localhost:8080/tweets page.
  const loadTweets = function() {
    $.get("http://localhost:8080/tweets", function(data, status) {
      //rendering call for all tweets with fetched data from htmlHelper.js
      renderTweets(data);
    });
  };
  loadTweets();

});

