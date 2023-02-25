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
