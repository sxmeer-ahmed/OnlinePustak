setInterval(() => {
    const loggedIn = JSON.parse(localStorage.getItem('user'));
    if (loggedIn == undefined) {
        showAlert("Some Error Occured, Pls Log in Again!", false)
        localStorage.clear();
        setTimeout(() => {
            window.location.href = './signin.html';
        }, 2000);
    }
}, 10 * 1000);

$('.logout-btn').click(function(){
    localStorage.clear();
    window.location.href = './index.html';
})