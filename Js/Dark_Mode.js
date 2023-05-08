Body = document.body;
Darkmode = document.getElementById("Header_DarkMode")
Ligthmode = document.getElementById("Header_LigthMode")

Darkmode.onclick = function() {
    Body.classList.toggle("Body_DarkMode");
}

Ligthmode.onclick = function() {
    Body.classList.toggle("Body_DarkMode");
}