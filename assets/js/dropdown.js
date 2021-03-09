$('.header-span').click(function () { 
    if ($('#dropdown-menu').first().is(":hidden") ){
        $('#dropdown-menu').css({'padding-top': '10px'})
        $('#dropdown-menu').slideDown("slow");

    }else{
        $('#dropdown-menu').hide();
    }
        
});