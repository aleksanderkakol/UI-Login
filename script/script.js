const loginForm = document.querySelector('.form');
const emailInput = document.querySelector('.emailInput');
const passwordInput = document.querySelector('.passwordInput');
const emailLabel = document.querySelector('.emailLabel');
const passwordLabel = document.querySelector('.passwordLabel');
const emailInfo = document.querySelector('.emailInfo');
const passwordInfo = document.querySelector('.passwordInfo');
const check = document.querySelector('.check');
// console.log(loginForm);
// console.log(emailLabel);
// console.log(emailInfo);

emailInput.addEventListener('input', function () {
    emailInput.style.border = '1px solid #929292';
    emailLabel.classList.remove('incorrect');
    emailInfo.classList.remove('show');

});

passwordInput.addEventListener('input', function () {
    passwordInput.style.border = '1px solid #929292';
    passwordLabel.classList.remove('incorrect');
    passwordInfo.classList.remove('show');
});

loginForm.addEventListener('submit', function (e) {
    e.preventDefault();

    let correct = true;

    if (emailInput.value.search('@')===-1) {
        emailInput.style.border = '1px solid red';
        emailLabel.classList.add('incorrect');
        emailInfo.classList.add('show');
        correct = false;
    }
    if (passwordInput.value.length<5) {
        passwordInput.style.border = '1px solid red';
        passwordLabel.classList.add('incorrect');
        passwordInfo.classList.add('show');
        correct = false;
    }
    if (correct) {
        alert('Succesful');
    }

});

const forgetpass = document.querySelector('.link');
const resetForm = document.querySelector('.resetForm');
const cancelBtn = document.querySelector('.cancel');

forgetpass.addEventListener('click', function (e) {
    e.preventDefault();
    loginForm.classList.add('hide');
    resetForm.classList.add('unhide');
});

cancelBtn.addEventListener('click', function (e) {
    e.preventDefault();
    loginForm.classList.remove('hide');
    resetForm.classList.remove('unhide');
});