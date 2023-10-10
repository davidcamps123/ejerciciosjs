let comprova = true;

const divGeneralMrBean = document.getElementById("divGeneralMrBean");
let imagenMrBean = document.getElementById("imagen");
let progressComida = document.querySelector("#progressComida");
let progressJugar = document.querySelector("#progressJugar");
let progressLuchar = document.querySelector("#progressLuchar");
let progressDormir = document.querySelector("#progressDormir");

let radius1 = progressComida.r.baseVal.value;
let radius2 = progressJugar.r.baseVal.value;
let radius3 = progressJugar.r.baseVal.value;
let radius4 = progressDormir.r.baseVal.value;

let circumference1 = radius1 * 2 * Math.PI;
let circumference2 = radius2 * 2 * Math.PI;
let circumference3 = radius3 * 2 * Math.PI;
let circumference4 = radius4 * 2 * Math.PI;

progressComida.style.strokeDasharray = circumference1;
progressJugar.style.strokeDasharray = circumference2;
progressLuchar.style.strokeDasharray = circumference3;
progressDormir.style.strokeDasharray = circumference4;

let progress;
let progress1 = 100;
let progress2 = 100;
let progress3 = 100;
let progress4 = 100;


let btnComida = document.getElementById("btnComida");
let btnLuchar = document.getElementById("btnLuchar");
let btnJugar = document.getElementById("btnJugar");
let btnDormir = document.getElementById("btnDormir");

const percComida = document.getElementById("percComida");
const percLuchar = document.getElementById("percLuchar");
const percJugar = document.getElementById("percJugar");
const percDormir = document.getElementById("percDormir");

function colors(progre) {
  if (progre <= 100 && progre > 65) {
    document.querySelector(".divGeneral").style.backgroundColor = "rgb(39, 242, 12)";
  } else if (progre <= 65 && progre >= 35) {
    document.querySelector(".divGeneral").style.backgroundColor = "orange";
  } else {
    document.querySelector(".divGeneral").style.backgroundColor = "red";
  }
}

btnDormir.addEventListener("click", () => {
  progress4 += 4;
  percDormir.innerText = progress4 + "%";

  if (progress1 != 0 || progress2 != 0 || progress3 != 0 || progress4 != 0) {
    progress = (progress1 + progress2 + progress3 + progress4) / 4;

    colors(progress);

    document.getElementById("h3de").innerText = Number(progress.toFixed(2)) + "%";
  }

});

btnComida.addEventListener("click", () => {

  progress1 = progress1 + 4;
  percComida.innerText = progress1 + "%";

  if (progress1 != 0 || progress2 != 0 || progress3 != 0 || progress4 != 0) {
    progress = (progress1 + progress2 + progress3 + progress4) / 4;

    colors(progress);

    document.getElementById("h3de").innerText = Number(progress.toFixed(2)) + "%";
  }
});

btnJugar.addEventListener("click", () => {

  progress2 = progress2 + 4;
  percJugar.innerText = progress2 + "%";
  if (progress1 != 0 || progress2 != 0 || progress3 != 0 || progress4 != 0) {
    progress = (progress1 + progress2 + progress3 + progress4) / 4;
    colors(progress);
    document.getElementById("h3de").innerText = Number(progress.toFixed(2)) + "%";

  }
})

btnLuchar.addEventListener("click", () => {

  progress3 = progress3 + 4;
  percLuchar.innerText = progress3 + "%";
  if (progress1 != 0 || progress2 != 0 || progress3 != 0 || progress4 != 0) {
    progress = (progress1 + progress2 + progress3 + progress4) / 4;
    colors(progress);
    document.getElementById("h3de").innerText = Number(progress.toFixed(2)) + "%";

  }
})

function setProgress(tipo) {
  switch (tipo) {
    case "comida":
      progressComida.style.strokeDashoffset = circumference1 - (progress1 / 100) * circumference1;
      progress1--;
      break;
    case "jugar":
      progressJugar.style.strokeDashoffset = circumference2 - (progress2 / 100) * circumference2;
      progress2--;
      break;
    case "luchar":
      progressLuchar.style.strokeDashoffset = circumference3 - (progress3 / 100) * circumference3;
      progress3--;
      break;
    case "dormir":
      progressDormir.style.strokeDashoffset = circumference4 - (progress4 / 100) * circumference4;
      progress4--;
      break;
  }

}

const bucleComida = setInterval(() => {
  if (progress1 > 0) {
    setProgress("comida");
    percComida.innerText = progress1 + "%";
  }
}, Math.floor(Math.random() * (1000 - 200 + 1)) + 200);

const bucleJugar = setInterval(() => {
  if (progress2 > 0) {
    setProgress("jugar");
    percJugar.innerText = progress2 + "%";
  }
}, Math.floor(Math.random() * (1000 - 200 + 1)) + 200);


const bucleLuchar = setInterval(() => {
  if (progress3 > 0) {
    setProgress("luchar");
    percLuchar.innerText = progress3 + "%";
  }
}, Math.floor(Math.random() * (1000 - 200 + 1)) + 200);

const bucleDormir = setInterval(() => {
  if (progress4 > 0) {
    setProgress("dormir");
    percDormir.innerText = progress4 + "%";
  }
}, Math.floor(Math.random() * (1000 - 200 + 1)) + 200);


const prova = setInterval(() => {
  if (progress1 == 0 && progress2 == 0 && progress3 == 0 && progress4 == 0) {
    imagenMrBean.src = "./tenor.gif";
    document.getElementById("h3de").innerText = "☠️☠️";
    document.querySelector(".divGeneral").style.backgroundColor = "red";
    botonesDisabled();
    clearInterval(prova);
  }
}, 100);


function botonesDisabled() {
  btnComida.disabled = true;
  btnLuchar.disabled = true
  btnJugar.disabled = true;
  btnDormir.disabled = true;
}









