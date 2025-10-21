from django.db import models
from django.contrib.auth.models import User


# Create your models here.

class Profile(models.Model):
    visibility_choices = [
        ('public', 'public'),
        ('private', 'private'),
    ]

    user = models.OneToOneField(User, on_delete=models.CASCADE)
    profile_photo = models.ImageField(upload_to="profile_photos/", null=True, blank=True)
    biography = models.CharField(null=True, blank=True, max_length=200)
    current_instituition = models.CharField(null=True, blank=True, max_length=200)
    graduated_institution = models.CharField(null=True, blank=True, max_length=200)
    current_city = models.CharField(null=True, blank=True, max_length=200)
    instagram = models.CharField(null=True, blank=True, max_length=200)
    website = models.CharField(null=True, blank=True, max_length=200)
    birth_city = models.CharField(null=True, blank=True, max_length=200)
    visibility = models.CharField(max_length=7, choices=visibility_choices, default='public')
    is_active = models.BooleanField(default=True)

    last_activity = models.DateTimeField(null=True, blank=True)

    def __str__(self):
        return str(self.user)
