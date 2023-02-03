// jquery compsoer to calculate word count

$(document).ready(function() {

  //max available tweet count
  const MAX_WORD = 140;

  let charCount = MAX_WORD;

  //count words while user typing
  $('#tweet-text').on('input', (function() {
    const length = this.value.length;
    charCount = MAX_WORD - length;
  }));

  //update word counts as user typing
  $('#tweet-text').on('keyup', (function() {
    const parent = this.parentNode;
    if (charCount < 0) {
      $(parent).find(".counter").html(charCount).addClass("counter-red");
    }
    else {
      $(parent).find(".counter").html(charCount).removeClass("counter-red");
    }
  }));
});