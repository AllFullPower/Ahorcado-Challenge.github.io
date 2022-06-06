const botonRendirse = document.getElementById('rendirse');
const botonPalabraNueva = document.getElementById('palabra-nueva');




botonRendirse.addEventListener('click', function(){
    resetearParte('ah' + errores);
    
    devolverse.play();
    document.removeEventListener('keydown', letraEvento);


    //AIMACION

    contenedorAhorcado.classList.add('encoger')
    inicioContenedor.classList.add('encoger')

    setTimeout(function(){
        contenedorAhorcado.style.display = 'none';
        inicioContenedor.style.display = 'flex';


    }, 500)

    setTimeout(function(){
        inicioContenedor.classList.add('desencoger');
        inicioContenedor.classList.remove('encoger')
    },600)

    setTimeout(function(){
        inicioContenedor.classList.remove('desencoger')
    },700)
    
    repararTeclas();


})


botonPalabraNueva.addEventListener('click', function(){

    reintentar.load();
    reintentar.play();
    resetearParte('ah' + errores);
    errores = 0;
    letrasContenedor.innerHTML = ''
    palabraContenedor.innerHTML = '';
    aciertos = 0;
    letrasUsadas = []; 

    


 
    
    sortearPalabra();
    dibujarPalabra();
    document.addEventListener('keydown', letraEvento);
    repararTeclas();

 
    
})