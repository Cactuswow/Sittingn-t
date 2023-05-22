Body = document.body;
LigthmodeSitting = document.querySelector('.DarkmodeCircle');
DarkmodeSitting = document.querySelector('.DarkmodeSquare');

DarkmodeSitting.onclick = function() {
    Body.classList.add("Body_DarkMode");
}

LigthmodeSitting.onclick = function() {
    Body.classList.remove("Body_DarkMode");
}