
class Sueldos {
    constructor (mes, monto) {
        this.mes = mes;
        this.monto = monto;
    }
}

const sueldosAnio = [];
const sueldo1 = new Sueldos ("Enero", 90000)
const sueldo2 = new Sueldos ("Febrero", 92000)
const sueldo3 = new Sueldos ("Marzo", 95000)
const sueldo4 = new Sueldos ("Abril", 98000)
const sueldo5 = new Sueldos ("Mayo", 100000)
const sueldo6 = new Sueldos ("Junio", 105000)


sueldosAnio.push (sueldo1);
sueldosAnio.push (sueldo2);
sueldosAnio.push (sueldo3);
sueldosAnio.push (sueldo4);
sueldosAnio.push (sueldo5);
sueldosAnio.push (sueldo6);

console.log (sueldosAnio);

let total= sueldosAnio.reduce((sumoSueldos, sueldo) => sumoSueldos + sueldo.monto,0);

console.log (total);

let porcentaje;


function jubilacion( total, porcentaje) {
    return (total * porcentaje / 100);
}

do {
   alert ("La suma de los últimos sueldos del año es " + total)
   porcentaje = parseFloat(prompt("Ingrese el porcentaje"))
} 

while(isNaN(total) || isNaN(porcentaje))

let resultado = jubilacion(total, porcentaje)
alert ("El monto a cobrar de jubilación es " + resultado)

// no me doy cuenta como hacer para que el cálculo me aparezca también 
//en la consola. 

console.log (resultado)


