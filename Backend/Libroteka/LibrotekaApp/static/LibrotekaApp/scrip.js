// Actualizar el número en el badge del carrito
function actualizarBadgeCarrito(cantidad) {
    $("#carritoBadge").text(cantidad);
}

// Llamar a esta función cuando se actualice el carrito
function actualizarCarrito() {
    // Lógica para obtener la cantidad actual de elementos en el carrito
    // Puedes obtener esta información desde tu backend o almacenarla en el lado del cliente
    var cantidadEnCarrito = obtenerCantidadEnCarrito(); // Reemplaza esto con tu lógica real

    // Actualizar el número en el badge del carrito
    actualizarBadgeCarrito(cantidadEnCarrito);
}

// Simula obtener la cantidad actual de elementos en el carrito
function obtenerCantidadEnCarrito() {
    // En este ejemplo, se devuelve un número aleatorio
    return Math.floor(Math.random() * 10);
}

// Configuración del carrusel
$(document).ready(function () {
    $('#carouselExampleAutoplaying').carousel();

    // Manejo de clics en botones de carrito
    $(".add-to-cart").click(function () {
        var productId = $(this).data("product-id");

        $.ajax({
            type: "POST",
            url: "{% url 'agregar_al_carrito' 0 %}".replace('0', productId),
            data: {
                product_id: productId,
                csrfmiddlewaretoken: '{{ csrf_token }}'
            },
            success: function (response) {
                console.log(response);
                // Después de agregar un nuevo elemento al carrito, actualiza el número en el badge
                actualizarCarrito();
                window.location.href = "{% url 'carrito' %}";
            },
            error: function (error) {
                console.log(error);
            }
        });
    });
});


