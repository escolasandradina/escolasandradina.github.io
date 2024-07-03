// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");
var navbarLogo = document.getElementById("nav-logo")

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.scrollY >= sticky) {
    navbar.classList.add("sticky");
    navbarLogo.classList.add("stycky-navlogo");
  } else {
    navbar.classList.remove("sticky");
    navbarLogo.classList.remove("stycky-navlogo")
  }
}