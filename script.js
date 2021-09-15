const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password1 = document.getElementById('password1');
const password2 = document.getElementById('password2');

form.addEventListener('submit' , (e) => {
    e.preventDefault();

    checkInputs();
})

function checkInputs() {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const password1Value = password1.value.trim();
    const password2Value = password2.value.trim();

    if (usernameValue === '') {
        //show error + add error classes
        setErrorFor(username, 'Username cannot be blank!');
    }
    else {
        //otherwise, add success class
        setSuccessFor(username);
    }

    if (emailValue === '') {
        //show error + add error classes
        setErrorFor(email, 'Email cannot be blank!');
    }
    else if (!isEmail(emailValue)) {
        //show error + add error classes
        setErrorFor(email, 'Not a valid email.');
    }
    else {
        //otherwise, add success class
        setSuccessFor(email);
    }

    if (password1Value === '') {
        //show error + add error classes
        setErrorFor(password1, 'Password cannot be blank!');
    }
    else {
        //otherwise, add success class
        setSuccessFor(password1);
    }

    if (password2Value === '') {
        //show error + add error classes
        setErrorFor(password2, 'Password cannot be blank!');
    }
    else if (password1Value !== password2Value) {
        //show error + add error classes
        setErrorFor(password2, 'Passwords do not match.');
    }
    else {
        //otherwise, add success class
        setSuccessFor(password2);
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement; //.form-control
    const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
    //add error message inside small
    small.innerText = message;

    //add error class
    formControl.className = 'form-control error';
}

function setSuccessFor(input) {
    const formControl = input.parentElement;

    //add success class
    formControl.className = 'form-control success';
}

function isEmail(email) {
    const validation = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return validation.test(String(email).toLowerCase());
}