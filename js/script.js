/** Commenting on line One
  * line Two
  * line Three
  */
var name = 'Mary';
console.log("Welcome to the Portolio Site of");
console.log(name);
// The burger menu opens and closes:
function menuToggle() {
  var x = document.getElementById('myNavtoggle'); //so it gets the div with the id myNavtoggle

  if (x.className === 'navtoggle') {
    x.className += ' responsive';
  }
  else {
    x.className = 'navtoggle';
  }
}

// Smooth scrolling // by W3schools
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("#smooth").on('click', function(smoothscroll) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      smoothscroll.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (e.g. 800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 600, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});
