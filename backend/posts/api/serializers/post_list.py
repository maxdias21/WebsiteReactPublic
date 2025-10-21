from ...models import Posts
from rest_framework import serializers

class PostListSerializer(serializers.ModelSerializer):
    # Mostrar nome do usuário
    user =  serializers.StringRelatedField()
    image = serializers.ImageField(use_url=True)

    class Meta:
        model = Posts
        fields =  ['id', 'content','image','created_at','updated_at', 'user']

