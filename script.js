const imagen = document.getElementById('imagen');
const texto = document.getElementById('texto');

imagen.addEventListener('mouseenter', () => {
    imagen.src = "Imagen2.png";
    texto.innerHTML = "Otra Imagen";
});

imagen.addEventListener('mouseleave', () => {
    imagen.src = "Imagen.png";
    texto.innerHTML = "Imagen Original";
});
