/* Author: 

*/


        
/* Выпадающий список */

$(document).ready(function() {
  
  $('.sparkbox-custom').sbCustomSelect({
    appendTo: 'body'
  });
  
});



/* Переключатели */

(function($) {
$(function() {

  $('ul.tabs').delegate('li:not(.current)', 'click', function() {
    $(this).addClass('current').siblings().removeClass('current')
      .parents('body').find('div.box').hide().eq($(this).index()).fadeIn(150);
  })

})
})(jQuery)
