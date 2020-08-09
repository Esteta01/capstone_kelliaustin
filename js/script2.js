$('.navbar a').on('click', function(e) {
	if(this.hash !=='') {
		e.preventDefault();

		const hash= this.hash;

		$('html, body').animate({
			scrollTop: $(hash).offset().top
			},800);
	};
});

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar0");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

$(function () { // Same as document.addEventListener("DOMContentLoaded"...

  $("#navbar-toggle").blur(function (event) {
    var screenWidth = window.innerWidth;
    if (screenWidth < 992) {
      $("#navbarTogglerDemo02").collapse('hide');
    }
  });

  $("#navbarToggle").click(function (event) {
    $(event.target).focus();
  });
});

// // Remove the class 'active' from home and switch to Menu button
// var switchMenuToActive = function () {
//   // Remove 'active' from home button
//   var classes = document.querySelector("#nav-itemhome").className;
//   classes = classes.replace(new RegExp("active", "g"), "");
//   document.querySelector("#nav-itemhome").className = classes;

  // Add 'active' to menu button if not already there
//   classes = document.querySelector("#nav-item").className;
//   if (classes.indexOf("active") == -1) {
//     classes += " active";
//     document.querySelector("#nav-item").className = classes;
//   }
// };

// Get the container element
var btnContainer = document.getElementById("navbarTogglerDemo02");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("nav-item");

// // Loop through the buttons and add the active class to the current/clicked button
// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function() {
//     var current = document.getElementsByClassName("active");
//     current[0].className = current[0].className.replace("active", "");
//     this.className += "active";
//   });
// }

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");

    // If there's no active class
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }

    // Add the active class to the current/clicked button
    this.className += " active";
  });
}