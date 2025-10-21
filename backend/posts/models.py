from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Posts(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    content = models.TextField()
    image = models.ImageField(null=True, blank=True, upload_to='images/posts/%Y/%m/%d')
    is_published = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.content

    class Meta:
        verbose_name = 'Posts'
        verbose_name_plural = 'Posts'
