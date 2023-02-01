console.log("Start of composer js file!");

let charCount = 140;
$(document).ready(function() {
  console.log("Doucment is ready!");


  $('#tweet-text').on('input', (function() {
    const length = this.value.length;
    charCount = 140 - length;
  }));


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