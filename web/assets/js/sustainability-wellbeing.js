///sustainability-wellbeing
document.addEventListener('DOMContentLoaded', (event) => {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

  let mm = gsap.matchMedia()

  mm.add('(min-width:768px)', () => {
    var offset = $('nav').outerHeight(true)

    let sections = gsap.utils.toArray('.panel')
    gsap.to(sections, {
      xPercent: -90 * (sections.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: '.something',
        start: 'top top+=' + offset,
        pin: true,
        scrub: 1,
        end: () => '+=' + document.querySelector('.something').offsetWidth,
        //   markers: {
        //     startColor: 'red',
        //   },
      },
    })
  })
})
