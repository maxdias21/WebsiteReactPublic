from rest_framework import generics, permissions

from ..serializers.create_profile import ProfileCreateSerializer


class ProfileCreateApiView(generics.CreateAPIView):
    serializer_class = ProfileCreateSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)