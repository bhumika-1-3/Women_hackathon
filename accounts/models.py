from django.contrib.auth.models import AbstractUser
from django.db import models
from django.utils.translation import gettext_lazy as _

from .managers import CustomUserManager

from rest_framework_simplejwt.tokens import RefreshToken


def upload_path_handler(instance, filename):
    return "images/profile/{label}/{file}".format(
        label=instance.firstname + '_' + instance.lastname, file=filename
    )

AUTH_PROVIDERS = {'google':'google', 'email':'email'}

class User(AbstractUser):

    username = None
    email = models.EmailField(_("email address"), unique=True)
    DOB = models.DateField(null=True,blank=True)
    image = models.ImageField(upload_to = upload_path_handler,null = True, blank = True)
    auth_provider = models.CharField(max_length = 255, blank = False, null = False, default=AUTH_PROVIDERS.get('email'))
    is_admin = models.BooleanField(default = False)
    phone = models.CharField(max_length=13,null = True, blank = True)

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []

    objects = CustomUserManager()

    def __str__(self):
        return self.email
    
    def tokens(self):
        refresh = RefreshToken.for_user(self)
        return {
            'refresh': str(refresh),
            'access': str(refresh.access_token)
        }