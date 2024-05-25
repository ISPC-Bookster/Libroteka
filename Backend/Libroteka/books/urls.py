from django.urls import path, include
from rest_framework.routers import DefaultRouter
from knox import views as knox_views

from .views import AuthorViewSet, EditorialViewSet, GenreViewSet, OrderViewSet, OrderStatusViewSet, BookViewSet, RegisterAPI, LoginAPI


router = DefaultRouter()
router.register(r'authors', AuthorViewSet)
router.register(r'editorials', EditorialViewSet)
router.register(r'genres', GenreViewSet)
router.register(r'orders', OrderViewSet)
router.register(r'ordersStatus', OrderStatusViewSet)
router.register(r'books', BookViewSet)

urlpatterns = [
    path('registro/', RegisterAPI.as_view(), name='register'),
    path('login/', LoginAPI.as_view(), name='login'),
    path('logout/', knox_views.LogoutView.as_view(), name='logout'),
    path('logoutall/', knox_views.LogoutAllView.as_view(), name='logoutall'),
    path('', include(router.urls)),
]
