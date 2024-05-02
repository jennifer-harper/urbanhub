gsap.registerPlugin(ScrollTrigger)

let footer = document.querySelector('.footer-banner.other')
let offset = $(footer).outerHeight(true)
console.log(offset)
gsap.set(footer, { yPercent: -70 })

const uncover = gsap.timeline({ paused: true })
uncover.to(footer, { yPercent: 0, ease: 'none' })

let trigger // Define the ScrollTrigger variable outside of the function

function createScrollTrigger() {
  if (trigger) {
    trigger.kill() // Kill the existing ScrollTrigger
  }

  trigger = ScrollTrigger.create({
    trigger: '.thingy',
    start: 'bottom bottom',
    // end: `bottom bottom-=${offset}`,
    animation: uncover,
    scrub: true,
    markers: {
      startColor: 'pink',
    },
  })
}

// Function to update offset and recreate ScrollTrigger
function updateOffsetAndRefresh() {
  offset = $('.footer-banner.other').outerHeight(true)
  createScrollTrigger() // Recreate ScrollTrigger with updated offset
}

// Listen for resize and orientation change events and trigger refresh
window.addEventListener('resize', updateOffsetAndRefresh)
window.addEventListener('orientationchange', updateOffsetAndRefresh)

// Initial creation of ScrollTrigger
createScrollTrigger()

////////////////////
