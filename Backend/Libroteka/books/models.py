from django.db import models


class Author(models.Model):

    id_Author = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50)
    country= models.CharField(max_length=50)

    class Meta:
        db_table= 'author'
        verbose_name = "Author"
        verbose_name_plural = "Authors"

    def __unicode__(self):
        return self.name

    def __str__(self):
        return self.name

class Book(models.Model):

    id_Book = models.AutoField(primary_key=True)
    title = models.CharField(max_length=100)
    id_Author = models.ForeignKey(Author, to_field='id_Author', on_delete=models.CASCADE)
    # id_Editor = models.
    genre = models.CharField(max_length=50)
    description= models.CharField(max_length=250)
    # publicationDate= models.DateField()
    price= models.DecimalField(blank=False, decimal_places=2, max_digits=10)
    stock= models.IntegerField(blank=False, default=1000)
    
    class Meta:
        db_table= 'book'
        verbose_name = "Book"
        verbose_name_plural = "Books"

    def __unicode__(self):
        return self.title

    def __str__(self):
        return self.title

