//urban solutions pages
var swiper = new Swiper('.slider-urban-solutions', {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  //   autoplay: {
  //     delay: 8000,
  //     disableOnInteraction: false,
  //   },

  breakpoints: {
    1024: {
      slidesPerView: 2,
    },
    1366: {
      slidesPerView: 1.7,
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})

//putting a space in the name/url slide.spaceType[0]
$(document).ready(function () {
  $('.slider-environments h3').each(function () {
    var text = $(this).text()
    var newText = text.replace(/(Urban)(\w*)/g, '$1<span><i>$2</i></span>')
    $(this).html(newText)
  })
})

var swiper = new Swiper('.slider-testimonials', {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
})
