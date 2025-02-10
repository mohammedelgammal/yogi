from django.shortcuts import render


def signup(request):
    return render(request, "signup.html", {"message": "context message is here..."})
