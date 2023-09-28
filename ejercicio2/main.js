

document.addEventListener("DOMContentLoaded", function () {
    const btn1 = document.getElementById("button1");
    const btn2 = document.getElementById("button2");
    const p1 = document.getElementById("p1");
    const p2 = document.getElementById("p2");
    btn1.addEventListener("click", function () {
        p1.classList.toggle("texto-rojo");
    });

    btn2.addEventListener("click", function () {
        p2.classList.toggle("fondo-azul");
    });

});

