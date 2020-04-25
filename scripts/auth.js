// sign up
const signUpForm = document.querySelector('#signup-form');
signUpForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // get user cred
    const email = signUpForm['signup-email'].value;
    const password = signUpForm['signup-password'].value;

    // create user
    auth.createUserWithEmailAndPassword(email, password).then((cred) => {
        const modal = document.querySelector('#modal-signup');
        M.Modal.getInstance(modal).close();
        signUpForm.reset();
    });
});