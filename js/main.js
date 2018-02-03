/*************** MENU DESPLEGABLE ***************/
$(document).ready(function() {
    $menu = $('.nav').find('ul').find('li');

    $menu.hover(function() {
        $(this).children('ul').stop();
        $(this).children('ul').slideDown();
    }, function() {
        $(this).children('ul').stop();
        $(this).children('ul').slideUp();
    });
});

/*************** CARRUSEL ***************/
$(document).ready(function(){
    var imgItems = $('.slider li').length; // Numero de Slides
    var imgPos = 1;

    // Agregando paginacion
    for(i = 1; i <= imgItems; i++){
        $('.pagination').append('<li><span class="fa fa-circle"></span></li>');
    } 

    $('.slider li').hide(); // Ocultanos todas las imagines
    $('.slider li:first').show(); // Mostramos la primera imagen
    $('.pagination li:first').css({'color': '#CD6E2E'}); // Damos estilos al primer item de la paginacion

    // Ejecutamos todas las funciones
    $('.pagination li').click(pagination);
    $('.right span').click(nextSlider);
    $('.left span').click(prevSlider);


    setInterval(function(){
        nextSlider();
    }, 4000);

    function pagination(){
        var paginationPos = $(this).index() + 1; // Posicion de la paginacion seleccionada

        $('.slider li').hide(); // Ocultamos todos los slides
        $('.slider li:nth-child('+ paginationPos +')').fadeIn(); // Mostramos el Slide seleccionado

        // Dandole estilos a la paginacion seleccionada
        $('.pagination li').css({'color': '#858585'});
        $(this).css({'color': '#CD6E2E'});

        imgPos = paginationPos;

    }

    function nextSlider(){
        if( imgPos >= imgItems){imgPos = 1;} 
        else {imgPos++;}

        $('.pagination li').css({'color': '#858585'});
        $('.pagination li:nth-child(' + imgPos +')').css({'color': '#CD6E2E'});

        $('.slider li').hide(); // Ocultamos todos los slides
        $('.slider li:nth-child('+ imgPos +')').fadeIn(); // Mostramos el Slide seleccionado

    }

    function prevSlider(){
        if( imgPos <= 1){imgPos = imgItems;} 
        else {imgPos--;}

        $('.pagination li').css({'color': '#858585'});
        $('.pagination li:nth-child(' + imgPos +')').css({'color': '#CD6E2E'});

        $('.slider li').hide(); // Ocultamos todos los slides
        $('.slider li:nth-child('+ imgPos +')').fadeIn(); // Mostramos el Slide seleccionado
    }


});

/*************** COOKIES ***************/

function getCookie(c_name){
    var c_value = document.cookie;
    var c_start = c_value.indexOf(" " + c_name + "=");
    if (c_start == -1){
        c_start = c_value.indexOf(c_name + "=");
    }
    if (c_start == -1){
        c_value = null;
    }else{
        c_start = c_value.indexOf("=", c_start) + 1;
        var c_end = c_value.indexOf(";", c_start);
        if (c_end == -1){
            c_end = c_value.length;
        }
        c_value = unescape(c_value.substring(c_start,c_end));
    }
    return c_value;
}

function setCookie(c_name,value,exdays){
    var exdate=new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
    document.cookie=c_name + "=" + c_value;
}

if(getCookie('usuarioRegistrado')!="1"){
    //document.getElementById("barraaceptacion").style.display="block";
}
function PonerCookie(){
    setCookie('usuarioRegistrado','1',365);
    document.getElementById("barraaceptacion").style.display="none";
}
