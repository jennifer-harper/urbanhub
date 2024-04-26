//////////////
window.onload = function () {
  $('#prep').css('display', 'none')

  $.ajax({
    type: 'GET',
    url: 'urbanhub.frb.io',
    complete: function () {
      //   setTimeout(function () {
      $('#loadingDiv').fadeOut()
      $('#prep').css('display', 'block')
      //   }, 500)
    },
  })
}
