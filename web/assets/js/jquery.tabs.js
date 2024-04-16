$(document).ready(function () {
  var $tabs = $('#horizontalTab')
  $tabs.responsiveTabs({
    rotate: false,
    startCollapsed: 'false',
    collapsible: 'accordion',
    setHash: true,
  })
})

$(function () {
  // Check if there's a hash in the URL
  var hash = window.location.hash
  if (hash) {
    var navHeight = $('.logo').height()
    var topLevelHeight = $('.dropdown p').height()
    var tabsOffset = 80
    var offset = navHeight + topLevelHeight + tabsOffset

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - offset,
      },
      300
    )
    console.log(topLevelHeight)
  }
})
