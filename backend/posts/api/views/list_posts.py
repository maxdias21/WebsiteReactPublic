from rest_framework.generics import ListAPIView
from rest_framework.permissions import IsAuthenticated

from ..serializers.post_list import PostListSerializer
from ...models import Posts


class PostListApiView(ListAPIView):
    permission_classes = (IsAuthenticated,)
    serializer_class = PostListSerializer

    def get_queryset(self):
        return Posts.objects.filter(is_published=True).order_by('-created_at')
