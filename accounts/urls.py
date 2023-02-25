from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView
from . import views

urlpatterns = [
    path('signup/', views.SignUp.as_view(), name="SignUp"),
    path('email-verify/', views.VerifyEmail.as_view(), name="EmailVerification"),
    path('login/', views.Login.as_view(), name="Login"),
    path('logout/', views.LogoutAPIView.as_view(), name="logout"),
    path('token-refresh/',TokenRefreshView.as_view(),name="RefreshToken"),
]
    