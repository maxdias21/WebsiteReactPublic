from rest_framework import serializers

from user_profile.models import Profile

from django.contrib.auth.models import User


class ListLastUsersSerializer(serializers.ModelSerializer):
    profile_photo = serializers.ImageField(use_url=True, read_only=True)
    first_name = serializers.CharField(source='user.first_name', read_only=True)
    last_name = serializers.CharField(source='user.last_name', read_only=True)
    username = serializers.CharField(source='user.username', required=False)

    class Meta:
        model = Profile
        fields = ['id', 'username', 'first_name', 'last_name', 'last_activity', 'profile_photo']
