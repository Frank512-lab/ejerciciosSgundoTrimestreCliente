document.addEventListener("DOMContentLoaded", function () {

    /*Aquí esperamos a que el contenido del documento HTML se haya cargado por completo antes de ejecutar cualquier código de JS. La función checkboxes se ejecutará cuando el HTML se haya cargado*/

    const checkboxes = document.querySelectorAll("input[type='checkbox']");

    /*La función checkboxes lo que hace es seleccionar las casillas de verificación dentro del documento. Con document.quereySelectorAll obtenemos todos los elementos que coinciden con "input[type='checkbox']". Básicamente lo que hacemos es guardar en la constante checkboxes las casillas de verificación para posteriormente poder acceder a todas ellas*/

    
    checkboxes.forEach((checkbox) => {
        const estadoGuardado = localStorage.getItem(checkbox.id);
        if (estadoGuardado === "true") {
            checkbox.checked = true;
        }
    });

    /*Tenemos que recorrer todo lo que almacena la constante checkboxes. Para ello usamos un forEach al que le pasamos como parámetro una función checkbox. Esta función se ejecutará para cada casilla de verificación. La constante estadoGuardado obtiene el valor almacenado en localStorage (que hemos conseguido mediante el método getItem y la id de la casilla de verificación correspondiente. Luego comparamos las cadenas de texto de estadoGuardado con la del localStorage (no es un booleano). El que hagamos coincidir estadoGuardado con localStorage es para que al recargar la página, siga estando marcada la casilla de verificación.*/

    
    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener("change", function () {
            localStorage.setItem(checkbox.id, checkbox.checked);
        });
    });

    /*Abrimos otro bucle forEach pero esta vez con un listener que reaccione cuando cambie el estado de una casilla de verificado a no verificado. Aquí tenemos el listener configurado para el evento change, que es el que se dispara al cambiar el estado de una casilla de verificación. Guardamos el valor en localStorage usando el id como clave y el checked como valor*/
});

