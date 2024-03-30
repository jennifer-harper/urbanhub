gsap.registerPlugin(ScrollTrigger)

let tl = gsap.timeline({
  defaults: { duration: 1, ease: 'circ.out' },

  scrollTrigger: {
    trigger: '.hero-animation',
    // pin: true,
    start: 'top top+=50',
    end: 'center top',
    scrub: 1,
    invalidateOnRefresh: true,
    // markers: { startColor: 'blue', endColor: 'red', fontSize: '18px', fontWeight: 'bold', indent: 20 },
  },
})

tl.to('.hero-cloud', { yPercent: -100 })
