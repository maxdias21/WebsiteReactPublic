REST_FRAMEWORK = {
    # Define qual classe de autenticação será usada nas views DRF
    'DEFAULT_AUTHENTICATION_CLASSES': (
        "accounts.authentication.CookieJWTAuthentication",  # Sua autenticação JWT customizada via cookie
    ),
    # Define permissões padrão - só usuários autenticados podem acessar
    'DEFAULT_PERMISSION_CLASSES': (
        'rest_framework.permissions.IsAuthenticated',
    ),
}