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
      slidesPerView: 1.7,
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})

$(document).ready(function () {
  $('.slider-environments h3').each(function () {
    var text = $(this).text()
    var newText = text.replace(/(Urban)(\w*)/g, '$1<span><i>$2</i></span>')
    $(this).html(newText)
  })
})
