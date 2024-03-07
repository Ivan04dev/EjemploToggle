// const toggleButton = document.getElementById('toggleButton');
// const elementToToggle = document.getElementById('elementToToggle');

// toggleButton.addEventListener('click', function() {
//     // Toggle the visibility of the element
//     elementToToggle.classList.toggle('hidden');
// });

// CIUDADES
const checkVerCiudades = document.getElementById('verCiudades');
const divisiones = document.getElementById('divisiones');

checkVerCiudades.addEventListener('click', function() {
    // Muestra/oculta las divisiones (Metro - Sur - Norte)
    divisiones.classList.toggle('hidden');
});

// -----------------------------------------------------------------------

// DIVISIÓN METRO
const checkverMetro = document.getElementById('verMetro');
const divMetro = document.getElementById('divMetro');

checkverMetro.addEventListener('click', function() {
    // Muestra/oculta las regiones de Metro (Metro Norte - Metro Sur)
    divMetro.classList.toggle('hidden');
});

// METRO NORTE
const checkverMetroN = document.getElementById('verMetroN');
const divCiudadesMN = document.getElementById('divCiudadesMN');

checkverMetroN.addEventListener('click', function() {
    // Muestra/oculta las ciudades de Metro Norte
    divCiudadesMN.classList.toggle('hidden');
});

// METRO SUR
const checkverMetroS = document.getElementById('verMetroS');
const divCiudadesMS = document.getElementById('divCiudadesMS');

checkverMetroS.addEventListener('click', function() {
    // Muestra/oculta las ciudades de Metro Norte
    divCiudadesMS.classList.toggle('hidden');
});

// -----------------------------------------------------------------------

// DIVISIÓN SUR
const checkVerSur = document.getElementById('verSur');
const divSur = document.getElementById('divSur');

checkVerSur.addEventListener('click', function() {
    // Muestra/oculta las regiones de Metro (Metro Norte - Metro Sur)
    divSur.classList.toggle('hidden');
});

// GOLFO
// const checkverMetroN = document.getElementById('verMetroN');
// const divCiudadesMN = document.getElementById('divCiudadesMN');
/*
checkverMetroN.addEventListener('click', function() {
    // Muestra/oculta las ciudades de Metro Norte
    divCiudadesMN.classList.toggle('hidden');
});
*/

// -----------------------------------------------------------------------

// DIVISIÓN NORTE
const checkVerNorte = document.getElementById('verNorte');
const divNorte = document.getElementById('divNorte');

checkVerNorte.addEventListener('click', function() {
    // Muestra/oculta las regiones de Metro (Metro Norte - Metro Sur)
    divNorte.classList.toggle('hidden');
});