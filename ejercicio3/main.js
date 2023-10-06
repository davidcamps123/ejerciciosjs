document.addEventListener("DOMContentLoaded", function () {
    const arrayTijeraPapelPiedra = ["✌️", "✋", "✊"];
    document.getElementById("jay").style.display = "none";
    let queToca;
    let nomjug;
    let numero;
    const btnPapel = document.getElementById("btnPapel");
    const btnTijera = document.getElementById("btnTijera");
    const btnRoca = document.getElementById("btnRoca");
    const btnrf = document.getElementById("jugar");
    const input = document.getElementById("cachimba");
    let puntUsuari = 0;
    let puntMaquina = 0;


    btnrf.onclick = () => {
        btnPapel.hidden = false;
        btnTijera.hidden = false
        btnRoca.hidden = false;
        btnrf.hidden = true;
        document.getElementById("koka").style.display = "flex";
        document.getElementById("cachimba").hidden = true;
        document.getElementById("jay").style.display = "block";
        document.getElementById("nomjuf").innerHTML = input.value + ": ";
        document.getElementById("tuimagen").src = "./loading.gif";
        document.getElementById("laotra").src = "./loading.gif";
    }
    btnPapel.onclick = () => {
        random();

        queToca = "✋";
        validar();
        morveTo();

        
    }
    function morveTo() {
        document.getElementById("tuimagen").src = "";
        document.getElementById("laotra").src = "";
        if (queToca == "✊") {
            document.getElementById("tuimagen").src = "./piedra.png";
        } else if (queToca == "✌️") {
            document.getElementById("tuimagen").src = "./tijera.png";
        } else {
            document.getElementById("tuimagen").src = "./papel.png";
        }

        document.getElementById("laotra").src = "./loading.gif";
        setTimeout(morveto2, 1900);


    }
    
    function morveto2() {
        if (arrayTijeraPapelPiedra[numero] == "✊") {
            document.getElementById("laotra").src = "./piedra.png";
        } else if (arrayTijeraPapelPiedra[numero] == "✌️") {
            document.getElementById("laotra").src = "./tijera.png";
        } else {
            document.getElementById("laotra").src = "./papel.png";
        }

        document.getElementById("ganaste").innerHTML = puntUsuari;
        document.getElementById("ganaste1").innerHTML = puntMaquina;
    }
    btnTijera.onclick = () => {
        random();
        queToca = "✌️";
        validar();
        morveTo();
        
        
    }
    btnRoca.onclick = () => {
        random();
        queToca = "✊";
        validar();
        morveTo();
      
    }
    function random() {
        numero = Math.floor(Math.random() * arrayTijeraPapelPiedra.length);
        return numero;
    }


    function escribirresultado() {
        return docume
    }

    function validar() {
        if (queToca == arrayTijeraPapelPiedra[numero]) {

        } else if (
            (queToca == "✌️" && arrayTijeraPapelPiedra[numero] == "✋") ||
            (queToca == "✋" && arrayTijeraPapelPiedra[numero] == "✊") ||
            (queToca == "✊" && arrayTijeraPapelPiedra[numero] == "✌️")
        ) {
            puntUsuari++;

        } else {
            puntMaquina++;

        }
    }
});