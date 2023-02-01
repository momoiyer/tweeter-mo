/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


console.log("Start of client js file!");

$(document).ready(function() { //JQuery codes awlays need to be inside .ready???


  $(".error").slideUp();
  //Form SUBMISSION
  $("#submitTweet").on('submit', (function(event) {
    // prevent the default form submission behaviour
    event.preventDefault();

    // Serialize the form data
    const tweetQueryString = $(this).serialize();

    //Validation

    //reset error element
    $(".error").removeClass("displayError").slideUp();

    const inputText = tweetQueryString.slice(5);
    const counter = Number($(this).find(".counter").val());
    let errorMessage = !inputText ? "Tweet cannot be empty!" : (counter < 0 ? "Tweet is too long" : "");

    //if error exists, show error element with appropiate message
    if (errorMessage) {
      $(".error").slideDown("", function() {
        $(".error").addClass("displayError").html(errorMessage);
      });
    } else {
      // Use the jQuery library to submit a POST request that sends the serialized data to the server
      $.post("/tweets/", tweetQueryString).done(function() {
        $('#tweets-container').empty();
        loadTweets();
      });

      $(this).find("#tweet-text").val('');
    }
  }));

  const escape = function(str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };



  //Responsible for FETCHING tweets from the http://localhost:8080/tweets page.
  const loadTweets = function() {
    $.get("http://localhost:8080/tweets", function(data, status) {
      //rendering call for all tweets with fetched data
      renderTweets(data);
    });
  };

  loadTweets();

  //to render each tweet using createTweetElement function
  const renderTweets = function(tweets) {
    // loops through tweets and calls createTweetElement for each tweet
    tweets.forEach(tweet => {
      // takes return value and appends it to the tweets container
      const $tweet = createTweetElement(tweet);
      $('#tweets-container').append($tweet);
    });
  };

  //to create dynamic element for each tweet data
  const createTweetElement = function(tweet) {

    //tweet container article with styling
    const $tweetArticle = $(`<article class="tweet"> </article>`);

    //tweet header with profile data
    const $header = $(`<header> </header>`);
    const $img = $(`<img src=${tweet.user.avatars}>`);
    const $name = $(`<p> ${tweet.user.name} </p>`);
    const $handle = $(`<p class="handle">${tweet.user.handle}</p>`);
    $header.append($img).append($name).append($handle);


    //actual tweet data and divider
    const $tweetText = $(`<p>${escape(tweet.content.text)}</p>`);
    const $divider = $(`<div class="line-break"></div>`);

    //tweet footer data
    const $footer = $(`<footer> </footer>`);
    const $days = $(`<p> ${timeago.format(tweet.created_at)}</p>`);
    const $icons = $(`  <div>
                          <i class="fa-solid fa-flag"></i>
                          <i class="fa-solid fa-retweet"></i>
                          <i class="fa-solid fa-heart"></i>
                        </div>`);
    $footer.append($days).append($icons);

    //append all elements in order to article element
    $tweetArticle.append($header).append($tweetText).append($divider).append($footer);

    return $tweetArticle;
  };
});

