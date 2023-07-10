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

let diaCor = document.getElementById('dia-cor')
let mesCor = document.getElementById('mes-cor')
let anoCor = document.getElementById('ano-cor')


function calcula() {
    if (anoN.value === "" && mesN.value === "" && diaN.value === "") {
        document.getElementById("campo-vazio-d").style.display = "block";
        document.getElementById("campo-vazio-m").style.display = "block";
        document.getElementById("campo-vazio-y").style.display = "block";

        avisos();
    } else if (anoN.value > year && mesN.value > 12 && diaN.value > 31) {
        invalido('invalido-a');
        invalido('invalido-m');
        invalido('invalido-d');
    } else if (anoN.value > year) {
        invalido('invalido-a');
    } else if (mesN.value > 12) {
        invalido('invalido-m');
    } else if (diaN.value > 31) {
        invalido('invalido-d');
    }
    else {
        removeI('invalido-a');
        removeI('invalido-m');
        removeI('invalido-d');
        remove();
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
                if(dias < 0){
                    diaR.innerHTML = dias *-1;
                }else{
                diaR.innerHTML = 30 - dias;
                }
            }
        }
        if (mesN.value == month + 1) {
            mesR.innerHTML = meses - 1;
            anoR.innerHTML = idade + 1;
        }
    }
}

function remove() {
    let verm = document.getElementsByClassName('vermelho');
    let vermB = document.getElementsByClassName('vermelho__borda');
    while (verm.length > 0) {
        verm[0].classList.remove('vermelho')
    }
    while (vermB.length > 0) {
        vermB[0].classList.remove('vermelho__borda');
    }
    document.getElementById("campo-vazio-m").style.display = "none";
    document.getElementById("campo-vazio-d").style.display = "none";
    document.getElementById("campo-vazio-y").style.display = "none";
}

function avisos() {
    diaCor.classList.add("vermelho");
    mesCor.classList.add("vermelho");
    anoCor.classList.add("vermelho");

    diaN.classList.add("vermelho__borda");
    mesN.classList.add("vermelho__borda");
    anoN.classList.add("vermelho__borda");
}

function invalido(id) {
    remove();
    avisos();
    document.getElementById(id).style.display = "block";
    document.getElementById(id).style.display = "block";
    document.getElementById(id).style.display = "block";
}

function removeI(id){
    document.getElementById(id).style.display = "none";
}