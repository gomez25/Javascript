//Constantes
const doc = document;
const head = doc.head;
const body = doc.body;
const title = doc.title;
title.innerHTML = "Proyecto Final David Gomez"

///////////////////Inicio Navbar//////////////////////////
//Crear elementos del NavBar
const header = doc.createElement('header');
const footer = doc.createElement('footer');
const divNav = doc.createElement('div');
const navBar = doc.createElement('nav');
const ul = doc.createElement('ul');
const links = [
    {
        page: 'index',
        link: 'Inicio'
    },
    {
        page: 'pages/proyectos',
        link: 'Proyectos'
    }
];
body.prepend(header)
header.append(navBar)
navBar.appendChild(divNav)
divNav.appendChild(ul)

//Rellenar NavBar   
links.forEach((nombre) => {
    ul.innerHTML += `
                    <li class="nav-item">
                        <a class="nav-link" href="/${nombre.page}.html">${nombre.link}</a> 
                    </li>
    `
});

//Crear estilos 
navBar.classList = 'navbar navbar-expand-lg navbar-dark bg-dark'
divNav.classList = 'container-fluid'
ul.classList = 'navbar-nav'

///////////////////Fin Navbar//////////////////////////

///////////////////Inicio Body//////////////////////////

//Crear elementos del body
const main = doc.createElement('main');
const bodyTitle = doc.createElement('h1');
const bodySubtitle = doc.createElement('h3');
const bodyInputsSection = doc.createElement('section');
const bodyDivContainer = doc.createElement('div');
const bodyDivSubContainer = doc.createElement('div');
const bodySalarioInput = doc.createElement('input');
const bodySalarioButton = doc.createElement('button');
const bodySalarioUl = doc.createElement('ul');
const bodyTipoCambioInput = doc.createElement('input');
const bodyTyDSection = doc.createElement('section');
const bodyTractosTitle = doc.createElement('h2');
const bodyTractosTable = doc.createElement('table');
const bodyTractosTHead = doc.createElement('thead');
const bodyTractosTbody = doc.createElement('tbody');
const bodyDetallesTitle = doc.createElement('h2');
const bodyDetallesTable = doc.createElement('table');
const bodyDetallesTHead = doc.createElement('thead');
const bodyDetallesTbody = doc.createElement('tbody');

const listaSalarioDropDown = [
    {
        value: 'Colones'
    },
    {
        value: 'Dolares'
    }
];

const listaTractosTd = [
    {
        nombre: 'Hasta ₡941,000.00',
        porcentaje: '0%',
        monto: '₡0.00',
        id: 'exonerado'
    },
    {
        nombre: 'Sobre el excedente de ₡941,000.00 hasta ₡1,381,000.00',
        porcentaje: '10%',
        monto: '₡0.00',
        id: 'renta10'
    },
    {
        nombre: 'Sobre el excedente de ₡1,381,000.00 hasta ₡2,423,000.00',
        porcentaje: '15%',
        monto: '₡0.00',
        id: 'renta15'
    },
    {
        nombre: 'Sobre el excedente de ₡2,423,000.00 hasta ₡4,845,000.00',
        porcentaje: '20%',
        monto: '₡0.00',
        id: 'renta20'
    },
    {
        nombre: 'Sobre el excedente de ₡4,845,000.00',
        porcentaje: '25%',
        monto: '₡0.00',
        id: 'renta25'
    }
];

const listaDetallesTd = [
    {
        nombre: 'Salario Bruto:',
        monto: '₡0.00',
        id: 'salarioBruto'
    },
    {
        nombre: 'Impuestos sobre la Renta:',
        monto: '₡0.00',
        id: 'impuestosRenta'
    },
    {
        nombre: 'CCSS: 10.67%',
        monto: '₡0.00',
        id: 'caja'
    },
    {
        nombre: 'Total de Deducciones:',
        monto: '₡0.00',
        id: 'totalDeducciones'
    },
    {
        nombre: 'Salario Neto:',
        monto: '₡0.00',
        id: 'salarioNeto'
    }
];
//Ordenar el orden de body
body.appendChild(main);
main.appendChild(bodyTitle);
main.appendChild(bodySubtitle);

