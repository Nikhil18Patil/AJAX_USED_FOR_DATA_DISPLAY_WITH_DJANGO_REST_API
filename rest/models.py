from django.db import models

# Create your models here.

class student(models.Model):
    name=models.TextField(max_length="200")
    age=models.IntegerField()
