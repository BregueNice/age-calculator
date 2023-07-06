const d = new Date();
let month = d.getMonth();
let year = d.getFullYear();
let day = d.getDate();
let anoN = document.querySelector('#ano');
let mesN = document.querySelector('#mes');
let diaN = document.querySelector('#dia');

const anoR = document.querySelector('#ano__resultado')
const mesR = document.querySelector('#mes__resultado')
const diaR = document.querySelector('#dia__resultado')


function calcula() {
    let idade = (year - anoN.value) -1;
    let meses = (mesN.value - month);
    let dias = (diaN.value - day);


    if (mesN.value >= month && diaN.value >= day) {
        anoR.innerHTML = idade++;
        if(mesN.value > month && diaN.value >= day){
            mesR.innerHTML = meses-1;
            diaR.innerHTML = dias;
        }
    } else {
        anoR.innerHTML = idade++;
        mesR.innerHTML = meses;
        diaR.innerHTML = dias*(-1);
    }
    console.log(dias);
}