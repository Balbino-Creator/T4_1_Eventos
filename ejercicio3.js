const parrafo = document.querySelector('P');
        window.addEventListener("load", e => {
            let segundos=0;

            setInterval(() => {
                segundos++;
                parrafo.innerHTML = segundos + " segundos desde que cargó la página"},1000);
            })