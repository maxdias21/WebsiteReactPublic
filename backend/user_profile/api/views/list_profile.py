from rest_framework.views import APIView
from ..serializers.list_profile import ProfileListSerializer
from ...models import Profile
from rest_framework.response import Response

class ProfileListView(APIView):
    def get(self, request):
        profiles = Profile.objects.filter(is_active=True)
        serializer = ProfileListSerializer(profiles, many=True, context={'request': request})

        return Response(serializer.data)