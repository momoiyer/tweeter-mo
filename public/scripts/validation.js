//Validating user input
const validation = function(tweetQueryString, thisVal) {
  const inputText = tweetQueryString.slice(5);
  const counter = Number($(thisVal).find(".counter").val());
  let errorMessage = !inputText ? "Tweet cannot be empty!" : (counter < 0 ? "Tweet is too long" : "");

  //if error exists, show error element with appropiate message
  if (errorMessage) {
    $(".tweet-error").slideDown("", function() {
      $(".tweet-error").addClass("displayError").html(errorMessage);
    });
    return true;
  }
  return false;
};