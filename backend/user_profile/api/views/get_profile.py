from rest_framework import generics

from ...models import Profile
from ..serializers.get_profile import ProfileGetSerializer

class ProfileByIdView(generics.RetrieveAPIView):
    queryset = Profile.objects.filter(is_active=True)
    serializer_class = ProfileGetSerializer