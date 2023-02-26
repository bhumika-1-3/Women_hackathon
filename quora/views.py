from django.shortcuts import render
from django.http.response import Http404, HttpResponse, JsonResponse
from rest_framework import (mixins, generics, status, permissions)
from .serializers import ProfileSerializer, PostSerializer,CommentSerializer, AddPostSerializer, FamilySerializer, DailySerializer,MonthlyPeriodTrackerSerializer
from accounts.serializers import ViewUserSerializer
from .models import Post, Comment
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from .models import Post,Comment, Family, Daily,MonthlyPeriodTracker

from twilio.rest import Client

from django.contrib.auth import get_user_model

User = get_user_model()
# Create your views here.



class ProfileView(APIView):
    serializer_class = ProfileSerializer
    permission_classes = [IsAuthenticated]

    def get(self,request):
        user = User.objects.get(email = request.user)
        serializer = ProfileSerializer(user)
        return JsonResponse(serializer.data, status = status.HTTP_200_OK)

    def put(self, request):
        user = User.objects.get(email = request.user)
        serializer = ViewUserSerializer(instance = user, data=request.data, partial = True)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status = status.HTTP_202_ACCEPTED)
        content = {'detail': 'Serializer not valid'}
        return JsonResponse(content, status = status.HTTP_400_BAD_REQUEST)


class DailyView(APIView):
    serializer_class = DailySerializer
    permission_classes = [IsAuthenticated]

    def post(self,request):
        user = User.objects.get(email = request.user)
        daily = Daily(user = user)
        serializer = DailySerializer(daily,data=request.data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status = status.HTTP_202_ACCEPTED)
        return JsonResponse(serializer.errors, status = status.HTTP_400_BAD_REQUEST)
    

class MonthlyPeriodTrackerView(APIView):
    serializer_class = MonthlyPeriodTrackerSerializer
    permission_classes = [IsAuthenticated]

    def post(self,request):
        user = User.objects.get(email = request.user)
        monthly = MonthlyPeriodTracker(user = user)
        serializer = MonthlyPeriodTrackerSerializer(monthly,data=request.data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status = status.HTTP_202_ACCEPTED)
        return JsonResponse(serializer.errors, status = status.HTTP_400_BAD_REQUEST)
    


class FamilyView(APIView):
    serializer_class = FamilySerializer
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user = User.objects.get(email = request.user)
        family = Family.objects.filter(user = user)
        serializer = FamilySerializer(family, many = True)
        return JsonResponse(serializer.data,safe = False, status = status.HTTP_200_OK)

    def post(self,request):
        user = User.objects.get(email = request.user)
        post = Family(user = user)
        serializer = FamilySerializer(post,data=request.data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status = status.HTTP_202_ACCEPTED)
        return JsonResponse(serializer.errors, status = status.HTTP_400_BAD_REQUEST)
    

class SMSFamilyView(APIView):

    def post(self,request):
        user = User.objects.get(email = request.user)
        family = Family.objects.filter(user = user)


        content = {}
        for member in family:
            account_sid = config('TWILIO_ACCOUNT_SID')
            auth_token = config('TWILIO_AUTH_TOKEN')
            client = Client(account_sid, auth_token)
            content[member.name] = member.phone
            # try: 
            #     message = client.messages.create(
            #                                 messaging_service_sid=config('MESSAGING_SERVICE_SID'),
            #                                 body= "Hi! We wanted to let you know that  " + str(user.first_name) + " will get her period soon. Thank you for your support.",
            #                                 to = member.phone
            #                             )
            #     print(message)
            # except:
            #     content = {'detail': 'SMS could not be sent'}
            #     return JsonResponse(content, status = status.HTTP_404_NOT_FOUND)

        content['detail'] = 'SMS sent'
        return JsonResponse(content, status = status.HTTP_200_OK)

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
