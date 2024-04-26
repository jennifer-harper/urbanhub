//////////////
window.onload = function () {
  $('#prep').css('display', 'none')
  var startTime = performance.now() // Record start time

  //   $.ajax({
  //     type: 'GET',
  //     url: 'https://urbanhub.ddev.site/',
  //     complete: function () {
  //       var endTime = performance.now() // Record end time
  //       var loadingTime = endTime - startTime // Calculate loading time in milliseconds
  //       console.log('Local Site Loading Time:', loadingTime.toFixed(2), 'ms')
  //       setTimeout(function () {
  //         $('#loadingDiv').fadeOut(100)
  //         $('#prep').css('display', 'block')
  //       }, 300)
  //     },
  //   })

  $.ajax({
    type: 'GET',
    url: 'https://urbanhub.frb.io',
    complete: function () {
      var endTime = performance.now() // Record end time
      var loadingTime = endTime - startTime // Calculate loading time in milliseconds
      console.log('Live Site Loading Time:', loadingTime.toFixed(2), 'ms')

      $('#loadingDiv').fadeOut(100)
      $('#prep').css('display', 'block')
    },
  })
}
