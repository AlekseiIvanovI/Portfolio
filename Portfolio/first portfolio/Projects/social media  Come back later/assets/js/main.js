// const login = document.querySelector('#login')
// const register = document.querySelector('#register')
// const forgot = document.querySelector('#forgot')

document.querySelector('.bx.bx-lock-alt').addEventListener('click', showPassword)
// document.querySelector('.register.button').addEventListener('click', openRegisterForm)

// document.querySelector('.login.button').addEventListener('click', openLoginForm)

// document.querySelector('#forgot-pass').addEventListener('click', resetPass)


// function openRegisterForm(){
//     login.classList.toggle('hidden')
//     register.classList.toggle('hidden')
//     document.querySelector('title').innerText = 'Create account'
// }


// function openLoginForm(){
//     login.classList.toggle('hidden')
//     register.classList.add('hidden')
//     document.querySelector('title').innerText = 'Login Page'
// }

// function resetPass(){
//     login.classList.add('hidden')
//     register.classList.add('hidden')
//     forgot.classList.toggle('hidden')
//     document.querySelector('title').innerText = 'Reset Password'
// }


function showPassword() {
    var x = document.getElementById("passInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }














