const imagenes = document.querySelectorAll('.img-espacio')
const imageness = document.querySelectorAll('.img-naturaleza')
const imagenesss = document.querySelectorAll('.img-tecnologia')
const imagenesLight = document.querySelector('.agregar-imagen')
const contenedorLight = document.querySelector('.imagen-light')
const hamburguer1 = document.querySelector('.hamburguer');

imagenes.forEach(imagen =>{
    imagen.addEventListener('click', ()=>{
        
        aparecerImagen(imagen.getAttribute('src'))
    })
})

contenedorLight.addEventListener('click', (e)=>{
    if (e.target !== imagenesLight){
        contenedorLight.classList.toggle('show')
        imagenesLight.classList.toggle('showImage')
    }
})

const aparecerImagen = (imagen)=>{
    imagenesLight.src = imagen;
    contenedorLight.classList.toggle('show')
    imagenesLight.classList.toggle('showImage')
}

imageness.forEach(imagenn =>{
    imagenn.addEventListener('click', ()=>{

       aparecerImagenn(imagenn.getAttribute('src'))
    })
})

const aparecerImagenn = (imagenn)=>{
    imagenesLight.src= imagenn;
    contenedorLight.classList.toggle('show')
    imagenesLight.classList.toggle('showImage')
}

imagenesss.forEach(imagennn =>{
    imagennn.addEventListener('click', ()=>{
        aparecerImagennn(imagennn.getAttribute('src'))
    })
})

const aparecerImagennn = (imagennn)=>{
    imagenesLight.src= imagennn;
    contenedorLight.classList.toggle('show')
    imagenesLight.classList.toggle('showImage')
}
