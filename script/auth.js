const firebaseConfig = {
    apiKey: "AIzaSyB9Hw9aLnKFhTvjSjATsRansdtKvdzd3Lk",
    authDomain: "shopnav-01234.firebaseapp.com",
    databaseURL: "https://shopnav-01234-default-rtdb.firebaseio.com",
    projectId: "shopnav-01234",
    storageBucket: "shopnav-01234.appspot.com",
    messagingSenderId: "831783882500",
    appId: "1:831783882500:web:88000df3904dd0fd0eca51",
    measurementId: "G-QGZWB5B6W4"
};
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

auth.onAuthStateChanged(user => {
    console.log(user);
})