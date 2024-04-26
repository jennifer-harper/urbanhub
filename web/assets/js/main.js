//////////////
window.onload = function () {
  $('#prep').css('display', 'none')

  $.ajax({
    type: 'GET',
    complete: function () {
      //   setTimeout(function () {
      $('#loadingDiv').fadeOut(100)
      $('#prep').css('display', 'block')
      //   }, 500)
    },
  })
}
