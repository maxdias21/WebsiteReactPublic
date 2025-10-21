# Permite enviar cookies via requisições cross-origin
CORS_ALLOW_CREDENTIALS = True

# Domínios autorizados a acessar o backend
CORS_ALLOWED_ORIGINS = [
    'http://localhost:3001',  # Seu frontend local
    'http://localhost:3000',  # Seu frontend local
]
