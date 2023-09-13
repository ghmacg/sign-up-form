const firstPassword = document.querySelector('#first-pwd');
const secondPassword = document.querySelector('#second-pwd');
const passwordMsg = document.querySelector('#status-pwd');
const submitBtn = document.querySelector('button');

function checkPassword () {
    if (firstPassword.value == secondPassword.value) {
        if (secondPassword.classList.contains('error')) {
            secondPassword.classList.remove('error');
            passwordMsg.innerHTML = '';
        };

        submitBtn.disabled = false;
    } else {
        if (secondPassword.value != '') {
            secondPassword.classList.add('error');
            passwordMsg.innerHTML = '(Password does not match)';
        };

        submitBtn.disabled = true;
    };
};
