window.onload = function () {
    var btn = document.getElementById("button-change");
    var text = document.getElementById("paragraph");
    var btnDos = document.getElementById("magic");
    var txtDos = document.getElementById("text")

    btn.addEventListener("click", function(){
        txt.innerHTML = "<h2>Git y Github te amamos</h2>";
        })

    btnDos.addEventListener("click", function(){
        txtDos.classList.add("disappear");
    })
}