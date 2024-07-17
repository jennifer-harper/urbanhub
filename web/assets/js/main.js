//Function to calculate and log page load time
function logPageLoadTime() {
  // Measure time when DOMContentLoaded event is fired
  var domContentLoadedTime = window.performance.now()
  //   console.log('DOM Content Loaded Time:', domContentLoadedTime.toFixed(2), 'ms')

  // Measure time when load event is fired
  window.addEventListener('load', function () {
    var loadTime = window.performance.now()
    // console.log('Page Load Time:', loadTime.toFixed(2), 'ms')
  })
}

// Call the function when the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', function () {
  logPageLoadTime()

  $('#loadingDiv').fadeOut(100)
})
