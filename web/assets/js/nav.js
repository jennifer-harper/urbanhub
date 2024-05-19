let navbar = document.querySelector('.navbar')
let navLinks = document.querySelector('.nav-links-wrapper')
let menuOpenBtn = document.querySelector('.navbar .hamburger')

////
////
////---------NAVIGATION DROPDOWN----------////
function toggleMenu() {
  if (navLinks.style.top === '80px') {
    navLinks.style.top = '-100vh' // Close the menu
    $('.navbar .hamburger').removeClass('rotate-icon')
    $('body').removeClass('nav-active')
  } else {
    navLinks.style.top = '80px' // Open the menu
    $('.navbar .hamburger').addClass('rotate-icon')
    $('body').addClass('nav-active')
  }
}

// Use menuOpenBtn to toggle the menu state
menuOpenBtn.onclick = toggleMenu

////
////
////---------FOR DROPDOWNS/SUBMENUS ON MOBILE----------////

// Ensure that the event listener is attached properly
$('.link').click(function (e) {
  //e.preventDefault(); // Prevent default link behavior

  // Check if the clicked link already has the active class
  if ($(this).hasClass('active')) {
    // If yes, remove the active class
    $(this).removeClass('active')
  } else {
    // If not, remove active class from all links and add it to the clicked link
    $('.link').removeClass('active')
    $(this).addClass('active')
  }

  // Scroll to the active link
  let activeLink = document.querySelector('.nav-links-wrapper .link.active')
  if (activeLink) {
    let rect = activeLink.getBoundingClientRect()
    let navLinksRect = navLinks.getBoundingClientRect()
    let scrollTop = rect.top + window.scrollY - navLinksRect.top
    navLinks.scrollTo({ top: scrollTop, behavior: 'smooth' })
  }
})

////////////////////////////////////////////////////////////////////////
// Function to remove active class on Escape key press
$(document).keydown(function (event) {
  if (event.key === 'Escape') {
    $('.link.active').removeClass('active')
  }
})

// Function to remove active class when hamburger icon is clicked
$('.navbar .hamburger').click(function () {
  $('.link').removeClass('active')
})

////
////
////---------for body when nav hovers----------////
let delayTimer

$('li.nav-hover').hover(
  function () {
    // Clear any existing delay timer
    clearTimeout(delayTimer)
    // Set a new delay for adding the class
    delayTimer = setTimeout(() => {
      $('body').addClass('nav-active')
    }, 250) // Adjust the delay time (in milliseconds) as needed
  },
  function () {
    // Clear any existing delay timer
    clearTimeout(delayTimer)
    // Set a new delay for removing the class
    delayTimer = setTimeout(() => {
      $('body').removeClass('nav-active')
    }, 250) // Adjust the delay time (in milliseconds) as needed
  }
)
