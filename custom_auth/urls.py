from django.urls import path
from custom_auth import views

urlpatterns = [
    path("signup", views.signup, name="signup")
]
