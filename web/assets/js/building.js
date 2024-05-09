// use a script tag or an external JS file

$(document).ready(function () {
  $('.downwards a').on('click', function (event) {
    if (this.hash !== '') {
      event.preventDefault()
      const target = $(this.hash)
      $('html, body').animate(
        {
          scrollTop: target.offset().top - 80,
        },
        800
      )
    }
  })
})

document.addEventListener('DOMContentLoaded', (event) => {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother, MotionPathPlugin)
  const smoother = ScrollSmoother.create({
    wrapper: '#smooth-wrapper',
    content: '#smooth-content',
    smooth: 2,
    normalizeScroll: true,
    effects: true,
    preventDefault: true,
  })

  let mm = gsap.matchMedia()
  var navHeight = $('nav').innerHeight()
  var marker = { startColor: 'green', endColor: 'red', fontSize: '18px', fontWeight: 'bold', indent: 20, zIndex: 2000 }

  function firstSection() {
    let tl = gsap.timeline({
      defaults: { duration: 1, ease: 'none' },
      scrollTrigger: {
        trigger: '.firstSection',
        pin: true,
        anticipatePin: 1,
        scrub: 1,
        start: 'top top+=' + navHeight,
        end: 'bottom top',
        invalidateOnRefresh: true,
        // markers: marker,
      },
    })
    gsap.set('.firstSection .content', { yPercent: 150 })
    gsap.set('.firstSection .cloud-2', { xPercent: 80 })
    gsap.set('.firstSection .cloud-1', { xPercent: -50 })
    tl.addLabel('start')
    tl.to('.firstSection .cloud-2', { xPercent: -200 }, 'start')
    tl.to('.firstSection .cloud-1', { xPercent: 200 }, 'start')
    tl.to('.firstSection .content', { yPercent: 0, ease: 'circ.out' }, 'start')
  }

  function secondSection() {
    let bird = gsap.timeline()
    bird.to

    let tl = gsap.timeline({
      defaults: { duration: 3, ease: 'none' },
      scrollTrigger: {
        trigger: '.secondSection',
        start: 'top top+=' + navHeight,
        end: 'bottom top',
        pin: true,
        anticipatePin: 1,
        scrub: 1,
        invalidateOnRefresh: true,
        // markers: marker,
      },
    })
    gsap.set('.secondSection .content', { yPercent: 150 })
    gsap.set('.secondSection .light', { alpha: 0 })
    gsap.set('.secondSection .bird-wrapper', { yPercent: 40 })

    tl.addLabel('start')

    tl.to(
      '.secondSection .bird',
      {
        duration: 6,
        motionPath: {
          path: '#mainPath',
          align: '#mainPath',
          alignOrigin: [0.5, 0.5],
          autoRotate: true,
        },
      },
      'start+=0.05'
    )

    tl.to('.secondSection .light', { alpha: 0.5, duration: 0.1 }, 'start+=1.5')
    tl.to('.secondSection .light', { alpha: 0, duration: 0.1 }, 'start+=2')
    tl.to('.secondSection .light', { alpha: 0.7, duration: 0.1 }, 'start+=2.1')
    tl.to('.secondSection .light', { alpha: 0, duration: 0.1 }, 'start+=2.2')
    tl.to('.secondSection .light', { alpha: 0.9, duration: 0.1 }, 'start+=2.3')
    tl.to('.secondSection .content', { yPercent: 0, ease: 'circ.out' }, 'start')
  }

  function thirdSection() {
    let tl = gsap.timeline({
      defaults: { duration: 3, ease: 'none' },
      scrollTrigger: {
        trigger: '.thirdSection',
        start: 'top top+=' + navHeight,
        end: 'bottom top',
        pin: true,
        anticipatePin: 1,
        scrub: 1,
        invalidateOnRefresh: true,
        // markers: marker,
      },
    })
    gsap.set('.thirdSection .content', { yPercent: 150 })
    gsap.set('.thirdSection .wind', { xPercent: -200, yPercent: 300, scale: 0 })
    tl.addLabel('start')
    tl.to('.thirdSection .minute', { rotate: 360 }, 'start')
    tl.to('.thirdSection .hour-hand', { rotate: 20, duration: 1 }, 'start+=2')
    tl.to('.thirdSection .content', { yPercent: 0, ease: 'circ.out' }, 'start')
    tl.to('.thirdSection .wind', { xPercent: 0, yPercent: 0, scale: 1, ease: 'circ.out' }, 'start')
  }

  function fourthSection() {
    let tl = gsap.timeline({
      defaults: { duration: 4, ease: 'circ.out' },
      scrollTrigger: {
        trigger: '.fourthSection',
        start: 'top top+=' + navHeight,
        end: 'bottom top',
        pin: true,
        anticipatePin: 1,
        scrub: 1,
        invalidateOnRefresh: true,
        toggleActions: 'play pause resume reset',
        // markers: marker,
      },
    })
    gsap.set('.fourthSection .content', { yPercent: 150 })

    tl.addLabel('start')
    // tl.to('.fourthSection .bird', { alpha: 1 }, 'start')
    tl.to('.fourthSection .content', { yPercent: 0 }, 'start')
    tl.to('.fourthSection .wave', { xPercent: -10, scale: 1.5, stagger: 0.5, duration: 1.5 }, 'start')
    tl.to('.fourthSection .wave', { xPercent: 0, scale: 1, stagger: -0.5, duration: 1.5 }, 'start+=2')
  }

  function fifthhSection() {
    let tl = gsap.timeline({
      defaults: { duration: 3, ease: 'none' },
      scrollTrigger: {
        trigger: '.fifthSection',
        start: 'top top+=' + navHeight,
        end: 'bottom top',
        pin: true,
        anticipatePin: 1,
        scrub: 1,
        invalidateOnRefresh: true,
        toggleActions: 'play none none reverse',
        // markers: marker,
      },
    })
    gsap.set('.fifthSection .floor-light', { alpha: 0 })
    gsap.set('.fifthSection .wind', { xPercent: 100 })
    gsap.set('.fifthSection .st-sign', { transformOrigin: '50% 100%' })
    tl.addLabel('start')
    tl.to('.fifthSection .wind', { xPercent: 0, ease: 'circ.out' }, 'start')
    tl.to('.fifthSection .st-sign', { rotate: -5, yPercent: 5, ease: 'circ.out' }, 'start+=0.5')
    tl.to('.fifthSection .floor-light', { alpha: 1 }, 'start+=2')
  }

  mm.add('(min-width: 1024px)', () => {
    firstSection()
    secondSection()
    thirdSection()
    fourthSection()
    fifthhSection()
  })

  mm.add('(max-width: 1023px)', () => {
    //first
    gsap.set('.firstSection .cloud-1', { xPercent: 0 })
    //second
    gsap.set('.secondSection .content', { yPercent: 0 })
    gsap.set('.secondSection .light', { alpha: 1 })
    gsap.set('.secondSection .bird', { alpha: 0 })
    //third
    gsap.set('.thirdSection .content', { yPercent: 0 })
    gsap.set('.thirdSection .wind', { xPercent: 0 })
    //fourth
    gsap.set('.fourthSection .content', { yPercent: 0 })
    //fifth
    gsap.set('.fifthSection .floor-light', { alpha: 0 })
  })
})

ScrollTrigger.addEventListener('refresh', () => console.log('refresh'))
