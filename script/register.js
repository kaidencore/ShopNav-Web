const registerForm = document.querySelector("#register-form");
registerForm.addEventListener('submit', (e) => {
    e.preventDefault();

    //get user info
    const email = registerForm['register-email'].value;
    const password = registerForm['register-password'].value;

    auth.createUserWithEmailAndPassword(email, password).then(cred => {
        console.log(cred.user);
        registerForm.reset();
        window.location = "index.html";
    });
})