$(document).ready(function () {
  var $tabs = $('#horizontalTab')
  $tabs.responsiveTabs({
    rotate: false,
    startCollapsed: 'false',
    collapsible: 'accordion',
    setHash: true,
  })
})

$('.mobile-only').each(function () {
  var text = $(this).text()
  var newText = text.replace(/(Urban)(\w*)/g, '$1<i>$2</span>')
  $(this).html(newText)
})

$(document).ready(function () {
  $('#horizontalTab').on('click', 'a:not(.btn a)', function (event) {
    event.preventDefault() // Prevent default anchor behavior

    var target = $(this).attr('href') // Get the target tab content ID
    var offsetTop = $(target).offset().top // Calculate the top offset position of the target tab content

    var navBar = $('.navbar').outerHeight()
    var tabss = $('.r-tabs-accordion-title.r-tabs-state-active').innerHeight()
    var navHeight = navBar + tabss

    console.log(navBar, ',', tabss)

    $('html, body').animate(
      {
        scrollTop: offsetTop - navHeight,
      },
      600
    )
  })
})
