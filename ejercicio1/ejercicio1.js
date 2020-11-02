let p1;
let p2;
let p3;
let ef;
let tf;


let suma=0;
par=55 / 3;

p1 = Number(prompt('ingresar nota parcial 1'));
p2 = Number(prompt('ingresar nota parcial 2'));
p3 = Number(prompt('ingresar nota parcial 3'));
ef = Number(prompt('ingresar nota examen final '));
tf = Number(prompt('ingresar nota trabajo final'));


 p1= (par*p1)/100
 p2= (par*p2)/100
 p3= (par*p3)/100

 ef= (30*ef)/100
 tf= (15*tf)/100

suma = p1+p2+p3+ef+tf;

document.write("La calificacion final de alumno es: " +suma);

