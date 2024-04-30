// external js: isotope.pkgd.js
document.addEventListener('DOMContentLoaded', function () {
  // init Isotope
  var $grid = $('.grid').isotope({
    itemSelector: '.color-shape',
    masonry: {
      fitWidth: true,
      gutter: 10,
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

//need queries to update on browser changes
var navHeight = $('nav').innerHeight()
var starHeight = $('.star-banner-wrapper').innerHeight()

var offset = navHeight + starHeight

$('#container').css('height', 'calc(102vh - ' + offset + 'px)')
$('.centered-hero').css('min-height', 'calc(100vh - ' + offset + 'px)')
console.log(navHeight, starHeight, offset)
