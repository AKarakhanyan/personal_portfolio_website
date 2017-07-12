//bold navigation titles when scrolled to that location or clicked to location

$(document).ready(function() {
  var scroll_start = 0;
  var homePosition = $("#home");
  var aboutPosition = $("#about");
  var portfolioPosition = $("#portfolio");
  var contactPosition = $("#contact");
  var homeOffset = homePosition.offset();
  var aboutOffset = aboutPosition.offset();
  var portfolioOffset = portfolioPosition.offset();
  var contactOffset = contactPosition.offset();
  var offsetArray = [homeOffset, aboutOffset, portfolioOffset, contactOffset];

  $(document).scroll(function() {
    scroll_start = $(this).scrollTop();
    if (
      scroll_start >= Math.floor(homeOffset.top) &&
      scroll_start < portfolioOffset.top
    ) {
      $("#homeNavlink").addClass("scrollHeight");
      $("#portfolioNavlink").removeClass("scrollHeight");
      $("#aboutNavlink").removeClass("scrollHeight");
      $("#contactNavlink").removeClass("scrollHeight");
    } else if (
      scroll_start >= Math.floor(portfolioOffset.top) &&
      scroll_start < aboutOffset.top
    ) {
      $("#portfolioNavlink").addClass("scrollHeight");
      $("#homeNavlink").removeClass("scrollHeight");
      $("#aboutNavlink").removeClass("scrollHeight");
      $("#contactNavlink").removeClass("scrollHeight");
    } else if (
      scroll_start >= Math.floor(aboutOffset.top) &&
      scroll_start + $(window).height() < $(document).height() - 1
    ) {
      $("#aboutNavlink").addClass("scrollHeight");
      $("#portfolioNavlink").removeClass("scrollHeight");
      $("#contactNavlink").removeClass("scrollHeight");
      $("#homeNavlink").removeClass("scrollHeight");
    } else {
      $("#contactNavlink").addClass("scrollHeight");
      $("#aboutNavlink").removeClass("scrollHeight");
      $("#portfolioNavlink").removeClass("scrollHeight");
      $("#homeNavlink").removeClass("scrollHeight");
    }
  });
});