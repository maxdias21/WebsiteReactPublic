from rest_framework import permissions, status
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet

from ..serializers.create_post import PostSerializer
from ...models import Posts


class PostCreateApiView(ModelViewSet):
    permission_classes = [permissions.IsAuthenticated]
    queryset = Posts.objects.all()
    serializer_class = PostSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)

        serializer.is_valid(raise_exception=True)

        serializer.save(user=request.user)

        return Response(serializer.data,status=status.HTTP_201_CREATED)
