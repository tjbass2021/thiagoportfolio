
$(document).ready(function(){
    let controle = false

    $('.menu-hamburguer').on('click', function(){
        if(controle === false){
            $('.menu-oculto').slideDown();
            $('.menu-oculto').addClass('visivel');
            controle = true;
        }else{
            $('.menu-oculto').slideUp();
            $('.menu-oculto').removeClass('visivel');
            controle = false;
        }
    })
})