from rest_framework import status, permissions
from rest_framework.viewsets import ModelViewSet
from django.contrib.auth.models import User
from rest_framework.response import Response

from ..serializers.register import RegisterUserSerializer


class UserCreateApiView(ModelViewSet):
    permission_classes = [permissions.AllowAny]
    queryset = User.objects.all()
    serializer_class = RegisterUserSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        validated_data = serializer.validated_data

        User.objects.create_user(**validated_data)

        headers = self.get_success_headers(serializer.data)

        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers) 