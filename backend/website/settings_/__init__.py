from .base import *
from .installed_apps import *  # <- imediatamente após base
from .rest_framework import REST_FRAMEWORK
from .cors import CORS_ALLOWED_ORIGINS, CORS_ALLOW_CREDENTIALS
from .databases import DATABASES
from .simple_jwt import *
from .middlewares import *
from .static_files import *
from .datetime import *
