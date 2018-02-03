# Formulario para la p�gina NeedArt!

En esta pr�ctica hemos integrado un formalario de registro para nuestro escaparate virtual.

## Proceso de creaci�n del formulario:

Creamos un formulario con todos los campos obligatorios de nombre, apellidos, direcci�n de correo, contrase�a y confirmar contrase�a. Y los opcionales sexo, fecha de nacimiento, direcci�n, n� de tarjeta de cr�dito y dos checkbox de recibir notificaciones y revista digital.
La estructura del formulario la implementamos en HTML5 y con css le dimos estilo para que se integrara con el estilo de la p�gina.

+**1.Requisitos funcionales** 
Uno de los requisitos de la pr�ctica era que se validaran los datos introducidos por el usuario.
Para ello utilizamos las restricciones que nos proporciona HTML5 con la etiqueta type y pattern y funciones de JavaScript.
Con JavaScript tambi�n le dotamos al formulario de interactividad, al cambiar los mensajes de error predeterminados de HTML5.

Para validar los diferentes campos obligatorios primero deben pasar los filtros de patern y type que hemos establecido para cada tipo en el HTML5, tambi�n para que el usuario no deje ning�n campo vac�o hemos puesto a estos campos el atributo required.
La validaci�n con JS consiste en seleccionar el input del formulario que queramos validar a trav�s de su id, lanzamos un evento que al hacer keyup de una tecla del teclado y lance la funcion, que comprueba si no se cumple la expresi�n regular y si est� vacio el input del elemento, si es as� se lanza un mensaje de error personalizado para  informar al usuario.
Ejemplo de validaci�n:

form["email"].addEventListener("keyup", function(){
    var expReg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:[a-zA-Z0-9-]+)*(\.{1})([a-z]){2,3}$/g;
    if(!expReg.test(form["email"].value) || form["email"].value == ""){
        form["email"].setCustomValidity("La direcci�n de email debe tener el patron example@ejemplo.com");
    }
    else{
        form["email"].setCustomValidity("");
    }
});

Para la confirmaci�n de la contrase�a lo que hicimos fue comparar el valor del input de password con el de passwordAgain.

form["passwordAgain"].addEventListener("keyup", function(){
    var expReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W)[A-Za-z\d\W]{8,15}$/g;
    if(form["password"].value !== form["passwordAgain"].value){
        form["passwordAgain"].setCustomValidity("La contrase�as deben coincidir");
    }
    else{
        form["passwordAgain"].setCustomValidity("");
    }
});

+Campos no obligatorios:
Los campos no obligatorios los validamos con las propiedades de HTML5.

+Creaci�n del input pais utilizando JavaScript:
Para que la p�gina y el registro sean totalmente inclusivos creamos un <select> con todos los paises del mundo generados por una funci�n que recorre con un forEach un array con todos los pa�ses del mundo y para cada pa�s crea una etiqueta <option> con el atributo value igual al pa�s y lo enlaza con el select del HTML.


+Tarjeta de Cr�dito:
Este campo solo pod�a aparecer �nicamente cuando se indique una direcci�n y el pa�s, para ello realizmos una funci�n que comprueba que los campos de direcci�n y pa�s no est�n vac�os, si esto se cumple crea un <input> con un atributo type igual a number. Si en un principio se rellena pero se borran campos hacemos otra comprobaci�n para que el <input> desaparezca.

+Checkbox:
Con la etiqueta checkbox a�adimos las opciones de notificaci�n de novedades y recepci�n de la revista digital.

+**2.Requisitos t�cnicos:**
- Para indicar de forma visible los campos que son obligatorios a�adimos en sus correspodientes <label> un (*).

- Si los datos son correctos, mostrar� un mensaje que indique que usuario se registr� correctamente y crear� una una cookie con el nombre del usuario y su password hasheado.

- Al hacer login se comprobar� en las cookies si existe para ese usuario y la contrase�a es correcta, en ese caso creara otra cookie para dejar abierta la sesi�n para ese usuario. Tambi�n se a�adir� la opci�n de cerrar sesi�n que borrar� la cookie de sesi�n creada anteriormente.

- No se podr� utilizar ning�n tipo de framework para la implementaci�n del formulario.

+**3.Funciones para las cookies**

-Cookie de usuario que se crea cuando completa el formulario de registro:
Para crear las cookies hemos hecho la funci�n setCookie que recibe el nombre, la contrase�a y un valor num�rico que es el tiempo en el que se borrar� la cookie. La funci�n crea un par clave-valor con el nombre y la contrase�a que el usuario ha introducido al rellenar el formulario de registro. Esta funci�n la llamamos en el momento que que se pulsa el bot�n de registro y se ha validado correctamente el formulario.

La funci�n getCookie lo que hace es coger los datos del nombre y la contrase�a y comprueba si esas credenciales coinciden con la cookie de alg�n usuario registrado. 


-Cookie de sesi�n que se crea cuando el usuario hace el login:
Cuando el usuario rellena los campos del login se llama a una funci�n que esta a su vez llama a getCookie y comprueba que el nombre y la contrase�a cifrada est�n en las cookies creadas al hacer el registro(cookie de usuario), si es as�, se llama a la funci�n setCookie que crea la cookie de sesi�n y se muestra un mensaje de bienvenida. Si no es as� se muestra un mensaje de que las credenciales no son correctas.

-Encriptar contrase�as: 
PAra encriptar las contrase�as se ha buscado un c�digo de cifrado en [js-sha256]{@link https://github.com/emn178/js-sha256}

+**4.Pruebas automatizadas**
Hemos realizado 10 pruebas automatizadas para validar el formulario utilizando el plugin de Selenium para Chrome junto con el servidor ligero que utilizamos para la pr�ctica de migas de pan.
-Prueba 1: Se completa el formulario sin errores.
-Prueba 2: Se introduce mal el nombre.
-Prueba 3: Se introduce mal el apellido.
-Prueba 4: Se introduce mal el email.
-Prueba 5: Se introduce mal la contrase�a.
-Prueba 6: No se introduce nombre.
-Prueba 7: No se introduce apellido.
-Prueba 8: No se introduce email.
-Prueba 9: No se introduce contrase�a.
-Prueba 10: Solo se rellenan los campos obligatorios.

#### Autora

s
 **Gema de la Fuente Romero** - [Github](https://github.com/Gema-de-la-Fuente)
 **Mar�a Villalobos Mart�n** - [Github](https://github.com/mariavm6)