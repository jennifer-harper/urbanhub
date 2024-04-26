// document.addEventListener('DOMContentLoaded', function () {
//     var $grid = $('.grid').isotope({
//       itemSelector: '.grid-item',
//       layoutMode: 'fitRows',
//       fitRows: {
//         gutter: 20,
//       },
//       percentPosition: true,
//       masonry: {
//         // use element for option
//         columnWidth: '.grid-sizer',
//       },
//     })

//     // bind filter button click
//     $('.filters-button-group').on('click', 'button', function () {
//       var filterValue = $(this).attr('data-filter')
//       $grid.isotope({ filter: filterValue })
//     })
//     // change is-checked class on buttons
//     $('.button-group').each(function (i, buttonGroup) {
//       var $buttonGroup = $(buttonGroup)
//       $buttonGroup.on('click', 'button', function () {
//         $buttonGroup.find('.is-checked').removeClass('is-checked')
//         $(this).addClass('is-checked')
//       })
//     })
//   })

//   jQuery(window).on('load', function () {
//     $('.grid').isotope({
//       itemSelector: '.grid-item',
//     })
//   })
