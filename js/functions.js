//Constantes
const porcentajeCcss = 0.1067;

//Variables 
let salarioInput = document.getElementById("salario");
let tipoCambioInput = document.getElementById("tipoCambio");
let dropdownItems = document.querySelectorAll('.dropdown-item');
let btnTipoCambio = document.getElementById('btnTipoCambio');
let tipoCambio = "Dolares";

//Formato de los numeros
let formatoNumeros = (numero) => {
    const numeroFormateado = new Intl.NumberFormat('es-CR', {
        style: 'currency',
        currency: 'CRC',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(numero);

    return numeroFormateado;
}

// Calcula la deduccion de la CCSS
let calculoDeduccionCaja = (salario) => {
    return (salario * porcentajeCcss);
}

// Calcula salario sin deducciones
let calculoSalarioBruto = (salario) => {
    return salario;
}

//Calculo del salario neto
let calculoSalarioNeto = (salario) => {
    salario -= calculoDeduccionesTotales(salario);
    return salario;
}

//Calcula la renta de cada uno de los trctos
let calculoRenta = (salario, tracto) => {
    if(!tracto.hasOwnProperty('maximo') && salario >= tracto.minimo){
        return ((salario - tracto.minimo) * tracto.deduccion);   
    }
    else if (salario >= tracto.maximo) {
        return tracto.deduccionMaxima;
    }
    else if (salario >= tracto.minimo) {
        return ((salario - tracto.minimo) * tracto.deduccion);
    }
    return 0;
}

//Calcula la renta de cada uno de los tractos
let calculoRentaTotal = () => {
    let respuesta = 0;
    tractos.forEach(tracto => {
        respuesta += tracto.montoDeduccion;
    });
    return respuesta;
}

//Calcula total de deducciones
let calculoDeduccionesTotales = (salario) => {
    return (calculoDeduccionCaja(salario) + calculoRentaTotal());
}

let calculoSalarioTipoCambio = (salario) => {
    if (tipoCambio == "Dolares") {
        return salario * tipoCambioInput.value;
    } else {
        return salario;
    }
}

//Lista de los tractos de deduccion de renta
let tractos = [
    { id: "exonerado", maximo: 941000, montoDeduccion: 0 },
    { id: "renta10", minimo: 941000, maximo: 1381000, deduccion: 0.10, deduccionMaxima: 44000, montoDeduccion: 0 },
    { id: "renta15", minimo: 1381000, maximo: 2423000, deduccion: 0.15, deduccionMaxima: 156300, montoDeduccion: 0 },
    { id: "renta20", minimo: 2423000, maximo: 4845000, deduccion: 0.20, deduccionMaxima: 484000, montoDeduccion: 0 },
    { id: "renta25", minimo: 4845000, deduccion: 0.25, montoDeduccion: 0 }
]

//Lista del detalle
let detalles = [
    { id: "salarioBruto", monto: 0, metodoCalcular: calculoSalarioBruto },
    { id: "impuestosRenta", monto: 0, metodoCalcular: calculoRentaTotal },
    { id: "caja", monto: 0, metodoCalcular: calculoDeduccionCaja },
    { id: "totalDeducciones", monto: 0, metodoCalcular: calculoDeduccionesTotales },
    { id: "salarioNeto", monto: 0, metodoCalcular: calculoSalarioNeto }
]

//Llenar tablas
//Crea la tabla de los tractos despues de calcular los montos de deduccion
let insertarLinea = (id, monto) => {
    const cell = document.getElementById(id);
    cell.innerHTML = formatoNumeros(monto);
}

//Con este metodo se calcula lo que paga de renta por cada tracto
// y se guarda en el monto de deduccion de cada objeto
let calculoDetractos = (salario) => {
    tractos.forEach(tracto => {
        if (!tracto.hasOwnProperty('minimo')) {
            tracto.montoDeduccion = 0;
        } else {
            tracto.montoDeduccion = calculoRenta(salario, tracto);
        }
        insertarLinea(tracto.id, tracto.montoDeduccion);
    });
}

// Se rellena el detalle para posteriormente crear y llenar la tabla
let llenarDetalle = (salario) => {
    detalles.forEach(detalle => {
        if (typeof detalle.metodoCalcular === "function") {
            if (detalle.metodoCalcular.length === 0) {
                detalle.monto = detalle.metodoCalcular();
            }
            else {
                detalle.monto = detalle.metodoCalcular(salario);
            }
        }
        insertarLinea(detalle.id, detalle.monto);
    });
}

// Agregar funcion para el boton del dropdown
dropdownItems.forEach(item => {
    item.addEventListener('click', function () {
        const selectedValue = this.textContent;
        btnTipoCambio.innerHTML = selectedValue;
        tipoCambio = selectedValue;
        if (selectedValue == "Dolares") {
            tipoCambioInput.style.display = 'inline';
        } else {
            tipoCambioInput.style.display = 'none';
        }
    });
});

//Metodo principal
function Calcular() {
    
    Toastify({
        text: "Calculando el salario!",
        duration: 1000,
        gravity: 'bottom',
        position: 'left',
        style: {
            background: 'linear-gradient(to right, #00b09b, #96c92d)'
        }
    }).showToast();
    let salario = salarioInput.value;
    calculoDetractos(calculoSalarioTipoCambio(salario));
    llenarDetalle(calculoSalarioTipoCambio(salario));
}


  