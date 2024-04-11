let navbar = document.querySelector('.navbar')
let navLinks = document.querySelector('.nav-links')
let menuOpenBtn = document.querySelector('.navbar .bx-menu')

// Function to toggle the menu state
function toggleMenu() {
  if (navLinks.style.top === '50px') {
    navLinks.style.top = '-100%' // Close the menu
  } else {
    navLinks.style.top = '50px' // Open the menu
  }
}

// Use menuOpenBtn to toggle the menu state
menuOpenBtn.onclick = toggleMenu

//dropdown toggles
let environmentArrow = document.querySelector('.environment-arrow')
let htmlcssArrow = document.querySelector('.solutions-arrow')
let jsArrow = document.querySelector('.community-arrow')

// Toggle HTML & CSS submenu
environmentArrow.onclick = function () {
  navLinks.classList.toggle('show2')
}

htmlcssArrow.onclick = function () {
  navLinks.classList.toggle('show1')
}

// Toggle JavaScript submenu
jsArrow.onclick = function () {
  navLinks.classList.toggle('show3')
}

// Close submenus when clicking outside
document.addEventListener('click', function (event) {
  if (!event.target.closest('.nav-links')) {
    navLinks.classList.remove('show1', 'show3', 'show2')
  }
})

// Close submenus when pressing Esc key
document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    navLinks.classList.remove('show1', 'show3', 'show2')
  }
})
