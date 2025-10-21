from django.http import JsonResponse
from rest_framework_simplejwt.tokens import AccessToken, TokenError, RefreshToken

class RefreshTokenMiddleware:
    def __init__(self, get_response):
        # Função que representa o próximo middleware ou a view
        self.get_response = get_response

    def __call__(self, request):
        # Tenta pegar os tokens dos cookies
        access_token = request.COOKIES.get('access_token')
        refresh_token = request.COOKIES.get('refresh_token')

        if access_token:
            try:
                # Verifica se o token de acesso ainda é válido
                AccessToken(access_token)
                # Se for válido, segue normalmente
                return self.get_response(request)
            except TokenError:
                # Se o access token estiver expirado ou inválido
                if not refresh_token:
                    # Se não tem refresh token, retorna erro 401
                    return JsonResponse({'error': 'Token expirado'}, status=401)
                try:
                    # Tenta usar o refresh token para gerar novo access token
                    refresh = RefreshToken(refresh_token)
                    new_access_token = str(refresh.access_token)

                    # Atualiza o token manualmente no request, para a autenticação funcionar
                    request.COOKIES['access_token'] = new_access_token

                    # Chama a próxima etapa (middleware ou view)
                    response = self.get_response(request)

                    # Atualiza o cookie do navegador com o novo access token
                    response.set_cookie(
                        'access_token',
                        value=new_access_token,
                        httponly=True,  # Protege contra acesso via JavaScript
                        secure=False,   # Em produção deve ser True (HTTPS)
                        samesite='Lax', # Previne alguns ataques CSRF
                    )
                    return response
                except TokenError:
                    # Se o refresh token também for inválido ou expirado
                    return JsonResponse({'error': 'Refresh token expirado'}, status=401)

        # Se não tem access token, só continua o fluxo
        return self.get_response(request)
