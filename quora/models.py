from django.db import models
from django.contrib.auth import get_user_model

# Create your models here.
User = get_user_model()

# Create your models here.
class Post(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    anonymous = models.BooleanField(default=False)
    question = models.CharField(max_length=800)
    like = models.IntegerField(null=True, blank=True, default=0)
    dislike = models.IntegerField(null=True, blank=True, default=0)
    createdAt = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return str(self.question)


class Comment(models.Model):
    post = models.ForeignKey(Post, on_delete=models.CASCADE, null = True)
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    anonymous = models.BooleanField(default=False)
    like = models.IntegerField(null=True, blank=True, default=0)
    dislike = models.IntegerField(null=True, blank=True, default=0)
    answer  = models.TextField()
    createdAt = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return str(self.answer) + '-' +str(self.rating)


class Family(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    phone = models.CharField(max_length=13)
    name = models.CharField(max_length=300)
    relation = models.CharField(max_length=300)

    def __str__(self):
        return str(self.user.email) + '-'+str(self.relation)