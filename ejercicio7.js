window.onload = function (){
    const mensaje = document.querySelector('p');
    const nombre = document.querySelector('#nombre');
    const correo = document.querySelector('#correo');
    const comentario = document.querySelector('textarea');
    const enviar = document.querySelector('#enviar');
    const resetear = document.querySelector('#resetear');

    nombre.addEventListener('focus', e => {
        mensaje.innerHTML = "En este campo puedes añadir el nombre a quien va dirigido el comentario";
        mensaje.style.display = "block";
    })

    nombre.addEventListener('blur', e => {
        mensaje.style.display = "none";
    })

    correo.addEventListener('focus', e => {
        mensaje.innerHTML = "En este campo puedes añadir el correo donde vas a enviar el comentario";
        mensaje.style.display = "block";
    })

    correo.addEventListener('blur', e => {
        mensaje.style.display = "none";
    })

    comentario.addEventListener('focus', e => {
        mensaje.innerHTML = "En este campo puedes escribir tu comentario";
        mensaje.style.display = "block";
    })

    comentario.addEventListener('blur', e => {
        mensaje.style.display = "none";
    })

    enviar.addEventListener('focus', e => {
        mensaje.innerHTML = "Este botón envía la información introducida al servidor";
        mensaje.style.display = "block";
    })

    enviar.addEventListener('blur', e => {
        mensaje.style.display = "none";
    })

    resetear.addEventListener('focus', e => {
        mensaje.innerHTML = "Este botón resetea los campos del formulario";
        mensaje.style.display = "block";
    })

    resetear.addEventListener('blur', e => {
        mensaje.style.display = "none";
    })
}