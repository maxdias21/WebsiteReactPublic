from rest_framework import permissions
from rest_framework.response import Response
from rest_framework.views import APIView

class IsLoggedInView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        return Response(status=204)
