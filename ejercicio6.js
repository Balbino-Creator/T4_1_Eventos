
window.onload= function(){
    const titulo = document.querySelector('h1');
    const tds = document.querySelectorAll('td');

    titulo.addEventListener("mouseover", e => {
        titulo.style.color = "red";
    })

    titulo.addEventListener("mouseout", e => {
        titulo.style.color = "";
    });

    tds.forEach( td=> {
        td.addEventListener("mouseover", e=> {
            td.style.backgroundColor = td.innerHTML;
        })
    })

    tds.forEach( (td, index)=> {
        td.addEventListener("mouseout", e=> {
            switch(index){
                case 0:
                    td.innerHTML= "blanco";
                    break;
                case 1:
                    td.innerHTML= "rojo";
                    break;
                case 2:
                    td.innerHTML= "azul";
                    break;
                case 3:
                    td.innerHTML= "verde-azul";
                    break;
                case 4:
                    td.innerHTML= "naranja claro";
                    break;
                case 5:
                    td.innerHTML= "marron";
                    break;
                case 6:
                    td.innerHTML= "negro";
                    td.style.color= "white";
                    break;
                case 7:
                    td.innerHTML= "morado";
                    break;
                case 8:
                    td.innerHTML= "azul marino";
                    break;
                case 9:
                    td.innerHTML= "verde";
                    break;
                case 10:
                    td.innerHTML= "naranja oscuro";
                    break;
                case 11:
                    td.innerHTML= "gris";
                    break;
            }
        })
    })
}