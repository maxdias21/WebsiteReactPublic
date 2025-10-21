from rest_framework.serializers import ModelSerializer
from rest_framework import serializers

from ...models import Profile


class ProfileEditSerializer(ModelSerializer):
    profile_photo = serializers.ImageField(use_url=True, required=False)
    first_name=serializers.CharField(source='user.first_name', read_only=True)
    last_name=serializers.CharField(source='user.last_name', read_only=True)

    class Meta:
        model = Profile
        fields = [
            "id",
            "profile_photo",
            "biography",
            "current_instituition",
            "graduated_institution",
            "current_city",
            "birth_city",
            "instagram",
            "website",
            "is_active",
            "visibility",
            'first_name',
            'last_name',
        ]
        read_only_fields = ('id', 'user')
