from django.shortcuts import render
from custom_auth.forms import CustomUserCreationForm


def signup(request):
    form = CustomUserCreationForm()
    if request.method == "POST":
        form = CustomUserCreationForm(request.POST)
        if form.is_valid():
            form.save()
            print("user created successfully!")

    context = {"form": form}
    return render(request, "signup.html", context)
