//to render each tweet using createTweetElement function
const renderTweets = function(tweets) {
  tweets.reverse().forEach(tweet => {
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
  const $tweetText = $(`<p>${escape(tweet.content.text)}</p>`); //escapeText?
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