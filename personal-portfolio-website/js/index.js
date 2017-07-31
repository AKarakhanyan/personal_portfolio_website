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
      (scroll_start + $(window).height()) < $(document).height() - 1
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


// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });