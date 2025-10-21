from rest_framework.serializers import ModelSerializer
from rest_framework import serializers

from ...models import Profile


class ProfileListSerializer(ModelSerializer):
    profile_photo = serializers.ImageField(use_url=True, required=False)
    first_name = serializers.SerializerMethodField()
    last_name = serializers.SerializerMethodField()

    class Meta:
        model = Profile
        fields = [
            "id",
            "profile_photo",
            "visibility",
            "user",
            'first_name',
            'last_name',
        ]
        read_only_fields = ('id',)

    def get_first_name(self, obj):
        return obj.user.first_name

    def get_last_name(self, obj):
        return obj.user.last_name
