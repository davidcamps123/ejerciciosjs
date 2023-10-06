let progressCircle = document.querySelector(".progress");

const divGeneralMrBean = document.getElementById("divGeneralMrBean");

let progressComida = document.querySelector("#progressComida");
let progressJugar = document.querySelector("#progressJugar");

let radius = progressCircle.r.baseVal.value;
let radius1 = progressComida.r.baseVal.value;
let radius2 = progressJugar.r.baseVal.value;


let circumference = radius * 2 * Math.PI;
let circumference1 = radius1 * 2 * Math.PI;
let circumference2 = radius2 * 2 * Math.PI;

progressCircle.style.strokeDasharray = circumference;
progressComida.style.strokeDasharray = circumference1;
progressJugar.style.strokeDasharray = circumference2;

let progress = 100;
let progress1 = 100;
let progress2 = 100;
const numMaximo = 100;

document.getElementById("divComida").addEventListener("click", ()=>{
    
  
   
        progress1 = progress1 + 3;
    
    
    
})

document.getElementById("divJugar").addEventListener("click", ()=>{
    
  
   
    progress2 = progress2 + 3;



})
setProgress();

function setProgress() {

    progressCircle.style.strokeDashoffset = circumference - (progress / 100) * circumference;
    progress--;

}
function setProgressComida() {

    progressComida.style.strokeDashoffset = circumference1 - (progress1 / 100) * circumference1;
    progress1--;

}
function setProgressJugar() {

    progressJugar.style.strokeDashoffset = circumference2 - (progress2 / 100) * circumference2;
    progress2--;

}

function startMrBean(){
    for (let i = 0; i <= 100; i++) {

        (function (index) {
            setTimeout(function () {
                if(progress <= 150 && progress >= 65){
                    divGeneralMrBean.style.backgroundColor="rgb(39, 242, 12)";
                }else if(progress < 65 && progress > 30){
                    divGeneralMrBean.style.backgroundColor="orange";
                }else {
                    //document.getElementById("imagen").src = "./mrbeansaludo.png";
                    //document.getElementById("imagen").style.width = "60px";
                    divGeneralMrBean.style.backgroundColor="red";
                    
                }
              setProgress();
              if(progress >= 0){
                document.getElementById("h3de").innerText = progress + "%";
              }else{
                document.getElementById("h3de").innerText = "0%";
              }
              
            }, 600 * index);
          })(i);
               
    }
}

if(progress1 == 0){
    startMrBean();
}
for (let i = 0; i <= 100; i++) {

    (function (index) {
        setTimeout(function () {          
          setProgressComida();        
          if(progress >= 0){
            document.getElementById("h3de1").innerText = progress1 + "%";
          }else{
            document.getElementById("h3de1").innerText = "0%";
          }
        }, 500 * index);
      })(i);
           
}

for (let i = 0; i <= 100; i++) {

    (function (index) {
        setTimeout(function () {          
          setProgressJugar();        
          if(progress >= 0){
            document.getElementById("h3de2").innerText = progress2 + "%";
          }else{
            document.getElementById("h3de2").innerText = "0%";
          }
        }, 800 * index);
      })(i);
           
}

/*document.getElementById("pol").addEventListener("click", ()=>{*/
    document.getElementById("pol").disabled = true;
    
    
/*});*/

        
        
        
        








