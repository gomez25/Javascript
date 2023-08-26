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