gsap.registerPlugin(ScrollTrigger)

let footer = gsap.utils.toArray('.footer-banner')

gsap.set(footer, { yPercent: -100 })
const uncover = gsap.timeline({ paused: true })

uncover.to(footer, { yPercent: 0, ease: 'none' })

ScrollTrigger.create({
  trigger: '.contact',
  start: 'bottom bottom',
  end: 'bottom center',
  animation: uncover,
  scrub: true,
  //   markers: {
  //     startColor: 'red',
  //   },
})
