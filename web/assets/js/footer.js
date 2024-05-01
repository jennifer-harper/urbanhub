gsap.registerPlugin(ScrollTrigger)

let offset = $('.footer-banner').outerHeight(true)

let footer = document.querySelector('.footer-banner')
gsap.set(footer, { yPercent: -70 })

const uncover = gsap.timeline({ paused: true })
uncover.to(footer, { yPercent: 0, ease: 'none' })

let trigger // Define the ScrollTrigger variable outside of the function

function createScrollTrigger() {
  if (trigger) {
    trigger.kill() // Kill the existing ScrollTrigger
  }

  trigger = ScrollTrigger.create({
    trigger: '.contact',
    start: 'bottom bottom',
    end: `bottom bottom-=${offset}`,
    animation: uncover,
    scrub: true,
    // markers: {
    //   startColor: 'red',
    // },
  })
}

// Function to update offset and recreate ScrollTrigger
function updateOffsetAndRefresh() {
  offset = $('.footer-banner').outerHeight(true)
  createScrollTrigger() // Recreate ScrollTrigger with updated offset
}

// Listen for resize and orientation change events and trigger refresh
window.addEventListener('resize', updateOffsetAndRefresh)
window.addEventListener('orientationchange', updateOffsetAndRefresh)

// Initial creation of ScrollTrigger
createScrollTrigger()
