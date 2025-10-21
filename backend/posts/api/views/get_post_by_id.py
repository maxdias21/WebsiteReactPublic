from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status

from django.contrib.auth.models import User

from user_profile.models import Profile
from ..serializers.get_post import PostGetSerializer
from django.contrib.auth.models import User

from ...models import Posts


class UserPostApiView(APIView):
    serializer_class = PostGetSerializer

    def get(self, request, pk):
        try:
            profile = Profile.objects.get(id=int(pk))
            user = User.objects.get(id=profile.user.id)
        except Exception as err:
            return Response({'error': 'Usuário não encontrado'}, status=status.HTTP_400_BAD_REQUEST)

        posts = Posts.objects.filter(user=user).order_by('-created_at')
        serializer = PostGetSerializer(posts, many=True, context={'request': request})

        return Response(serializer.data)
