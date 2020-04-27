// listen for auth status changes
auth.onAuthStateChanged((user) => {
    if (user) {
        // get guides
        db.collection('guides').onSnapshot((snapshot) => {
            setupGuides(snapshot.docs);
            setupUI(user);
        });
    } else {
        setupGuides([]);
        setupUI();
    }
});

// sign up
const signUpForm = document.querySelector('#signup-form'); // get the signUp form
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

// user sign out
const logoutBtn = document.querySelector('#logout'); // get the logout Button
logoutBtn.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut();
});

// User Login
const loginForm = document.querySelector('#login-form'); // get login form
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = loginForm['login-email'].value;
    const password = loginForm['login-password'].value;

    auth.signInWithEmailAndPassword(email, password).then((cred) => {
        const modal = document.querySelector('#modal-login');
        M.Modal.getInstance(modal).close();
        loginForm.reset();
    });
});

// create new guide
const createForm = document.querySelector('#create-form');
createForm.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('guides').add({
        title: createForm['title'].value,
        content: createForm['content'].value
    }).then(() => {
        const modal = document.querySelector('#modal-create');
        M.Modal.getInstance(modal).close();
        createForm.reset();
    }).catch(err => {
        alert(err.message);
    });
});