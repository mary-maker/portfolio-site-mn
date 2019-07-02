/** Commenting on line One
  * line Two
  * line Three
  */
var name = 'Mary';
console.log("Welcome to the Portolio Site of");
console.log(name);
//
function menuToggle() {
  var x = document.getElementById('myNavtoggle'); //so it gets the div with the id myNavtoggle
  if (x.className === 'navtoggle') {
    x.className += ' responsive';
  }
  else {
    x.className = 'navtoggle';
  }
}
