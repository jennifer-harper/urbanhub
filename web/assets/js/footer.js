gsap.registerPlugin(ScrollTrigger)

let footer = gsap.utils.toArray('.footer-banner')

gsap.set(footer, { yPercent: -75 })
const uncover = gsap.timeline({ paused: true })

uncover.to(footer, { yPercent: 0, ease: 'none' })

ScrollTrigger.create({
  trigger: '.contact',
  start: 'bottom bottom',
  end: 'bottom center+=100',
  animation: uncover,
  scrub: true,
  //
})
