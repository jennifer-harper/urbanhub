gsap.registerPlugin(ScrollTrigger)

let tl = gsap.timeline({
  defaults: { duration: 1, ease: 'circ.out' },
  scrollTrigger: {
    trigger: '.hero-animation',
    // pin: true,
    start: 'top top+=50',
    end: 'bottom top',
    scrub: 1,
    invalidateOnRefresh: true,
    // markers: { startColor: 'blue', endColor: 'red', fontSize: '18px', fontWeight: 'bold', indent: 20 },
  },
})
tl.to('.hero-cloud', { xPercent: -80 })

// --------------------second
let tl2 = gsap.timeline({
  defaults: { duration: 1, ease: 'none' },
  scrollTrigger: {
    trigger: '.private-animation',
    pin: true,
    scrub: 1,
    start: 'top top',
    end: 'bottom top',
    // invalidateOnRefresh: true,
    // markers: { startColor: 'green', endColor: 'red', fontSize: '18px', fontWeight: 'bold', indent: 20 },
  },
})
tl2.set('.private-animation .content', { yPercent: 150 })
tl2.set('.private-animation .cloud-2', { xPercent: 80 })
tl2.set('.private-animation .cloud-1', { xPercent: -50 })

tl2.addLabel('start')
tl2.to('.private-animation .cloud-2', { xPercent: -200 }, 'start')
tl2.to('.private-animation .cloud-1', { xPercent: 200 }, 'start')
tl2.to('.private-animation .content', { yPercent: 0, ease: 'circ.out' }, 'start')

// --------------------third
let tl3 = gsap.timeline({
  defaults: { duration: 3, ease: 'none' },
  scrollTrigger: {
    trigger: '.traditional',
    start: 'top top',
    end: 'bottom top',
    pin: true,
    scrub: true,
    invalidateOnRefresh: true,
    // markers: { startColor: 'orange', endColor: 'red', fontSize: '18px', fontWeight: 'bold', indent: 20 },
  },
})
tl3.set('.traditional .content', { yPercent: 150 })
tl3.set('.light', { alpha: 0 })
tl3.addLabel('start')
tl3.to('.bird', { yPercent: -100, xPercent: 250 }, 'start')
tl3.to('.light', { alpha: 0.5, duration: 0.1 }, 'start+=1.5')
tl3.to('.light', { alpha: 0, duration: 0.1 }, 'start+=2')
tl3.to('.light', { alpha: 0.7, duration: 0.1 }, 'start+=2.1')
tl3.to('.light', { alpha: 0, duration: 0.1 }, 'start+=2.2')
tl3.to('.light', { alpha: 0.7, duration: 0.1 }, 'start+=2.3')
tl3.to('.traditional .content', { yPercent: 0, ease: 'circ.out' }, 'start')
