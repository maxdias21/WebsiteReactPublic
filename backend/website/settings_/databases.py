from pathlib import Path

from decouple import config

BASE_DIR = Path(__file__).resolve().parent.parent

DATABASES = {
    'default': {
        "ENGINE": "django.db.backends.mysql",
        'NAME': config('NAME'),
        'USER': config('USER'),
        'PASSWORD': config('PASSWORD'),
        'HOST': config('HOST'),
        'PORT': config('PORT'),
    }
}
