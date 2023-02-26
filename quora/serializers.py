from rest_framework import serializers
from .models import Post,Comment, Family, Daily, MonthlyPeriodTracker
from django.contrib.auth import get_user_model

User = get_user_model()


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = '__all__'

class PostSerializer(serializers.ModelSerializer):
    comments = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = Post
        fields = '__all__'

    def get_comments(self, obj):
        comments = obj.comment_set.all()
        serializer = CommentSerializer(comments, many = True)
        return serializer.data
    
class AddPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = '__all__'


class FamilySerializer(serializers.ModelSerializer):
    class Meta:
        model = Family
        fields = '__all__'


class DailySerializer(serializers.ModelSerializer):
    class Meta:
        model = Daily
        fields = '__all__'

class MonthlyPeriodTrackerSerializer(serializers.ModelSerializer):
    class Meta:
        model = MonthlyPeriodTracker
        fields = '__all__'


class ProfileSerializer(serializers.ModelSerializer):
    daily = serializers.SerializerMethodField(read_only=True)
    monthly = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = User
        fields = '__all__'

    def get_daily(self, obj):
        daily = obj.daily_set.all().order_by('date')
        serializer = DailySerializer(daily, many = True)
        return serializer.data
    
    def get_monthly(self, obj):
        montlhy = obj.monthlyperiodtracker_set.all().order_by('date')
        serializer = MonthlyPeriodTrackerSerializer(montlhy, many = True)
        return serializer.data