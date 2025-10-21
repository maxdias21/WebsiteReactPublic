from pathlib import Path
from decouple import config

BASE_DIR = Path(__file__).resolve().parent.parent


SECRET_KEY = 'dsfdsfdsfsdfd'


DEBUG = config('DEBUG', default=False, cast=bool)

ALLOWED_HOSTS =config('ALLOWED_HOSTS', default='localhost').split(',')

ROOT_URLCONF = 'website.urls'


TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],  # Pode adicionar pastas customizadas de templates aqui
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.request',  # Necessário para usar request nos templates
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]



WSGI_APPLICATION = 'website.wsgi.application'






AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]



DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'
