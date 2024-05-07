import dataclasses
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from django.db.models import Sum
from django.http import JsonResponse
from django.shortcuts import render, redirect, get_object_or_404
from LibrotekaApp.models import Carrito, Product, CarritoItem, Libro



def tu_vista(request):
    return render(request, 'tu_template.html')

def pagina_de_error(request):
    return render(request, 'LibrotekaApp/pagina_de_error.html')

def index(request):
    return render(request, 'LibrotekaApp/sobreNosotros.html')

def sobreNosotros(request):
    return render(request, 'LibrotekaApp/sobreNosotros.html')

def categorias(request):
    return render(request, 'LibrotekaApp/categorias.html', {'data': dataclasses})

def mas_vendidos(request):
    return render(request, 'LibrotekaApp/mas_vendidos.html')

def contacto(request):
    return render(request, 'LibrotekaApp/contacto.html')

def create(request):
    return render(request, 'LibrotekaApp/create.html')

def forgot_password(request):
    return render(request, 'LibrotekaApp/forgot_password.html')

def login_view(request):
    return render(request, 'LibrotekaApp/login.html')

@login_required
def login_custom(request):
    return render(request, 'LibrotekaApp/login_custom.html')

def login_standard(request):
    return render(request, 'LibrotekaApp/login.html')

def redes_sociales(request):
    return render(request, 'LibrotekaApp/redessociales.html')

def inicio(request):
    libros = Libro.objects.all()  

    context = {
        'libros': libros,
    }

    return render(request, 'LibrotekaApp/inicio.html', context) 


def mostrar_libro(request, libro_id):
    template_name = f'LibrotekaApp/libros_templates/Libro{libro_id}.html'
    return render(request, template_name)

def mostrar_libro2(request):
    return render(request, 'LibrotekaApp/mostrar_libro2.html')

def mostrar_libro3(request):
    return render(request, 'LibrotekaApp/mostrar_libro3.html')

def mostrar_libro4(request):
    return render(request, 'LibrotekaApp/mostrar_libro4.html')

def mostrar_libro5(request):
    return render(request, 'LibrotekaApp/mostrar_libro5.html')

def mostrar_libro6(request):
    return render(request, 'LibrotekaApp/mostrar_libro6.html')

def mostrar_libro7(request):
    return render(request, 'LibrotekaApp/mostrar_libro7.html')

def mostrar_libro8(request):
    return render(request, 'LibrotekaApp/mostrar_libro8.html')


@login_required
def carrito(request):
    try:
        carrito_items = CarritoItem.objects.filter(usuario=request.user)
        total = sum(item.producto.price * item.cantidad for item in carrito_items)
        carrito_count = carrito_items.aggregate(Sum('cantidad'))['cantidad__sum'] or 0
    except Exception as e:
        messages.error(request, "Error al obtener elementos del carrito. Inténtelo de nuevo más tarde.")
        return redirect('pagina_de_error')

    return render(request, 'LibrotekaApp/carrito.html', {'carrito_items': carrito_items, 'total': total, 'carrito_count': carrito_count})


@login_required
def agregar_al_carrito(request, producto_id):
    producto = get_object_or_404(Product, pk=producto_id)
    carrito_item, created = CarritoItem.objects.get_or_create(
        producto=producto,
        usuario=request.user,
    )
    
    if not created:
        carrito_item.cantidad += 1
        carrito_item.save()
        mensaje = f"{producto.title} se ha agregado al carrito."
    else:
        carrito_item.cantidad = 1
        carrito_item.save()
        mensaje = f"{producto.title} se ha agregado al carrito por primera vez."
    
    messages.success(request, mensaje)
    return redirect('ver_carrito')  

@login_required
def ver_carrito(request):
    try:
        carrito_items = CarritoItem.objects.filter(usuario=request.user)
        total = sum(item.producto.price * item.cantidad for item in carrito_items)
        carrito_count = carrito_items.aggregate(Sum('cantidad'))['cantidad__sum'] or 0
    except Exception as e:
        messages.error(request, "Error al obtener elementos del carrito. Inténtelo de nuevo más tarde.")
        return redirect('pagina_de_error')

    return render(request, 'LibrotekaApp/carrito.html', {'carrito_items': carrito_items, 'total': total, 'carrito_count': carrito_count})

@login_required
def obtener_numero_actual_del_carrito(request):
    try:
        numero_actual_carrito = CarritoItem.objects.filter(usuario=request.user).aggregate(Sum('cantidad'))['cantidad__sum'] or 0
    except Exception as e:
        return JsonResponse({'carritoCount': 0})

    return JsonResponse({'carritoCount': numero_actual_carrito})



def pagina_de_producto(request, product_id):
    product = get_object_or_404(Product, id=product_id)
    return render(request, 'pagina_de_producto.html', {'product': product})

def add_to_cart(request, product_id):
    product = get_object_or_404(Product, id=product_id)
    user = request.user

