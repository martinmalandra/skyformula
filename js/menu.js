// 1. MENÚ ACTIVO: marca en el nav la sección que se está viendo
const links = document.querySelectorAll('nav a');
const secciones = document.querySelectorAll('main section');

function marcarActivo() {
    let actual = '';

    // La sección actual es la última cuyo comienzo ya pasó por debajo del header
    secciones.forEach(function (seccion) {
        if (window.scrollY >= seccion.offsetTop - 120) {
            actual = seccion.id;
        }
    });

    // Al llegar al final de la página, marca Contacto
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 2) {
        actual = 'contacto';
    }

    // Pasa la clase "activo" al link que apunta a esa sección
    links.forEach(function (link) {
        if (link.getAttribute('href') === '#' + actual) {
            links.forEach(function (otro) {
                otro.classList.remove('activo');
            });
            link.classList.add('activo');
        }
    });
}

window.addEventListener('scroll', marcarActivo);
marcarActivo();

// 2. FILTROS DEL PORTFOLIO: muestran solo las tarjetas de la categoría elegida
const filtros = document.querySelectorAll('.filtro');
const trabajos = document.querySelectorAll('.trabajos li');

filtros.forEach(function (boton) {
    boton.addEventListener('click', function () {
        const categoria = boton.dataset.filtro;

        // El botón tocado queda marcado
        filtros.forEach(function (otro) {
            otro.classList.remove('activo');
        });
        boton.classList.add('activo');

        // Cada tarjeta se esconde si no es de la categoría elegida
        trabajos.forEach(function (trabajo) {
            if (categoria === 'todos' || trabajo.dataset.categoria === categoria) {
                trabajo.classList.remove('oculto');
            } else {
                trabajo.classList.add('oculto');
            }
        });
    });
});
