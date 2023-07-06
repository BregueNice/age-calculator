const d = new Date();
let month = d.getMonth();
let year = d.getFullYear();
let day = d.getDate();
let anoN = document.querySelector('#ano');
let mesN = document.querySelector('#mes');
let diaN = document.querySelector('#dia');

let idade = year - anoN;

function calcula(){
    
    // if(mesN >= month && diaN >= day){
    //     console.log(idade + 1);
    // }else{
    // }
    console.log(idade);
    console.log(year - anoN.value);
    // console.log(mesN.value);
    // console.log(diaN.value);
}