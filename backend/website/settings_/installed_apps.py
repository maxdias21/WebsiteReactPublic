INSTALLED_APPS = [
    # Apps padrão do Django
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',

    # Apps
    'user_profile',
    'posts',

    # Django REST Framework
    'rest_framework',

    # CORS headers para permitir comunicação frontend-backend local
    'corsheaders',
]