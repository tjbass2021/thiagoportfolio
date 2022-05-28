
$(document).ready(function(){
    let controle = false

    $('.menu-hamburguer').on('click', function(){
        if(controle === false){
            $('.menu-oculto').addClass('visivel');
            $('.menu-hamburguer').addClass('menu-hamburguer-oculto');
            $('.exit').addClass('exit-visivel');
            controle = true;
        }
    })
    $('.exit').on('click', function(){
        if(controle === true){
            $('.menu-oculto').removeClass('visivel');
            $('.menu-hamburguer').removeClass('menu-hamburguer-oculto');
            $('.exit').removeClass('exit-visivel');
            controle = false;
        }
    })
})
