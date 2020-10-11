/*   $(document).ready(function(){
    $('#snow')
    .parent()
    .find('.title')
    .addClass('highlight');
  }); */

 /*  $(document).ready(function(){
    $('#Snow')
    .parent()
    .find('.title')
    .addClass('highlight')

  }); */

  $(document).ready(function(){
    $('.box').on('click',function(){
      $(this).toggleClass('highlight');
    })
  });