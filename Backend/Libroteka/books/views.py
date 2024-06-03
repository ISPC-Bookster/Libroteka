from django.http import JsonResponse
from django.shortcuts import render
from django.views import View
from rest_framework import viewsets, generics, permissions, status
from rest_framework.views import APIView
from django.shortcuts import render
from django.views import View
from rest_framework.response import Response
from knox.models import AuthToken
from knox.views import LoginView as KnoxLoginView
from django.contrib.auth import login
from rest_framework.authtoken.serializers import AuthTokenSerializer

from .models import Author, Editorial, User, Genre, Order, OrderStatus, Book, Role, UsersLibroteka
from .serializer import (
    AuthorSerializer, EditorialSerializer, UserSerializer, RegisterSerializer, 
    GenreSerializer, BookSerializer, RoleSerializer, UsersLibrotekaSerializer
)

# ViewSets for different models
from django.db.models import Q
from rest_framework.permissions import AllowAny

class AuthorViewSet(viewsets.ModelViewSet):
    queryset = Author.objects.all()
    serializer_class = AuthorSerializer

class EditorialViewSet(viewsets.ModelViewSet):
    queryset = Editorial.objects.all()
    serializer_class = EditorialSerializer

class GenreViewSet(viewsets.ModelViewSet):
    queryset = Genre.objects.all()
    serializer_class = GenreSerializer

class BookViewSet(viewsets.ModelViewSet):
    queryset = Book.objects.all()
    serializer_class = BookSerializer

class UsersLibrotekaViewSet(viewsets.ModelViewSet):
    queryset = UsersLibroteka.objects.all()
    serializer_class = UsersLibrotekaSerializer

class LibrosView(APIView):
    permission_classes = [AllowAny] 

    def get(self, request):
        books = Book.objects.all()
        books_data = BookSerializer(books, many=True).data
        return Response(books_data, status=status.HTTP_200_OK)
    

class BusquedaLibrosView(APIView):
    permission_classes = [AllowAny] 

    def get(self, request):
        criterio = request.GET.get('criterio')
        value = request.GET.get('value')

        if not criterio or not value:
            return Response({'error': 'Criterio y valor son requeridos'}, status=status.HTTP_400_BAD_REQUEST)

        if criterio == 'author':
            books = Book.objects.filter(id_Author__name__icontains=value)
        elif criterio == 'genre':
            books = Book.objects.filter(id_Genre__name__icontains=value)
        elif criterio == 'editorial':
            books = Book.objects.filter(id_Editorial__name__icontains=value)
        elif criterio == 'title':
            books = Book.objects.filter(title__icontains=value)
        else:
            return Response({'error': 'Criterio de búsqueda no válido'}, status=status.HTTP_400_BAD_REQUEST)
        if not books.exists():
            return Response({'message': 'No se encontraron libros que coincidan con la búsqueda'}, status=status.HTTP_200_OK)  
        books_data = BookSerializer(books, many=True).data
        return Response(books_data, status=status.HTTP_200_OK)

class GetBooksByAuthorOrGenreOrTitleView(View):
    def get(self, request, *args, **kwargs):
        criterio = kwargs.get('criterio')
        value = kwargs.get('value')
        if criterio == 'author':
            books = Book.objects.filter(id_Author__name__icontains=value)
        elif criterio == 'genre':
            books = Book.objects.filter(id_Genre__name__icontains=value)
        elif criterio == 'editorial':
            books = Book.objects.filter(id_Editorial__name__icontains=value)
        else:
            return JsonResponse({'error': 'Invalid search criterion'}, status=400)
        data = [{'title': book.title, 
                 'author': book.id_Author.name, 
                 'genre': book.id_Genre.name, 
                 'editorial': book.id_Editorial.name,
                 'description': book.description,
                 'price': book.price,
                 'stock': book.stock} for book in books]
        return JsonResponse(data, safe=False)
   
class RegisterAPI(generics.GenericAPIView):
    serializer_class = RegisterSerializer
    permission_classes = [permissions.AllowAny]

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "token": AuthToken.objects.create(user)[1]
        })

# Login API
class LoginAPI(KnoxLoginView):
    permission_classes = [permissions.AllowAny]

    def post(self, request, format=None):
        serializer = AuthTokenSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        login(request, user)
        return super().post(request, format=None)

class RoleListCreateAPIView(generics.ListCreateAPIView):
    queryset = Role.objects.all()
    serializer_class = RoleSerializer
    permission_classes = [permissions.IsAdminUser]

class RoleRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Role.objects.all()
    serializer_class = RoleSerializer
    permission_classes = [permissions.IsAdminUser]        


class UsersLibrotekaListCreate(APIView):
    def get(self, request):
        users = UsersLibroteka.objects.all()
        serializer = UsersLibrotekaSerializer(users, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = UsersLibrotekaSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)