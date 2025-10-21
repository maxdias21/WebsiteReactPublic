from rest_framework import generics

from ..serializers.get_post import PostGetSerializer
from ...models import Posts

class PostDetailApiView(generics.RetrieveAPIView):
    queryset = Posts.objects.all()
    serializer_class = PostGetSerializer
