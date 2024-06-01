from django.urls import path, include
from rest_framework.routers import DefaultRouter
from knox import views as knox_views

from .views import AuthorViewSet, BookViewSet, BusquedaLibrosView, EditorialViewSet, GenreViewSet, GetBooksByAuthorOrGenreOrTitleView, RegisterAPI, LoginAPI

router = DefaultRouter()
router.register(r'authors', AuthorViewSet)
router.register(r'editorials', EditorialViewSet)
router.register(r'genre', GenreViewSet)
router.register(r'book', BookViewSet)

urlpatterns = [
    path('registro/', RegisterAPI.as_view(), name='register'),
    path('login/', LoginAPI.as_view(), name='login'),
    path('logout/', knox_views.LogoutView.as_view(), name='logout'),
    path('logoutall/', knox_views.LogoutAllView.as_view(), name='logoutall'),
    path('buscar-libros/', BusquedaLibrosView.as_view(), name='buscar_libros'),
    path('', include(router.urls)),
]
