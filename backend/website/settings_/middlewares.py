MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',

    # Middleware para lidar com CORS antes do CommonMiddleware
    "corsheaders.middleware.CorsMiddleware",

    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',

    # Middleware customizado para refresh token JWT via cookie
    "accounts.refresh_token.RefreshTokenMiddleware",

    # Middleware Login
    'user_profile.middleware.UpdateLastActivityMiddleware',

    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]
