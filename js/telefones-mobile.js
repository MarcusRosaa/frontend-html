$(function(){
    
   $('.help').click(function(){
    var telefonesMobile = $('.telefones-mobile');

    if(telefonesMobile.is(':hidden') == true){
        telefonesMobile.css('display', 'flex');
    }else{
        telefonesMobile.css('display', 'none');
    }
   });
   
})
