let p1;
let p2;
let p3;

let suma=0;

p1 = Number(prompt('ingresar inversion 1'));
p2 = Number(prompt('ingresar inversion 2'));
p3 = Number(prompt('ingresar inversion 3'));

suma= p1+p2+p3;

p1= (p1/suma)*100;
p2= (p2/suma)*100;
p3= (p3/suma)*100;

document.write("El porcentaje de la persona 1 es : " +p1+"%" + "<br>"+
"El porcentaje de la persona 2 es : " +p2+"%" + "<br>"+
"El porcentaje de la persona 3 es  : " +p3 + "%");


