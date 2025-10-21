from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from ..serializers.edit_profile import ProfileEditSerializer


class ProfileDetailApiView(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request):
        profile = getattr(request.user, 'profile', None)

        if (profile):
            serializer = ProfileEditSerializer(profile, context={'request': request})
            return Response(serializer.data)
        return Response(None)
