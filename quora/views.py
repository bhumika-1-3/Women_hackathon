from django.shortcuts import render
from django.http.response import Http404, HttpResponse, JsonResponse
from rest_framework import (mixins, generics, status, permissions)
from .serializers import PostSerializer,CommentSerializer, AddPostSerializer
from .models import Post, Comment
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from .models import Post,Comment

from django.contrib.auth import get_user_model

User = get_user_model()
# Create your views here.

# view => post + comments
# add post
# add comment
# like post
# like comment


class getPostsView(generics.ListAPIView):
    serializer_class = PostSerializer
    def list(self,request):
        queryset = Post.objects.all().order_by('-createdAt')
        serializer = PostSerializer(queryset, many = True)
        return JsonResponse(serializer.data,safe = False, status = status.HTTP_200_OK)


class addPostView(APIView):
    
    serializer_class = AddPostSerializer
    permission_classes = [IsAuthenticated]

    def post(self,request):
        user = User.objects.get(email = request.user)
        post = Post(user = user)
        serializer = AddPostSerializer(post,data=request.data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status = status.HTTP_202_ACCEPTED)
        return JsonResponse(serializer.errors, status = status.HTTP_400_BAD_REQUEST)
    


class addCommentView(APIView):
    
    serializer_class = CommentSerializer
    permission_classes = [IsAuthenticated]

    def post(self,request,pk):
        user = User.objects.get(email = request.user)
        try:
            post = Post.objects.get(id = pk)
        except Post.DoesNotExist:
            content = {'detail': 'No such post exists'}
            return JsonResponse(content, status = status.HTTP_404_NOT_FOUND)
        comment = Comment(user = user, post = post)
        serializer = CommentSerializer(comment,data=request.data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status = status.HTTP_202_ACCEPTED)
        return JsonResponse(serializer.errors, status = status.HTTP_400_BAD_REQUEST)
    

class ratePostView(APIView):
    def post(self,request,pk,rate):
        try:
            post = Post.objects.get(id = pk)
        except Post.DoesNotExist:
            content = {'detail': 'No such post exists'}
            return JsonResponse(content, status = status.HTTP_404_NOT_FOUND)
        if rate == '0':
            post.dislike += 1
            post.save()
        
        elif rate == '1':
            post.like += 1
            post.save()

        content = {'detail' : 'rating updated'}
        return JsonResponse(content, status = status.HTTP_200_OK)


class rateCommentView(APIView):
    def post(self,request,pk,rate):
        try:
            comment = Comment.objects.get(id = pk)
        except Comment.DoesNotExist:
            content = {'detail': 'No such comment exists'}
            return JsonResponse(content, status = status.HTTP_404_NOT_FOUND)
        if rate == '0':
            comment.dislike += 1
            comment.save()
        
        elif rate == '1':
            comment.like += 1
            comment.save()
        content = {'detail' : 'rating updated'}
        return JsonResponse(content, status = status.HTTP_200_OK)


# Create your views here.

from django. shortcuts import render, HttpResponse

import requests
from decouple import config
import json
from django.shortcuts import render, HttpResponse
 

api_key = config('API_KEY')

api_url = 'https://ipgeolocation.abstractapi.com/v1/?api_key=' + api_key

 

def get_ip_geolocation_data(ip_address):

   # not using the incoming IP address for testing

   print(ip_address)

 

   response = requests.get(api_url)

   return response.content


def home(request):

   x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')

   if x_forwarded_for:

       ip = x_forwarded_for.split(',')[0]

   else:

       ip = request.META.get('REMOTE_ADDR')

 

   geolocation_json = get_ip_geolocation_data(ip)

   geolocation_data = json.loads(geolocation_json)

   latitude = geolocation_data['latitude']
   longitude = geolocation_data['longitude']
   country = geolocation_data['country']

   region = geolocation_data['region']

  

   return HttpResponse("Welcome! Your IP address is: {} and you are visiting from {} in {}, {} & {}".format(ip, region, country, latitude,longitude))
