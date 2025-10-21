from rest_framework.routers import SimpleRouter
from django.urls import path

from .api.views.create_post import PostCreateApiView
from .api.views.get_post import PostDetailApiView
from .api.views.get_post_by_id import UserPostApiView
from .api.views.list_posts import PostListApiView
from .api.views.search_posts import SearchPostsApiView

post_router = SimpleRouter()

post_router.register(
    'post/create/api',
    PostCreateApiView,
)

urlpatterns = [
    # Listar todos os posts
    path('list/', PostListApiView.as_view()),

    # Recuperar os detalhes de um post passando o id
    path('detail/<int:pk>/', PostDetailApiView.as_view()),

    # Retorna todos os posts de um usuário específico
    path('list/<int:pk>/', UserPostApiView.as_view()),

    # Rota que permite um usuário logado criar um post
    path('create/', PostCreateApiView.as_view({
        'post': 'create'
    })),

    # Rota buscar posts/users
    path('search/', SearchPostsApiView.as_view()),
]
