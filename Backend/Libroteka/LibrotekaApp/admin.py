

from django.contrib import admin
from .models import Product, CarritoItem  # Corrige la importación

admin.site.register(Product)
admin.site.register(CarritoItem) 