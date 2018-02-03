# Formulario para la página NeedArt!

En esta práctica hemos integrado un formalario de registro para nuestro escaparate virtual.

## Proceso de creación del formulario:

Creamos un formulario con todos los campos obligatorios de nombre, apellidos, dirección de correo, contraseña y confirmar contraseña. Y los opcionales sexo, fecha de nacimiento, dirección, nº de tarjeta de crédito y dos checkbox de recibir notificaciones y revista digital.
La estructura del formulario la implementamos en HTML5 y con css le dimos estilo para que se integrara con el estilo de la página.

+**1.Requisitos funcionales** 
Uno de los requisitos de la práctica era que se validaran los datos introducidos por el usuario.
Para ello utilizamos las restricciones que nos proporciona HTML5 con la etiqueta type y pattern y funciones de JavaScript.
Con JavaScript también le dotamos al formulario de interactividad, al cambiar los mensajes de error predeterminados de HTML5.

Para validar los diferentes campos obligatorios primero deben pasar los filtros de patern y type que hemos establecido para cada tipo en el HTML5, también para que el usuario no deje ningún campo vacío hemos puesto a estos campos el atributo required.
La validación con JS consiste en seleccionar el input del formulario que queramos validar a través de su id, lanzamos un evento que al hacer keyup de una tecla del teclado y lance la funcion, que comprueba si no se cumple la expresión regular y si está vacio el input del elemento, si es así se lanza un mensaje de error personalizado para  informar al usuario.
Ejemplo de validación:

form["email"].addEventListener("keyup", function(){
    var expReg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:[a-zA-Z0-9-]+)*(\.{1})([a-z]){2,3}$/g;
    if(!expReg.test(form["email"].value) || form["email"].value == ""){
        form["email"].setCustomValidity("La dirección de email debe tener el patron example@ejemplo.com");
    }
    else{
        form["email"].setCustomValidity("");
    }
});

Para la confirmación de la contraseña lo que hicimos fue comparar el valor del input de password con el de passwordAgain.

form["passwordAgain"].addEventListener("keyup", function(){
    var expReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W)[A-Za-z\d\W]{8,15}$/g;
    if(form["password"].value !== form["passwordAgain"].value){
        form["passwordAgain"].setCustomValidity("La contraseñas deben coincidir");
    }
    else{
        form["passwordAgain"].setCustomValidity("");
    }
});

+Campos no obligatorios:
Los campos no obligatorios los validamos con las propiedades de HTML5.

+Creación del input pais utilizando JavaScript:
Para que la página y el registro sean totalmente inclusivos creamos un <select> con todos los paises del mundo generados por una función que recorre con un forEach un array con todos los países del mundo y para cada país crea una etiqueta <option> con el atributo value igual al país y lo enlaza con el select del HTML.


+Tarjeta de Crédito:
Este campo solo podía aparecer únicamente cuando se indique una dirección y el país, para ello realizmos una función que comprueba que los campos de dirección y país no estén vacíos, si esto se cumple crea un <input> con un atributo type igual a number. Si en un principio se rellena pero se borran campos hacemos otra comprobación para que el <input> desaparezca.

+Checkbox:
Con la etiqueta checkbox añadimos las opciones de notificación de novedades y recepción de la revista digital.

+**2.Requisitos técnicos:**
- Para indicar de forma visible los campos que son obligatorios añadimos en sus correspodientes <label> un (*).

- Si los datos son correctos, mostrará un mensaje que indique que usuario se registró correctamente y creará una una cookie con el nombre del usuario y su password hasheado.

- Al hacer login se comprobará en las cookies si existe para ese usuario y la contraseña es correcta, en ese caso creara otra cookie para dejar abierta la sesión para ese usuario. También se añadirá la opción de cerrar sesión que borrará la cookie de sesión creada anteriormente.

- No se podrá utilizar ningún tipo de framework para la implementación del formulario.

+**3.Funciones para las cookies**

-Cookie de usuario que se crea cuando completa el formulario de registro:
Para crear las cookies hemos hecho la función setCookie que recibe el nombre, la contraseña y un valor numérico que es el tiempo en el que se borrará la cookie. La función crea un par clave-valor con el nombre y la contraseña que el usuario ha introducido al rellenar el formulario de registro. Esta función la llamamos en el momento que que se pulsa el botón de registro y se ha validado correctamente el formulario.

La función getCookie lo que hace es coger los datos del nombre y la contraseña y comprueba si esas credenciales coinciden con la cookie de algún usuario registrado. 


-Cookie de sesión que se crea cuando el usuario hace el login:
Cuando el usuario rellena los campos del login se llama a una función que esta a su vez llama a getCookie y comprueba que el nombre y la contraseña cifrada estén en las cookies creadas al hacer el registro(cookie de usuario), si es así, se llama a la función setCookie que crea la cookie de sesión y se muestra un mensaje de bienvenida. Si no es así se muestra un mensaje de que las credenciales no son correctas.

-Encriptar contraseñas: 
PAra encriptar las contraseñas se ha buscado un código de cifrado en [js-sha256]{@link https://github.com/emn178/js-sha256}

+**4.Pruebas automatizadas**
Hemos realizado 10 pruebas automatizadas para validar el formulario utilizando el plugin de Selenium para Chrome junto con el servidor ligero que utilizamos para la práctica de migas de pan.
-Prueba 1: Se completa el formulario sin errores.
-Prueba 2: Se introduce mal el nombre.
-Prueba 3: Se introduce mal el apellido.
-Prueba 4: Se introduce mal el email.
-Prueba 5: Se introduce mal la contraseña.
-Prueba 6: No se introduce nombre.
-Prueba 7: No se introduce apellido.
-Prueba 8: No se introduce email.
-Prueba 9: No se introduce contraseña.
-Prueba 10: Solo se rellenan los campos obligatorios.

#### Autora

s
 **Gema de la Fuente Romero** - [Github](https://github.com/Gema-de-la-Fuente)
 **María Villalobos Martín** - [Github](https://github.com/mariavm6)