main.appendChild(bodyInputsSection);
bodyInputsSection.appendChild(bodyDivContainer);
bodyDivContainer.appendChild(bodyDivSubContainer);
bodyDivSubContainer.appendChild(bodySalarioInput);
bodyDivSubContainer.appendChild(bodySalarioButton);
bodyDivSubContainer.appendChild(bodySalarioUl);
bodyDivContainer.appendChild(bodyTipoCambioInput);

main.appendChild(bodyTyDSection);
bodyTyDSection.appendChild(bodyTractosTitle);
bodyTyDSection.appendChild(bodyTractosTable);
bodyTractosTable.appendChild(bodyTractosTHead);
bodyTractosTable.appendChild(bodyTractosTbody);

bodyTyDSection.appendChild(bodyDetallesTitle);
bodyTyDSection.appendChild(bodyDetallesTable);
bodyDetallesTable.appendChild(bodyDetallesTHead);
bodyDetallesTable.appendChild(bodyDetallesTbody);

//Rellenar variables
bodyTitle.innerHTML = "Calculadora de Deducciones";
bodySubtitle.innerHTML = "Herramienta que realiza el calculo de deducciones salariales de Costa Rica";
bodySalarioButton.textContent = "Dolares";
bodyTractosTitle.innerHTML = "Tractos";
bodyDetallesTitle.innerHTML = "Detalles";
bodyTractosTHead.innerHTML = `
                <tr>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
    `;
bodyDetallesTHead.innerHTML = `
                <tr>
                    <th></th>
                    <th></th>
                </tr>
    `;
//Agregar atributos del body
bodyDivContainer.setAttribute("class", "mb-3");
bodyDivSubContainer.setAttribute("class", "input-group mb-3");

bodySalarioInput.setAttribute("type", "number");
bodySalarioInput.setAttribute("class", "form-control");
bodySalarioInput.setAttribute("id", "salario");
bodySalarioInput.setAttribute("placeholder", "Salario");
bodySalarioInput.setAttribute("onblur", "Calcular()");

bodySalarioButton.setAttribute("class", "btn btn-outline-secondary dropdown-toggle");
bodySalarioButton.setAttribute("type", "button");
bodySalarioButton.setAttribute("data-bs-toggle", "dropdown");
bodySalarioButton.setAttribute("aria-expanded", "false");
bodySalarioButton.setAttribute("id", "btnTipoCambio");

bodySalarioUl.setAttribute("class", "dropdown-menu dropdown-menu-end");

bodyTipoCambioInput.setAttribute("type", "number");
bodyTipoCambioInput.setAttribute("class", "form-control");
bodyTipoCambioInput.setAttribute("id", "tipoCambio");
bodyTipoCambioInput.setAttribute("placeholder", "Tipo de cambio");

bodyTyDSection.setAttribute("id", "table-container");
bodyTractosTable.setAttribute("class", "table table-striped");

bodyDetallesTable.setAttribute("class", "table table-striped");

//Rellenar lista dropdown
listaSalarioDropDown.forEach((lista) => {
    bodySalarioUl.innerHTML += `
                    <li class="nav-item">
                        <a class="dropdown-item">${lista.value}</a> 
                    </li>
    `
});

//Rellenar tractos
listaTractosTd.forEach((lista) => {
    bodyTractosTbody.innerHTML += `
                <tr>
                    <td>${lista.nombre}</td>
                    <td>${lista.porcentaje}</td>
                    <td id="${lista.id}">${lista.monto}</td>
                </tr>
    `
});

//Rellenar detalles
listaDetallesTd.forEach((lista) => {
    bodyDetallesTbody.innerHTML += `
                <tr>
                    <td>${lista.nombre}</td>
                    <td id="${lista.id}">${lista.monto}</td>
                </tr>
    `
});

///////////////////Fin Body//////////////////////////