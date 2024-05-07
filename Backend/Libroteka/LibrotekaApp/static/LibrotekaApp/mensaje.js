

document.addEventListener("DOMContentLoaded", function() {
    var miElemento = document.getElementById("miElemento");
    if (miElemento) {
        miElemento.innerHTML = "Nuevo texto";
    }

    var elementoOculto = document.getElementById("elementoOculto");
    if (elementoOculto) {
        elementoOculto.style.display = "none";
    }

    

    $.ajax({
        url: "/mi-endpoint",
        method: "GET",
        success: function (data) {
            console.log("Respuesta del servidor:", data);
        },
        error: function (xhr, status, error) {
            console.error("Error de solicitud AJAX:", error);
            console.log("Detalles del error:", xhr.responseText);
        }
    });
});