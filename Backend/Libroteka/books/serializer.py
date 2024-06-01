from rest_framework import serializers
from .models import Author, Book, Editorial, Genre
from django.contrib.auth.models import User

class AuthorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Author
        fields = ['id_Author', 'name']

class EditorialSerializer(serializers.ModelSerializer):
    class Meta:
        model = Editorial
        fields = ['id_Editorial', 'name']

class GenreSerializer(serializers.ModelSerializer):
    class Meta:
        model = Genre
        fields = ['id_Genre', 'name']

class BookSerializer(serializers.ModelSerializer):
    id_Author = AuthorSerializer()
    id_Genre = GenreSerializer()
    id_Editorial = EditorialSerializer()

    class Meta:
        model = Book
        fields = ['id_Book', 'title', 'id_Author', 'id_Genre', 'id_Editorial', 'description', 'price', 'stock']

    def create(self, validated_data):
            author_data = validated_data.pop('id_Author', None)
            genre_data = validated_data.pop('id_Genre', None)
            editorial_data = validated_data.pop('id_Editorial', None)

            try:
                author = Author.objects.get(name=author_data['name'])
                genre = Genre.objects.get(name=genre_data['name'])
                editorial = Editorial.objects.get(name=editorial_data['name'])
            except (Author.DoesNotExist, Genre.DoesNotExist, Editorial.DoesNotExist):
                # Si no se encuentra, crear nuevos registros
                author = Author.objects.create(**author_data)
                genre = Genre.objects.create(**genre_data)
                editorial = Editorial.objects.create(**editorial_data)

            # Verificar si el libro ya existe
            existing_book = Book.objects.filter(title=validated_data['title']).first()
            if existing_book:
                raise serializers.ValidationError({"detail": "Este libro ya está registrado."})

            # Crear el libro con los IDs obtenidos o nuevos si no existían
            book = Book.objects.create(
                id_Author=author,
                id_Genre=genre,
                id_Editorial=editorial,
                **validated_data
            )
            return book
    
    def update(self, instance, validated_data):
        author_data = validated_data.get('id_Author', None)
        genre_data = validated_data.get('id_Genre', None)
        editorial_data = validated_data.get('id_Editorial', None)

        if author_data:
            author_serializer = AuthorSerializer(instance.id_Author, data=author_data)
            if author_serializer.is_valid(raise_exception=True):
                author_serializer.save()

        if genre_data:
            genre_serializer = GenreSerializer(instance.id_Genre, data=genre_data)
            if genre_serializer.is_valid(raise_exception=True):
                genre_serializer.save()

        if editorial_data:
            editorial_serializer = EditorialSerializer(instance.id_Editorial, data=editorial_data)
            if editorial_serializer.is_valid(raise_exception=True):
                editorial_serializer.save()

        instance.description = validated_data.get('description', instance.description)
        instance.price = validated_data.get('price', instance.price)
        instance.stock = validated_data.get('stock', instance.stock)

        for attr, value in validated_data.items():
            setattr(instance, attr, value)

        instance.save()

        return instance
        
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email')

class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create_user(
            validated_data['username'], 
            validated_data['email'], 
            validated_data['password']
        )
        return user