from rest_framework import serializers
from rest.models import student

class studentserializer(serializers.ModelSerializer):
   


    class Meta:
        model=student
        fields=['id' , 'name' , 'age']