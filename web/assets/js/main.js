// $('#loadingDiv')
//   .hide()
//   .ajaxStart(function () {
//     $(this).show() // show Loading Div
//   })
//   .ajaxStop(function () {
//     $(this).hide() // hide loading div
//   })

//////////////
window.onload = function () {
  $('#prep').css('display', 'none')
  //   $('#prep').hide()

  $.ajax({
    type: 'GET',
    complete: function () {
      setTimeout(function () {
        $('#loadingDiv').fadeOut(100)
        $('#prep').css('display', 'block')
        // $('#prep').show()
      }, 500)
    },
  })
}
