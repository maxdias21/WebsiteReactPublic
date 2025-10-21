from django.urls import path

from .api.views.edit_profile import ProfileUpdateApiView
from .api.views.detail_profile import ProfileDetailApiView
from .api.views.get_profile import ProfileByIdView
from .api.views.list_last_users import ListLastUsersView
from .api.views.list_profile import ProfileListView
from .api.views.create_profile import  ProfileCreateApiView


urlpatterns = [
    # Criar o perfil do usuário
    path('create/', ProfileCreateApiView.as_view()),

    # Retorna os detalhes do perfil do usuário autenticado, se existir
    path('detail/', ProfileDetailApiView.as_view()),

    # Retorna os detalhes do perfil de um usuário específico
    path('detail/<int:pk>/', ProfileByIdView.as_view()),

    # Atualiza o perfil do usuário
    path('update/<int:pk>/', ProfileUpdateApiView.as_view()),

    # Listar todos os perfis de usuários
    path('list/', ProfileListView.as_view()),

    # Listar últimos usuários logados
    path('list/last_users/', ListLastUsersView.as_view()),

]