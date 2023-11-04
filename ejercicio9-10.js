window.onload = function(){
    const imagenes = document.querySelectorAll('img');
    let arrastrando = false;
    let imagenSeleccionada = null;
    let ancho, alto;

    imagenes.forEach(imagen => {
        imagen.addEventListener('mousedown', e => {
            arrastrando = true;
            imagenSeleccionada = imagen;
            ancho = e.ancho;
            alto = e.alto;
        });

        document.addEventListener('mousemove', e => {
            if (arrastrando && imagenSeleccionada) {
                imagenSeleccionada.style.left = e.clientX - ancho + 'px';
                imagenSeleccionada.style.top = e.clientY - alto + 'px';
            }
        });

        document.addEventListener('mouseup', e => {
            arrastrando = false;
            imagenSeleccionada = null;
        });
    });
}