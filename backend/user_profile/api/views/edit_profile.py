from rest_framework.generics import UpdateAPIView
from ...models import Profile
from ..serializers.edit_profile import  ProfileEditSerializer
from rest_framework.permissions import IsAuthenticated

from ...permissions import IsOwnerProfile


class ProfileUpdateApiView(UpdateAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileEditSerializer
    permission_classes = (IsAuthenticated, IsOwnerProfile)
    lookup_field = 'pk'