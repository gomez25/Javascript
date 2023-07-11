//Constantes
const reduccion0 = 941000;
const reduccion10 = 1381000;
const reduccion15 = 2423000;
const reduccion20 = 4845000;
//Variables Globales
let rentaCompleta = 0;
let diccionario = {};

//Metodos de solicitar datos
function salarioCalculadoSegunLaMoneda() {
    let salario = solicitarSalarioAlUsuario()
    let tipoMoneda = prompt("Elegir una de las siguientes opciones: \n 1.Dolares\n 2.Colones")
    if (tipoMoneda == 1) {
        salario = salario * 549;
    }
    return salario;
}

function solicitarSalarioAlUsuario() {
    let salario = prompt("Ingrese su salario:")
    return salario;
}

function retornarTractosYDetalle() {
    salario = salarioCalculadoSegunLaMoneda();
    if (salario > 0) {
        calculoRentaCompleta(salario);
        console.log("Detalles\n");
        console.log("Salario Bruto: " + salario + "\n");
        console.log("Impuestos sobre la renta: " + rentaCompleta + "\n");
        console.log("CCSS (10.67%): " + calculoDeduccionCaja(salario) + "\n");
        console.log("Total de deducciones: " + calculoTotalDeducciones(salario) + "\n");
        console.log("Salario neto: " + calculoSalarioNeto(salario) + "\n");
        console.log("\n");
        console.log("Tractos de cobros de renta\n");
        console.log("Hasta " + reduccion0 + " se rebaja un 0% 0\n");
        console.log("Sobre el excendente de " + reduccion0 + " hasta " + reduccion10 + " se rebaja un 10% " + eliminarUndefined(diccionario.renta10) + "\n");
        console.log("Sobre el excendente de " + reduccion10 + " hasta " + reduccion15 + " se rebaja un 15% " + eliminarUndefined(diccionario.renta15) + "\n");
        console.log("Sobre el excendente de " + reduccion15 + " hasta " + reduccion20 + " se rebaja un 20% " + eliminarUndefined(diccionario.renta20) + "\n");
        console.log("Sobre el excendente de " + reduccion20 + " se rebaja un 25% " + eliminarUndefined(diccionario.renta25));
    } else {
        console.error("El salario debe ser mayor a 0!");
    }
}
let eliminarUndefined = (numero) => {
    return numero || 0;
}

let calculoTotalDeducciones = (salario) => {
    return (salario - calculoSalarioNeto(salario));
}
let calculoDeduccionCaja = (salario) => {
    return (salario * .1067);
}

let calculoSalarioNeto = (salario) => {
    return (salario - rentaCompleta - calculoDeduccionCaja(salario));
}

let calculoRentaCompleta = (salario) => {
    const matriz = [
        { montoReduccion: reduccion0, metodoCalcular: calculoRenta10 },
        { montoReduccion: reduccion10, metodoCalcular: calculoRenta15 },
        { montoReduccion: reduccion15, metodoCalcular: calculoRenta20 },
        { montoReduccion: reduccion20, metodoCalcular: calculoRenta25 }
    ];

    for (let i = 0; i < matriz.length; i++) {
        const { montoReduccion, metodoCalcular } = matriz[i];

        if (salario > montoReduccion) {
            const renta = metodoCalcular(salario);
            rentaCompleta += renta;
            let nombreLlave = "renta" + (i * 5 + 10);
            diccionario[nombreLlave] = renta;

        }
    }
}

//Calculo de renta segun el salario
let calculoRenta10 = (salario) => {
    if (salario >= reduccion10) {
        return ((reduccion10 - reduccion0) * .10);
    }
    else {
        return ((salario - reduccion0) * .10)
    }
}
let calculoRenta15 = (salario) => {
    if (salario >= reduccion15) {
        return ((reduccion15 - reduccion10) * .15);
    }
    else {
        return ((salario - reduccion10) * .15)
    }
}
let calculoRenta20 = (salario) => {
    if (salario >= reduccion20) {
        return ((reduccion20 - reduccion15) * .20);
    }
    else {
        return ((salario - reduccion15) * .20)
    }
}
let calculoRenta25 = (salario) => {
    return ((salario - reduccion20) * .25)
}

retornarTractosYDetalle();