

/*--------- LISTA DE PAISES ------------*/

window.onload = function(){
    listaPaises();
}

function listaPaises(){

    var paises = ["","Afganistán","Albania","Alemania","Andorra","Angola","Antigua y Barbuda","Arabia Saudita","Argelia","Argentina","Armenia","Australia","Austria","Azerbaiyán","Bahamas","Bangladés","Barbados","Baréin","Bélgica","Belice","Benín","Bielorrusia","Birmania","Bolivia","Bosnia-Herzegovina","Botsuana","Brasil","Brunéi	Bandar","Bulgaria","Burkina Faso","Burundi","Bután","Cabo Verde","Camboya","Camerún","Canadá","Catar","Chad","Chile","China","Chipre","Colombia","Comoras","Congo","Corea del Norte","Corea del Sur","Costa de Marfil","Costa Rica","Croacia","Cuba","Dinamarca","Dominica","Ecuador","Egipto","El Salvador","Emiratos Árabes Unidos","Eritrea","Eslovaquia","Eslovenia","España","Estados Unidos","Estonia","Etiopía","Filipinas","Finlandia","Fiyi","Francia","Gabón","Gambia","Georgia","Ghana","Granada","Grecia","Guatemala","Guinea","Guinea Ecuatorial","Guinea-Bisáu","Guyana","Haití","Honduras","Hungría","India","Indonesia","Irak","Irán","Irlanda","Islandia","Islas Marshall","Islas Salomón","Israel","Italia","Jamaica","Japón","Jordania","Kazajistán","Kenia","Kirguistán","Kiribati","Kosovo","Kuwait","Laos","Lesoto","Letonia","Líbano","Liberia","Libia","Liechtenstein","Lituania","Luxemburgo","Macedonia","Madagascar","Malasia","Malaui","Maldivas","Malí","Malta","Marruecos","Mauricio","Mauritania","México","Micronesia","Moldavia","Mónaco","Mongolia","Montenegro","Mozambique","Namibia","Nauru","Nepal","Nicaragua","Níger","Nigeria","Noruega","Nueva Zelanda","Omán","Países Bajos","Pakistán","Palaos","Palestina","Panamá","Papúa Nueva Guinea","Paraguay","Perú","Polonia","Portugal","Reino Unido","República Centroafricana","República Checa","República Democrática del Congo","República Dominicana","Ruanda","Rumania","Rusia","Samoa","San Cristóbal y Nieves","San Marino","San Vicente y las Granadinas","Santa Lucía","Santo Tomé y Príncipe","Senegal","Serbia","Seychelles","Sierra Leona","Singapur","Siria","Somalia","Sri Lanka","Suazilandia","Sudáfrica","Sudán","Sudán del Sur","Suecia","Suiza","Surinam","Tailandia","Taiwán","Tanzania","Tayikistán","Timor","Togo","Tonga","Trinidad y Tobago","Túnez","Turkmenistán","Turquía","Tuvalu","Ucrania","Uganda","Uruguay","Uzbekistán","Vanuatu","Vaticano","Venezuela","Vietnam","Yemen","Yibuti","Zambia","Zimbabue"];

    var select = document.getElementById("inputPais"),
        option;

    paises.forEach(pais => {
        option = document.createElement("option");
        option.setAttribute("value", pais);
        option.innerHTML = pais;
        select.appendChild(option);
    });
}

/*--------- INPUT TARJETA ------------*/

function expandirFormulario(){
    var pais=document.getElementById("inputPais").value;
    var direccion=document.getElementById("inputDirec").value;
    var flag = document.getElementById('expandir').firstChild;
    var select = document.getElementById("expandir");

    if(pais!="" && direccion!="" && flag==null){
        var inputTar = document.createElement("input");
        inputTar.setAttribute("type", Number);
        select.appendChild(inputTar);

    }else if ((pais=='' || direccion=='') && flag!=null) {
        select.removeChild(select.childNodes[0]);
    }
}

/*--------- VALIDACIONES ------------*/
var form = document.forms["formulario"];

form["nombre"].addEventListener("keyup", function(){
    var expReg = /[A-Za-z]{2,15}/g;
    if(!expReg.test(form["nombre"].value) || form["nombre"].value == ""){
        form["nombre"].setCustomValidity("Introduzca un nombre que contenga entre 2 y 15 caracteres");
    }
    else{
        form["nombre"].setCustomValidity("");
    }
});

form["apellidos"].addEventListener("keyup", function(){
    var expReg = /[A-Za-z]{2,15}/g;
    if(!expReg.test(form["apellidos"].value) || form["apellidos"].value == ""){
        form["apellidos"].setCustomValidity("Introduzca un apellido que contenga entre 2 y 15 caracteres");
    }
    else{
        form["apellidos"].setCustomValidity("");
    }
});

form["email"].addEventListener("keyup", function(){
    var expReg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:[a-zA-Z0-9-]+)*(\.{1})([a-z]){2,3}$/g;
    if(!expReg.test(form["email"].value) || form["email"].value == ""){
        form["email"].setCustomValidity("La dirección de email debe tener el patron example@ejemplo.com");
    }
    else{
        form["email"].setCustomValidity("");
    }
});

form["password"].addEventListener("keyup", function(){
    var expReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W)[A-Za-z\d\W]{8,15}$/g;
    var bool = ((!expReg.test(form["password"].value) || form["password"].value == ""));
    console.log(bool)
    if(bool){
        form["password"].setCustomValidity("La contraseña debe incluir una minúscula, una mayúscula, un número, un carácter especial y no tener espacios en blanco");
    }
    else{
        form["password"].setCustomValidity("");
    }
});

form["passwordAgain"].addEventListener("keyup", function(){
    var expReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W)[A-Za-z\d\W]{8,15}$/g;
    if(form["password"].value !== form["passwordAgain"].value){
        form["passwordAgain"].setCustomValidity("La contraseñas deben coincidir");
    }
    else{
        form["passwordAgain"].setCustomValidity("");
    }
});

/*--------- COOKIES ------------*/
function setCookie(cname,cvalue,exdays) {
   var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname, cvalue) {
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

function envio(){
    var name = document.getElementById('nombre').value;
    var password = document.getElementById('password').value;
    setCookie(name,password,1);
}
