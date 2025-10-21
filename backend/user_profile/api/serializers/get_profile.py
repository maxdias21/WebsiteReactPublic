from ...models import Profile

from rest_framework import serializers

class ProfileGetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = '__all__'