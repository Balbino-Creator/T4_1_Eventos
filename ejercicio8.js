window.onload = function (){
    const textarea = document.querySelector('textarea');

    textarea.addEventListener('blur', e=> {
        textarea.value = textarea.value.replaceAll('&','and');
    })
}

