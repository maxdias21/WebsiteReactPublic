from datetime import timedelta

SIMPLE_JWT = {
    "ACCESS_TOKEN_LIFETIME": timedelta(minutes=15),  # Tempo de vida do token de acesso
    "REFRESH_TOKEN_LIFETIME": timedelta(days=1),  # Tempo de vida do refresh token
    "ROTATE_REFRESH_TOKENS": False,  # Gera novo refresh token a cada refresh
    'AUTH_COOKIE': 'access_token',  # Nome do cookie onde o access token fica armazenado
}