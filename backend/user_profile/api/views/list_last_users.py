from django.contrib.auth.models import User
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from user_profile.api.serializers.list_last_users import ListLastUsersSerializer

from user_profile.models import Profile


class ListLastUsersView(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request):
       profiles = Profile.objects.filter(last_activity__isnull=False, is_active=True).order_by('-last_activity')[:10]
       serializer = ListLastUsersSerializer(profiles, many=True, context={'request': request})

       return Response(serializer.data)
