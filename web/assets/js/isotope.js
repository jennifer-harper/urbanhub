// external js: isotope.pkgd.js
document.addEventListener('DOMContentLoaded', function () {
  // init Isotope
  var $grid = $('.grid').isotope({
    itemSelector: '.color-shape',
    masonry: {
      fitWidth: true,
    },
  })

  // store filter for each group
  var filters = {}

  $('.filters').on('click', '.button', function (event) {
    var $button = $(event.currentTarget)
    // get group key
    var $buttonGroup = $button.parents('.button-group')
    var filterGroup = $buttonGroup.attr('data-filter-group')
    // set filter for group
    filters[filterGroup] = $button.attr('data-filter')
    // combine filters
    var filterValue = concatValues(filters)
    // set filter for Isotope
    $grid.isotope({ filter: filterValue })
  })

  // change is-checked class on buttons
  $('.button-group').each(function (i, buttonGroup) {
    var $buttonGroup = $(buttonGroup)
    $buttonGroup.on('click', 'button', function (event) {
      $buttonGroup.find('.is-checked').removeClass('is-checked')
      var $button = $(event.currentTarget)
      $button.addClass('is-checked')
    })
  })

  // flatten object by concatting values
  function concatValues(obj) {
    var value = ''
    for (var prop in obj) {
      value += obj[prop]
    }
    return value
  }
})

jQuery(window).on('load', function () {
  $('.grid').isotope({
    itemSelector: '.color-shape',
  })
})

//   function refreshHeight() {
//     var navHeight = $('nav').innerHeight()
//     var starHeight = $('.star-banner-wrapper').innerHeight()
//     var offset = navHeight + starHeight

//     $('#container').css('height', 'calc(102vh - ' + offset + 'px)')
//     $('.centered-hero').css('min-height', 'calc(102vh - ' + offset + 'px)')
//     console.log(navHeight, starHeight, offset)
//   }

//   function updateOffsetAndRefresh() {
//     setTimeout(refreshHeight, 300) // Wait 300 milliseconds after orientation change
//   }

//   // Initial call to set layout based on window size
//   refreshHeight()

//   // Update layout on window resize or orientation change
//   $(window).on('resize orientationchange', updateOffsetAndRefresh)

//   // Recalculate navHeight after orientation change with a slight delay
//   window.addEventListener('orientationchange', function () {
//     setTimeout(refreshHeight, 500) // Wait 500 milliseconds after orientation change
//   })

$(document).ready(function () {
  // Function to toggle display property
  $('#startbtn').click(function () {
    $('#getstarted').addClass('active')
    $('#hero').removeClass('active')
    $('#hero').addClass('active2')
    console.log('btn clciked')
  })

  $('#sometimesBtn, #fulltimeBtn').click(function () {
    $('#space').addClass('active')
    $('#getstarted').removeClass('active')
    $('#getstarted').addClass('active2')
  })
  $('#teamBtn1, #teamBtn2, #teamBtn3').click(function () {
    $('#team').addClass('active')
    $('#space').removeClass('active')
    $('#space').addClass('active2')
  })

  $('#privacy, #collaboration').click(function () {
    $('#results').addClass('active')
    $('#team').removeClass('active')
    $('#team').addClass('active2')
  })
})

function refreshHeight() {
  $('.centered-hero').css('height', 'calc(100vh - 80px)')
}

function updateOffsetAndRefresh() {
  setTimeout(refreshHeight, 300) // Wait 300 milliseconds after orientation change
}

// Initial call to set layout based on window size
refreshHeight()

// Update layout on window resize or orientation change
$(window).on('resize orientationchange', updateOffsetAndRefresh)

// Recalculate navHeight after orientation change with a slight delay
window.addEventListener('orientationchange', function () {
  setTimeout(refreshHeight, 500) // Wait 500 milliseconds after orientation change
})
