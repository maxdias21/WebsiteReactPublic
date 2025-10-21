from django.contrib import admin
from .models import Posts

# Register your models here.

class PostsAdmin(admin.ModelAdmin):
    list_editable = ('is_published',)
    list_display = ( 'content', 'is_published')


admin.site.register(Posts, PostsAdmin)
