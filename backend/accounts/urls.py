from django.urls import path

from .api.views.register_api import UserCreateApiView
from .views.login import LoginApiView
from .views.is_logged_in import IsLoggedInView

from rest_framework_simplejwt.views import TokenRefreshView


urlpatterns = [
    # Registrar um novo usuário
    path('register/', UserCreateApiView.as_view({
        'post': 'create'
    })),

    # Fazer login
    path('login/', LoginApiView.as_view()),

    # Checa se o usuário está logado
    path('login/protected/', IsLoggedInView.as_view()),

    # Validar refresh token
    path('token/refresh/', TokenRefreshView.as_view()),
]
