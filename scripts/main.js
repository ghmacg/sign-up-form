const firstPassword = document.getElementById('first-pwd');
const secondPassword = document.getElementById('second-pwd');
const passwordMsg = document.getElementById('status-pwd');
const phoneNum = document.getElementById('phone-number');
const submitBtn = document.querySelector('button');

// Function to check if the first and second password are the same
//if they are not the submit button is disabled and a message becomes visible
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

// Function to format phone number while the user is typing ex. (123) 456-7890
function maskPhoneNum (event) {
    let x = event.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
    event.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
};

function signUpChecks () {
    firstPassword.addEventListener('keyup', () => {
        if (secondPassword.value.lenght != 0) checkPassword();
    });
    
    secondPassword.addEventListener('keyup', checkPassword);

    phoneNum.addEventListener('input', function (e) {
        maskPhoneNum(e);
    });
};


// Function calling
signUpChecks();