document.getElementById('login-submit').addEventListener('click', function () {
    const emailFild = document.getElementById('user-email');
    const userEmail = emailFild.value;

    const passwordFild = document.getElementById('user-password');
    const userPassword = passwordFild.value;
    // console.log(userEmail);
    // console.log(userPassword);
    if (userEmail != '' && userPassword != '') {
        window.location.href = 'banking.html';
    }
    else {
        console.log('Invalid email/password')
    }

})