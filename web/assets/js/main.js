////Function to calculate and log page load time
function logPageLoadTime() {
  // Measure time when DOMContentLoaded event is fired
  var domContentLoadedTime = window.performance.now()
  console.log('DOM Content Loaded Time:', domContentLoadedTime.toFixed(2), 'ms')

  // Measure time when load event is fired
  window.addEventListener('load', function () {
    var loadTime = window.performance.now()
    console.log('Page Load Time:', loadTime.toFixed(2), 'ms')
  })
}

// Call the function when the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', function () {
  logPageLoadTime()

  // Now that the page is fully loaded, you can perform any other actions or show content
  //   $('#loadingDiv').fadeOut(100, function () {
  //     $('#prep').css('display', 'block')
  //   })

  $('#loadingDiv').fadeOut(100)
})

// window.onload = function () {
//   var startTime = performance.now() // Record start time

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

//     $.ajax({
//       type: 'GET',
//       url: 'https://urbanhub.frb.io',
//       complete: function () {
//         var endTime = performance.now() // Record end time
//         var loadingTime = endTime - startTime // Calculate loading time in milliseconds
//         console.log('Live Site Loading Time:', loadingTime.toFixed(2), 'ms')

//         $('#loadingDiv').fadeOut(100)
//         $('#prep').css('display', 'block')
//       },
//     })
// }
