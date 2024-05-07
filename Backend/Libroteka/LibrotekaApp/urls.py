from django.urls import path
from django.contrib.auth.views import LoginView
from .views import (
     login_view, obtener_numero_actual_del_carrito, sobreNosotros, categorias, mas_vendidos, contacto, create, forgot_password,
    redes_sociales, inicio, mostrar_libro, carrito, tu_vista, pagina_de_producto,mostrar_libro2,mostrar_libro3,mostrar_libro4,mostrar_libro5,mostrar_libro6,mostrar_libro7,mostrar_libro8, ver_carrito,

)
from .views import inicio
from .views import obtener_numero_actual_del_carrito
from .views import tu_vista


urlpatterns = [
    path('', inicio, name='inicio'),
    path('sobreNosotros/', sobreNosotros, name='sobreNosotros'),
    path('categorias/', categorias, name='categorias'),
    path('mas_vendidos/', mas_vendidos, name='mas_vendidos'),
    path('contacto/', contacto, name='contacto'),
    path('create/', create, name='create'),
    path('forgot_password/', forgot_password, name='forgot_password'),
    path('login/', login_view, name='login'),
    path('redes_sociales/', redes_sociales, name='redes_sociales'),
    path('carrito/', ver_carrito, name='ver_carrito'),
    path('tu-ruta/', tu_vista, name='tu_vista'),
    path('obtener-carrito/', obtener_numero_actual_del_carrito, name='obtener_numero_actual_del_carrito'),
    path('libros/Libro<int:libro_id>/', mostrar_libro, name='mostrar_libro'),
    path('producto/<int:product_id>/', pagina_de_producto, name='pagina_de_producto'),
    path('mostrar_libro2/', mostrar_libro2, name='mostrar_libro2'),
    path('mostrar_libro3/', mostrar_libro3, name='mostrar_libro3'),
    path('mostrar_libro4/', mostrar_libro4, name='mostrar_libro4'),
    path('mostrar_libro5/', mostrar_libro5, name='mostrar_libro5'),
    path('mostrar_libro6/', mostrar_libro6, name='mostrar_libro6'),
    path('mostrar_libro7/', mostrar_libro7, name='mostrar_libro7'),
    path('mostrar_libro8/', mostrar_libro8, name='mostrar_libro8'),
   
]












