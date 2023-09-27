const btnPush = document.getElementById("push");
const btnUnshift = document.getElementById("unshift");
const btnPop = document.getElementById("pop");
const btnShift = document.getElementById("shift");
const btnInsertAt = document.getElementById("insertat");
const inputAfe = document.getElementById("inp1");
const inputEli = document.getElementById("inp2");
const btnRemoveAt = document.getElementById("removeat");

const array = ["🍓", "🎴", "🍄", "🍋", "🍍", "🍕", "🃏", "🌶️", "🥵", "🙂", "🥛", "🍒", "🍺", "🥩", "🍙", "🍘", "🍱", "🍜", "😊", "👋", "🍔", "🥙", "🍣", "😀", "😁", "😂", "😪", "😯", "🙄", "😭", "🤯", "😮‍💨", "🤠", "🤢", "👾", "🙈", "😸", "👻", "🤓", "🦓", "🐼", "🦍", "🦧", "🐄", "🐪", "🐐", "🦡", "🐏", "🦬", "🐎", "🐃", "🦭", "🐬", "🐠", "🦤", "🦉", "🐌", "🐧", "🧞‍♂️", "🦠", "🧠", "👣", "⛷️"];
let arrayN = [];
let numero;
let numeroPoa;

btnShift.onclick = () => {
    arrayN.shift();
    esribir();
}






btnRemoveAt.onclick = ()=>{
    numeroPoa = inputEli.value;
    if(arrayN[numeroPoa] != undefined){
        
        arrayN.splice(numeroPoa, 1);
    }else{
        alert("Alerta");
    }
    esribir();
}












btnInsertAt.onclick = () => {
    numeroPoa = inputAfe.value;
    random();
   
    if(arrayN[numeroPoa] != undefined){
        
        arrayN.splice(numeroPoa, 0, array[numero]);
    }else{
        alert("Alerta");
    }
    esribir();
}

btnPush.onclick = () => {

    random();
    arrayN.push(array[numero]);
    esribir();



}
btnPop.onclick = () => {
    arrayN.pop();
    esribir();
}

btnUnshift.onclick = () => {
    random();

    arrayN.unshift(array[numero]);
    esribir();
}

function random() {
    numero = Math.floor(Math.random() * array.length);
    return numero;
}

function esribir() {
    return document.getElementById("parraf").innerHTML = arrayN;
}