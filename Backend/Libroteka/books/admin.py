from django.contrib import admin

from .models import Book
from .models import Author


class BookAdmin(admin.ModelAdmin):
    list_display = ('title', 'id_Author', 'genre', 'description', 'price', 'stock')

class AuthorAdmin(admin.ModelAdmin):
    list_display = ('name', 'country')


admin.site.register(Book, BookAdmin)
admin.site.register(Author, AuthorAdmin)
