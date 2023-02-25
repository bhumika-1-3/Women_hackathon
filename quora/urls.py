from django.urls import path
from . import views

urlpatterns = [

    path('', views.getPostsView.as_view(), name = 'posts'),
    path('addpost/', views.addPostView.as_view(), name = 'addposts'),
    path('addcomment/<str:pk>/', views.addCommentView.as_view(), name = 'addcomments'),
    path('ratepost/<str:pk>/<str:rate>/', views.ratePostView.as_view(), name = 'ratepost'),
    path('ratecomment/<str:pk>/<str:rate>/', views.rateCommentView.as_view(), name = 'ratecomment')

]