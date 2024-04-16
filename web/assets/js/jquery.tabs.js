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
