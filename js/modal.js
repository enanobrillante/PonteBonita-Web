let imagenes = document.querySelectorAll('.gallery__img');
let modal = document.querySelector('#modal');
let img = document.querySelector('#modal__img');
let boton = document.querySelector('#modal__boton');
/*recorremos las imagenes*/
for (let i = 0; i < imagenes.length; i++) {
    imagenes[i].addEventListener('click', function(e) {
        modal.classList.toggle("modal__open");
        /*la ruta de la imagen a la que dimos click*/

        img.setAttribute("src", e.target.src);

    });
}

boton.addEventListener('click', function() {
    /*ahora al darle click, se le quita la clase modal__open*/
    modal.classList.toggle("modal__open");
});