let p1;
let p2;
let p3;
let ef;
let tf;
let par=55 / 3;
let suma=0;

p1 = Number(prompt('ingresar nota parcial 1'));
p2 = Number(prompt('ingresar nota parcial 2'));
p3 = Number(prompt('ingresar nota parcial 3'));
ef = Number(prompt('ingresar nota examen final '));
tf = Number(prompt('ingresar nota trabajo final'));


let p1= (par*p1)/100
let p2= (par*p2)/100
let p3= (par*p3)/100

let ef= (30*ef)/100
let tf= (15*tf)/100

suma = p1+p2+p3+ef+tf)/5;

console.log("la calificacion final del alumno es " +suma);

