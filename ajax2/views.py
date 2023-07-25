from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from ajax2.serializers import studentserializer
from rest.models import student
from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
import json
import requests
from rest_framework.decorators import api_view

@api_view(['GET','POST'])
def studentview(request):
    if request.method == 'GET':
        persons = student.objects.all()
        serializer = studentserializer(persons, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = studentserializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)


def one(request):
    return render(request, 'index.html')