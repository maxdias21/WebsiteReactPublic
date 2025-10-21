from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework_simplejwt.exceptions import TokenError
from rest_framework import exceptions


class CookieJWTAuthentication(JWTAuthentication):
    def authenticate(self, request):
        # Tenta pegar o token de acesso dos cookies da requisição
        raw_access_token = request.COOKIES.get("access_token")
        if raw_access_token is None:
            # Se não tiver token, retorna None (não autentica)
            return None

        try:
            # Verifica se o token é válido (não expirado ou alterado)
            validated_token = self.get_validated_token(raw_access_token)
            # Se estiver tudo certo, retorna o usuário e o token validado
            return self.get_user(validated_token), validated_token

        except TokenError:
            # Se o token for inválido ou expirado, lança erro de autenticação
            raise exceptions.AuthenticationFailed('Token inválido ou expirado')
