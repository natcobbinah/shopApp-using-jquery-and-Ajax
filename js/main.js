var cart =0;

function addItem(id,name,description,price,moreInfo){
  let html='';
  html +='<div class="item" data-id="'+ id + '">';
  html +='<div class="name">' + name + '</div>';
  html +='<img src="assets/beach.jpg">';
  html +='<div class="description">' + description + '</div>';
  html +='<div class="price">' + price + '</div>';
  html +='<button class="item-add">Add to cart</button>';
  html +='<button class="item-remove">Remove</button>';
  html +='<br />';
  html +='<a class="more-info-link" href="#">More info</a>';
  html +='<div class="more-info">'+ moreInfo +'</div>';
  html +='</div>';

  $('#container').prepend(html);
};

$(document).ready(function(){
  /* $('#button-create-item').on('click',function(){
    let name=$('#input-new-item').val();
    $('#input-new-item').val('');

    $('#container').prepend(html);
  }); */

  $('#container').on('click','.more-info-link',function(event){
    event.preventDefault();

    $(this).parent().find('.more-info').slideToggle('slow');
    $(this).animate({"opacity":0.5, "margin-left" : 10} ,'fast')
           .animate({"opacity": 1, "margin-left" : 0},'fast');
  });

  $('#container').on('click','.item-remove',function(){
    $(this).parent().remove();
  });

  $.ajax('data/item.json',{
    dataType:'json',
    contentType:'application/json',
    cache: false
  })
  .done(function(response){
    let item = response.items;
    item.forEach(function(itemRetrieved){
      console.log(itemRetrieved)
      addItem(itemRetrieved.id,itemRetrieved.name, itemRetrieved.description,itemRetrieved.price,itemRetrieved.moreInfo);
    });
  })
  .fail(function(request,errorType,errorMessage){
    console.log(errorMessage);
  })
  .always(function(){

  });
  
   $('#container').on('click','.item-add',function(){
    let id=$(this).parent().data('id'); 
    $.ajax('data/addToCart.json',{
        data: {id: id},
        dataType: 'json',
        contentType: 'application/json'
      })
      .done(function(response){
        if(response.message ===  'success'){
          let price = response.price;
          
          cart += price;

          $('#cart-container').text('$' +  cart);
        }
    });
  }); 

  $('#newsletter-checkbox').on('change',function(){
    if($(this).is(':checked')){
      $('#newsletter-frequency').show().fadeIn();
    }else{
      $('#newsletter-frequency').hide().fadeOut();
    }
  });

  $('#newsletter-checkbox').trigger('change');
  
});

