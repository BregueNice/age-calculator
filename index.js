const d = new Date();
let month = d.getMonth();
let year = d.getFullYear();
let day = d.getDate();
let anoN = 1998;
let mesN = 5;
let diaN = 1;


let idade = (year - anoN)-1;

if(mesN >= month && diaN >= day){
    console.log(idade + 1);
}