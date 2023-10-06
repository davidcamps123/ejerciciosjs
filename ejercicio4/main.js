document.addEventListener("DOMContentLoaded", function () {

    let bombillaencendida = false;

    document.querySelectorAll(".interruptor").forEach(function (interruptor) {
        interruptor.addEventListener("click", function () {
            bombillaencendida = !bombillaencendida;
            if (bombillaencendida) {
                document.querySelector(".gtr").src = "on.jpg";
                document.querySelector(".interruptor").src = "bon.jpg";

            } else {
                document.querySelector(".gtr").src = "off.jpg";
                document.querySelector(".interruptor").src = "boff.jpg";
            }
        });
    });



document.querySelector('#jujd').addEventListener("input", function () {
    let r = this.value + "deg";

    document.querySelector('.gtr').style.transform = "rotate(" + r + ")";
}); 

document.querySelector('#popo').addEventListener("input", function(){
    
    document.querySelector('.gtr').style.opacity = this.value / 100;
});



   
    
    
});