document.addEventListener("DOMContentLoaded", function () {

    /*El evento DOMContentLoaded se dispara cuando el documento HTML se ha cargado completamente*/

    function actualizarEstado() {

        /*Esta función se encarga de actualizar los textos de las tareas según el estado guardado en localStorage*/

        document.getElementById("estadoTarea1").textContent =
            
        /*Obtenemos el elemento con el id correspondiente y cambia su contenido de texto (textContent)*/
            
            "VERIFICAR PUERTA SUR: " +

        /*Esta es la parte del texto que se concatena con el estado de la tarea*/
            
            (localStorage.getItem("tarea1") === "true" ? "Completada" : "Pendiente");
        
        /*Utilizamos el valor almacenado en localStorage para determinar si la tarea está completada o pendiente. Si el valor de .getItem("tareaX") es "true", mostramos "Completada". Si no, se muestra "Pendiente".*/

        document.getElementById("estadoTarea2").textContent = "COMPROBAR PUERTAS INTERIORES: " + (localStorage.getItem("tarea2") === "true" ? "Completada" : "Pendiente");

        document.getElementById("estadoTarea3").textContent = "COMPROBAR VENTANAS: " + (localStorage.getItem("tarea3") === "true" ? "Completada" : "Pendiente");
        
        document.getElementById("estadoTarea4").textContent = "VERIFICAR RAMPA DE ACCESO: " + (localStorage.getItem("tarea4") === "true" ? "Completada" : "Pendiente");
        
        document.getElementById("estadoTarea5").textContent = "REVISAR CENTRALITA ANTIINCENDIOS: " + (localStorage.getItem("tarea5") === "true" ? "Completada" : "Pendiente");
        
        document.getElementById("estadoTarea6").textContent = "COMPROBAR PRESIÓN DE AIRE: " + (localStorage.getItem("tarea6") === "true" ? "Completada" : "Pendiente");
        
        document.getElementById("estadoTarea7").textContent = "VERIFICAR CIRCUITO CERRADO DE TV: " + (localStorage.getItem("tarea7") === "true" ? "Completada" : "Pendiente");
        
        document.getElementById("estadoTarea8").textContent = "DAR DE COMER AL GATO!!!: " + (localStorage.getItem("tarea8") === "true" ? "Completada" : "Pendiente");
    }

    
    window.addEventListener("storage", actualizarEstado);

    /*Para poder actualizar en tiempo real agregamos un listener que se dispara cada vez que hay un cambio en localStorage. De esta manera no necesitamos recargar la página.*/

    
    actualizarEstado();

    /*Llamada a la función una vez se ha cargado la página. Nos aseguramos que las tareas se actulicen automáticamente según los valores que ya están guardados en localStorage.*/
});
