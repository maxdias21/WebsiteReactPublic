from rest_framework.serializers import ModelSerializer
from ...models import Posts
from rest_framework import serializers


class PostGetSerializer(ModelSerializer):
    user = serializers.StringRelatedField()
    image = serializers.ImageField(use_url=True)

    class Meta:
        fields = ['id', 'content','image','created_at','updated_at', 'user']
        model = Posts