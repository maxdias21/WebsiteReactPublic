from ...models import Profile
from rest_framework import serializers


class ProfileCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ['id', 'profile_photo', 'biography', 'current_instituition',
                  'graduated_institution', 'current_city', 'birth_city', 'is_active', 'visibility']
