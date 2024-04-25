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
  $.ajax({
    type: 'GET',
    url: 'urbanhub.ddev.site', // Replace with your URL
    beforeSend: function () {
      $('#loadingDiv').fadeIn(300)
    },
    success: function (data) {
      console.log(data)
    },
    complete: function () {
      setTimeout(function () {
        $('#loadingDiv').fadeOut(300)
        $('#hideMe').css('display', 'block')
      }, 500)
    },
  })
}

///////////////////////////////////

// $(document).ajaxStart(function () {
//   $('#loadingDiv').fadeIn(300)
// })

// $(document).ajaxStop(function () {
//   setTimeout(function () {
//     $('#loadingDiv').fadeOut(300)
//   }, 500)
// })

// // Simulate an AJAX request when the button is clicked
// $('#triggerButton').click(function () {
//   $.ajax({
//     type: 'GET',
//     url: 'urbanhub.ddev.site', // Replace with your URL
//     success: function (data) {
//       console.log(data)
//     },
//   })
// })
