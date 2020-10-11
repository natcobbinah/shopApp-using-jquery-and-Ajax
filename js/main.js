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

 /*  $(document).ready(function(){
    $('.box').on('click','.box-button',function(){
      $(this).parent().toggleClass('highlight');
    })
  }); */

  /* $(document).ready(function(){
    $('#select-menu').on('change',function(){
      console.log("hello");
    });
  }); */

 /*  $(document).ready(function(){
    $('#select-menu').on('change',function(){
      let name = $('#select-menu option:selected').text();
      let distance = $('#select-menu option:selected').val();
      let price = $('#select-menu option:selected').data('price');
    
      if(distance){
         $('#feedback-message').text('You are signing up for a ' + name + ',which costs ' + price + ', to a distance of ' + distance + ' km');
      }else{
        $('#feedback-message').text('');
      }
    });
  }); */

  $(document).ready(function(){
    $('#input-name').on('keydown',function(){
      let name = $(this).val();
      $('#feedback-message').text('Pleased to meet you ,' + name)
    });
    
    $('a').on('click',function(event){
      event.preventDefault();
      $('#feedback-message').text('That\'s fine!');
    });
  });   