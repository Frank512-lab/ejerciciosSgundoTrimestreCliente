document.addEventListener("DOMContentLoaded", function () {

    // Añadimos un evento listener y empezamos con dos constantes que mediante el método querySelector
    //  nos hacemos con los datos que nos interesa. Es interesante usar indistintamente querySelector
    //  o getElementById dependiendo de la circunstancia.

    const formulario = document.querySelector(".formulario-principal");
    const tablaBody = document.querySelector("table tbody");

    formulario.addEventListener("submit", function (event) {
        event.preventDefault(); //Hacemos que el formulario no se envíe hasta que se procese por completo

        const formData = new FormData(formulario);

        // Enviar datos a guardar.php usando fetch


        fetch("guardar.php", {
            method: "POST",
            body: formData,
        })
            .then((response) => response.text())
            .then((data) => {
                console.log(data); 

                // Si hay un mensaje de "No hay datos registrados", lo eliminamos

                const mensajeNoDatos = document.querySelector("#mensaje-vacio");
                if (mensajeNoDatos) {
                    mensajeNoDatos.remove();
                }

                // Con los datos del fetch construimos la tabla

                const nuevaFila = document.createElement("tr");

                for (const valor of formData.values()) {
                    const celda = document.createElement("td");
                    celda.textContent = valor;
                    nuevaFila.appendChild(celda);
                }

                // Agregamos cada una de las filas

                tablaBody.appendChild(nuevaFila);

                // Limpiamos el formulario

                formulario.reset();
            })
            .catch((error) => console.error("Error:", error));
    });
});
