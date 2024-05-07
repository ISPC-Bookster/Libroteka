from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone

class Product(models.Model):
    title = models.CharField(max_length=255, verbose_name='Título', default='Título predeterminado')
    description = models.TextField(verbose_name='Descripción', default='Descripción predeterminada')
    price = models.DecimalField(max_digits=10, decimal_places=2, verbose_name='Precio')

    def __str__(self):
        return self.title

class Carrito(models.Model):
    usuario = models.ForeignKey(User, on_delete=models.CASCADE)
    items = models.ManyToManyField('CarritoItem', related_name='carrito_items')

    def __str__(self):
        return f'Carrito de {self.usuario.username}'

class CarritoItem(models.Model):
    carrito = models.ForeignKey(Carrito, on_delete=models.CASCADE, related_name='carrito_items')
    producto = models.ForeignKey(Product, on_delete=models.CASCADE)
    cantidad = models.IntegerField(default=0)
    cantidad_minima_permitida = models.IntegerField(default=1)

    def __str__(self):
        return f'{self.cantidad} x {self.producto.title} en {self.carrito}'

class TuModelo(models.Model):
    campo_fecha = models.DateTimeField(default=timezone.now)


class Libro(models.Model):
    title = models.CharField(max_length=255, verbose_name='Título', default='Título predeterminado')
    description = models.TextField(verbose_name='Descripción', default='Descripción predeterminada')
    price = models.DecimalField(max_digits=10, decimal_places=2, verbose_name='Precio')

    def __str__(self):
        return self.title











