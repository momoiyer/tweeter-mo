// jquery compsoer to calculate word count

$(document).ready(function() {



  //count words while user typing
  $('#tweet-text').on('input', onChange);

  // //update word counts as user typing
  // $('#tweet-text').on('keyup', (function() {
  //   const parent = this.parentNode;
  //   if (charCount < 0) {
  //     $(parent).find(".counter").html(charCount).addClass("counter-red");
  //   }
  //   else {
  //     $(parent).find(".counter").html(charCount).removeClass("counter-red");
  //   }
  // }));
});

const onChange = function(event) {
  //max available tweet count
  const MAX_WORD = 140;

  let charCount = MAX_WORD;
  const length = this.value.length;
  charCount = MAX_WORD - length;
  //const $form = this.closest('form')
  //const $counter = $form.find(".counter");
  const parent = this.parentNode;
  if (charCount < 0) {
    $(parent).find(".counter").html(charCount).addClass("counter-red");
  }
  else {
    $(parent).find(".counter").html(charCount).removeClass("counter-red");
  }
};