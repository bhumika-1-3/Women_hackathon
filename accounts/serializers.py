from rest_framework import serializers
from django.contrib.auth import get_user_model, authenticate
from rest_framework.exceptions import AuthenticationFailed
from rest_framework_simplejwt.tokens import RefreshToken, TokenError

User = get_user_model()

class UserSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = User
        fields = ['email', 'password','first_name','last_name','DOB']

    def create(self, validated_data):
        validated_data['is_active'] = False
        user = User.objects.create_user(**validated_data)
        return user
    


class LoginSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(max_length=255, min_length=3)
    password = serializers.CharField(max_length=68, min_length=3)
    tokens = serializers.CharField(max_length=68, min_length=8, read_only=True)
    
    class Meta:
        model=User
        fields = ['email', 'password', 'tokens']

    def validate(self, attrs):

        email = attrs.get('email','')
        password = attrs.get('password', '')

        filtered_user_by_email = User.objects.filter(email=email)
        auth_user = authenticate(email=email, password=password)

        if not auth_user:
            raise AuthenticationFailed("Invalid credentials, try again")
        if not auth_user.is_active:
            raise AuthenticationFailed("Email not verified yet!!")

        tokens = RefreshToken.for_user(user=auth_user)
        return {
            'id': auth_user.id,
            'email': auth_user.email,
            'name': (auth_user.first_name +" "+ auth_user.last_name),
            'refresh': str(tokens),
            'access': str(tokens.access_token),
            'isAdmin' : auth_user.is_admin,
            'token' :  str(tokens.access_token)
        }


class EmailVerificationSerializer(serializers.ModelSerializer):
    token = serializers.CharField(max_length=666)

    class Meta:
        model = User
        fields = ['token']



class LogoutSerializer(serializers.Serializer):
    refresh = serializers.CharField()

    default_error_message = {
        'bad_token': ('Token is expired or invalid')
    }

    def validate(self, attrs):
        self.token = attrs['refresh']
        return attrs

    def save(self, **kwargs):

        try:
            RefreshToken(self.token).blacklist()

        except TokenError:
            self.fail('bad_token')

class ViewUserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = '__all__'
