from rest_framework import permissions
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import authenticate


class LoginApiView(APIView):
    permission_classes = (permissions.AllowAny,)

    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')

        user = authenticate(username=username, password=password)

        if not user:
            return Response({'error': 'Usuário ou senha incorretos'}, status=401)

        refresh = RefreshToken.for_user(user)

        response = Response({'message': 'Login realizado com sucesso!'}, status=200)

        # Define cookies HTTP-only para access e refresh token
        response.set_cookie(
            key='access_token',
            value=str(refresh.access_token),
            httponly=True,
            secure=True,  # True em produção com HTTPS
            samesite='None',
            path='/',
            max_age=60 * 15  # 15 minutos (tempo do access token)
        )

        response.set_cookie(
            key='refresh_token',
            value=str(refresh),
            httponly=True,
            secure=True,  # True em produção
            samesite='None',
            path='/',
            max_age=60 * 60 * 24 * 7  # 7 dias
        )

        return response
