from rest_framework.serializers import ModelSerializer
from rest_framework.views import APIView, Response

from django.db.models import Q

from ..serializers.post_list import PostListSerializer
from ...models import Posts
from user_profile.api.serializers.list_profile import ProfileListSerializer
from user_profile.models import Profile


class SearchPostsApiView(APIView):
    def get(self, request):
        params = request.query_params.get('q', '').strip()

        posts = Posts.objects.filter(Q(is_published=True) & (Q(content__icontains=params)))
        users = Profile.objects.filter(Q(is_active=True) & (
            Q(user__first_name__icontains=params)
            |
            Q(user__last_name__icontains=params)
            |
            Q(user__username__icontains=params)))

        posts_serializer = PostListSerializer(posts, many=True, context={'request': request}).data
        users_serializer = ProfileListSerializer(users, many=True, context={'request': request}).data

        return Response({
            'posts': posts_serializer,
            'users': users_serializer
        })
