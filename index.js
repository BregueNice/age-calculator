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
        let diasRRR = 30 - dias
        if (diasRRR < 0) {
            diaR.innerHTML = 31 - dias;
        } else {
            let resultadoM = (meses - 12) * -1;
            diaR.innerHTML = 31 - dias;
            anoR.innerHTML = idade;
            mesR.innerHTML = resultadoM;
        }
    }
    if (mesN.value < month) {
        let diasRR = 31 - dias

        anoR.innerHTML = idade + 1;
        if (diasRR > 30) {
            diaR.innerHTML = diasRR - 30;
            meses--
        } else {
            diaR.innerHTML = diasRR;
        }
        mesR.innerHTML = meses * -1;
    }
    else {
        anoR.innerHTML = idade;
        mesR.innerHTML = (meses - 13) * -1;
        let diasRRR = 30 - dias
        if (diasRRR < 0) {
            diaR.innerHTML = 31 + dias;
        } else {
            diaR.innerHTML = dias * -1;
        }
    }
    if(mesN.value == month +1){
        mesR.innerHTML = meses -1;
        anoR.innerHTML = idade +1;
    }
}

