/********* LOGIN *********/
$('.login').submit(function(e){
    e.preventDefault();
    var nombre = document.getElementsByClassName('usuario')[0].value;
    var contras = document.getElementsByClassName("contrasenia")[0].value;
    if(getCookie(nombre)==sha256(contras)){
        setCookie('sesion', nombre);
        alert('Bienvenido de nuevo')
        $(this).unbind('submit').submit();
        var boton = document.getElementById("logout");
        boton.style.display="block";
       
    } else {
        alert('Credenciales Incorrectas');
    }

});


function setCookie(cname, cvalue, exdays) {
    if(exdays){
        var d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        var expires = "expires="+ d.toUTCString();

    } else expires = ' ';
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return null;
}

function logoutSesion(cname){
    document.cookie = "sesion=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}
