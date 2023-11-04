
        window.addEventListener("load", e => {
            const parrafo = document.querySelector('P');
            let segundos=0;

            setInterval(() => {
                segundos++;
                parrafo.innerHTML = segundos + " segundos desde que cargó la página"},1000);
            })