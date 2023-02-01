/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


console.log("Start of client js file!");

$(document).ready(function() { //JQuery codes awlays need to be inside .ready???

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
    const $tweetText = $(`<p>${tweet.content.text}</p>`);
    const $divider = $(`<div class="line-break"></div>`);

    //tweet footer data
    const $footer = $(`<footer> </footer>`);
    const $days = $(`<p> ${tweet.created_at} </p>`);
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

  // Fake data taken from initial-tweets.json
  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd"
      },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ];

  //rendering call for all tweets
  renderTweets(data);


  //FORM SUBMISSION

  // Use the jQuery library to add an event listener for submit.
  $("#submitTweet").on('submit', (function(event) {
    // prevent the default form submission behaviour
    event.preventDefault();

    // Serialize the form data
    const tweet = $(this).serialize();

    // Use the jQuery library to submit a POST request that sends the serialized data to the server
    $.post("/tweets/", tweet);
  }));

});

