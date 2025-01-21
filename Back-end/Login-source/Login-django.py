from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login as auth_login
from django.http import HttpResponse

def login():
    username = input("Enter your username: ")
    password = input("Enter your password: ")
    return username == "admin" and password == "password"

def result():
    id = int(input("Enter Your Number: "))
    name = input("Enter Your name: ")
    return f"Your phone number is {id} and your name is {name}"

if __name__ == "__main__":
    if login():
        print("Login successful!")
        print(result())
    else:
        print("Login failed. Incorrect username or password.")
        def login_view(request):
            if request.method == "POST":
                username = request.POST['username']
                password = request.POST['password']
                user = authenticate(request, username=username, password=password)
                if user is not None:
                    auth_login(request, user)
                    return redirect('result')
                else:
                    return HttpResponse("Login failed. Incorrect username or password.")
            return render(request, 'login.html')

        def result_view(request):
            if request.method == "POST":
                id = request.POST['id']
                name = request.POST['name']
                return HttpResponse(f"Your phone number is {id} and your name is {name}")
            return render(request, 'result.html')