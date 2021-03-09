$('.header-span').click(function () { 
    if ($('#dropdown-menu').first().is(":hidden") ){
        $('#dropdown-menu').css({'padding-top': '10px'});

        $('#dropdown-menu').slideToggle();

    }else{
        $('#dropdown-menu').hide();
    }
        
});