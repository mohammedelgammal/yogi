from django.contrib import admin
from custom_auth.models import CustomUser


class CustomModelAdmin(admin.ModelAdmin):
    list_display = ["username", "first_name", "last_name", "email"]


admin.site.register(CustomUser, CustomModelAdmin)
