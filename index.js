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
    let idade = (year - anoN.value) - 1;
    let meses = (mesN.value - month);
    let dias = (diaN.value - day);


    if (mesN.value >= month && diaN.value >= day) {
        if (mesN.value > month && diaN.value >= day) {
            let resultadoM = ((meses) - 12) * -1;
            diaR.innerHTML = 31 - dias;
            anoR.innerHTML = idade;
            mesR.innerHTML = resultadoM;
        }
    }
    if (mesN.value < month) {
        mesR.innerHTML = meses * (-1);
        diaR.innerHTML = 30 - dias;
        anoR.innerHTML = idade;
    }
    else {
        anoR.innerHTML = idade++;
        mesR.innerHTML = meses;
        diaR.innerHTML = dias * (-1);
    }
    console.log(meses);
}