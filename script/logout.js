//logout
const logout = document.querySelector("#logoutBtn");
logout.addEventListener('click', (e) => {
    auth.signOut().then(() => {
        console.log('user logged out');
        window.location = "login.html";
    });
});