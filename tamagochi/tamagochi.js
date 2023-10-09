let comprova = true;

const divGeneralMrBean = document.getElementById("divGeneralMrBean");

let progressComida = document.querySelector("#progressComida");
let progressJugar = document.querySelector("#progressJugar");
let progressLuchar = document.querySelector("#progressLuchar");


let radius1 = progressComida.r.baseVal.value;
let radius2 = progressJugar.r.baseVal.value;
let radius3 = progressJugar.r.baseVal.value;


let circumference1 = radius1 * 2 * Math.PI;
let circumference2 = radius2 * 2 * Math.PI;
let circumference3 = radius3 * 2 * Math.PI;


progressComida.style.strokeDasharray = circumference1;
progressJugar.style.strokeDasharray = circumference2;
progressLuchar.style.strokeDasharray = circumference3;

let progress;
let progress1 = 100;
let progress2 = 100;
let progress3 = 100;





document.getElementById("divComida").addEventListener("click", () => {

  progress1 = progress1 + 4;
  document.getElementById("perComida").innerText = progress1 + "%";

  if (progress1 != 0 || progress2 != 0 || progress3!=0) {
    progress = (progress1 + progress2 + progress3) / 3;
    document.getElementById("h3de").innerText = Number(progress.toFixed(2)) + "%";
  }
});

document.getElementById("divJugar").addEventListener("click", () => {

  progress2 = progress2 + 4;
  document.getElementById("percJugar").innerText = progress2 + "%";
  if (progress1 != 0 || progress2 != 0 || progress3!=0) {
    progress = (progress1 + progress2 + progress3) / 3;
    document.getElementById("h3de").innerText = Number(progress.toFixed(2)) + "%";

  }
})

document.getElementById("divLuchar").addEventListener("click", () => {

  progress3 = progress3 + 4;
  document.getElementById("perLuchar").innerText = progress3 + "%";
  if (progress1 != 0 || progress2 != 0 || progress3!=0) {
    progress = (progress1 + progress2 + progress3) / 3;
    document.getElementById("h3de").innerText = Number(progress.toFixed(2)) + "%";

  }
})



function setProgressComida() {

  progressComida.style.strokeDashoffset = circumference1 - (progress1 / 100) * circumference1;
  progress1--;

}
function setProgressJugar() {

  progressJugar.style.strokeDashoffset = circumference2 - (progress2 / 100) * circumference2;
  progress2--;

}

function setProgressLuchar(){
  progressLuchar.style.strokeDashoffset = circumference3 - (progress3 / 100) * circumference3;
  progress3--;
}






// Establece un intervalo para ejecutar la función cada 1 segundo (1000 milisegundos)






const bucleComida = setInterval(() => {
  if (progress1 > 0) {
    setProgressComida();
    document.getElementById("perComida").innerText = progress1 + "%";
  } else {
    clearInterval(bucleComida);
  }
}, 800);

const bucleJugar = setInterval(() => {
  if (progress2 > 0) {
    setProgressJugar();
    document.getElementById("percJugar").innerText = progress2 + "%";
  } else {
    clearInterval(bucleComida);
  }
}, 1000);


const bucleLuchar = setInterval(() => {
  if(progress3>0){
    setProgressLuchar();
    document.getElementById("perLuchar").innerText = progress3 + "%";
  }else{
    clearInterval(bucleLuchar);
  }
}, 500);















