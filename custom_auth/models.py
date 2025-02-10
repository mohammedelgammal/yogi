from django.db import models
from django.contrib.auth.models import AbstractUser


class CustomUser(AbstractUser):
    email = models.EmailField(unique=True)

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["username"]

    def __str__(self):
        return (
            f"{self.first_name} {self.last_name}"
            if len(self.first_name)
            else f"({self.username}) {self.email}"
        )
