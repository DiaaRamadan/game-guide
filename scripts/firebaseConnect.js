const firebaseConfig = {
    apiKey: "AIzaSyD18N4h5aP75NhRin8mkkO6huI4cHhBzwY",
    authDomain: "game-guides-98cf1.firebaseapp.com",
    databaseURL: "https://game-guides-98cf1.firebaseio.com",
    projectId: "game-guides-98cf1",
    storageBucket: "game-guides-98cf1.appspot.com",
    messagingSenderId: "154395972358",
    appId: "1:154395972358:web:6c1c57b9c2717e8a90c487",
    measurementId: "G-MQ276XJLF3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
const auth = firebase.auth(); // auth object
const db = firebase.firestore(); // firestore object
