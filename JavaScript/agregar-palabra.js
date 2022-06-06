const contenedorAgregarPalabra = document.getElementById('contenedor-agregar-palabra');
const botonAgregarPalabra = document.getElementById('agregrar-palabra');

const botonAgregar = document.getElementById('agregar-boton');
const botonVolverInicio = document.getElementById('volver-boton');
const textoPalabra = document.getElementById('texto-palabra');
const contadorCaracteres = document.getElementById('caracteres-texto');

const spanAgregarPalabra = document.getElementById('agregar-palabra-span');
const botonesAgregarPalabra = document.getElementById('contenedor-botones');
const palabraAgregadaExitosamente = document.getElementById('span-palabra-agregada');








//CONTADOR DE CARACTERES
textoPalabra.addEventListener('input', function(){
 contadorCaracteres.innerHTML = (this.value.length + "/8");
    

})




//VALIDANDO PALABRA

const validarPalabra = palabraNueva =>{
    let palabraRepetida = false;

    if(palabraNueva == ''){
        spanAgregarPalabra.classList.add('estilo-rojo-span')
        errorAgregarPalabra.play();
        alert('No lo puedes dejar en blanco, escribe algo...');

    }else{
        for(i = 0; i < palabras.length; i++){
            if(palabraNueva == palabras[i]){
                errorAgregarPalabra.play();
                
                alert('Palabra ya registrada, intenta con otra');
                spanAgregarPalabra.classList.add('estilo-rojo-span');
                palabraRepetida = true;
            }
        }
    
        if(palabraRepetida == false){
            agregoPalabra.play();
            palabraAgregada();
            palabras.push(palabraNueva);
            spanAgregarPalabra.classList.remove('estilo-rojo-span');

        }

    }

};



//VALIDANDO TECLAS
function soloLetras (e){
    let key = e.keyCode || e.which;
    let tecla = String.fromCharCode(key).toString();
    let letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    let especiales = [8, 13];

    let tecla_especial = false

    for(let i in especiales){
        if(key == especiales[i]){
            tecla_especial = true
            break
        }
    }

    if(letras.indexOf(tecla) == -1 && !tecla_especial){
        spanAgregarPalabra.classList.add('estilo-rojo-span');
        return false
    }
}
//PASANDO LETRAS MINUSCULAS A MAYUSCULAS
textoPalabra.addEventListener('input', function(){
    this.value = this.value.toUpperCase();
})


//BOTONES INSIDE


//botonVolver
botonVolverInicio.addEventListener('click', function(){
    spanAgregarPalabra.classList.remove('estilo-rojo-span');
    devolverse.play();
    contadorCaracteres.innerHTML = '';
    textoPalabra.value = '';

    //AIMACION
    contenedorAgregarPalabra.classList.add('encoger')
    contenedorAgregarPalabra.classList.remove('desencoger')

    setTimeout(function(){

        inicioContenedor.style.display = 'flex';
        contenedorAgregarPalabra.style.display = 'none';
        


        
    }, 500);

    setTimeout(function(){
        inicioContenedor.classList.add('desencoger');

    }, 600);

    setTimeout(function(){
        inicioContenedor.classList.remove('encoger')
        inicioContenedor.classList.remove('desencoger')
    }, 720);

})




//botonAgregar
botonAgregar.addEventListener('click',  function(){

    let palabraNueva = textoPalabra.value;
    textoPalabra.value = '';
    contadorCaracteres.innerHTML = '';

    (validarPalabra(palabraNueva));

  

})

// PARTE DEL INICIO
contenedorAgregarPalabra.style.display = 'none';
    
botonAgregarPalabra.addEventListener('click', function(){
    clickInicio.play();

    //AIMACION

    contenedorAgregarPalabra.classList.add('encoger');
    inicioContenedor.classList.add('encoger');

    setTimeout(function(){
        
        contenedorAgregarPalabra.style.display = 'flex';
        inicioContenedor.style.display = 'none';
        
    }, 500)

    setTimeout(function(){
        contenedorAgregarPalabra.classList.add('desencoger');
    }, 600)

    setTimeout(function(){
        contenedorAgregarPalabra.classList.remove('encoger');
    },610)


    
})


//LETRA AGREGADA CON EXITO
const palabraAgregada = () =>{
    let palabraConExito = document.createElement('span');
    palabraConExito.innerHTML = '✓ Palabra agregada con exito';
    palabraConExito.classList.add('palabra-agreagada-exitosamente');
    palabraConExito.setAttribute('id', 'span-palabra-agregada')
    contenedorAgregarPalabra.appendChild(palabraConExito);
    setTimeout(function(){
        contenedorAgregarPalabra.removeChild(palabraConExito);
    }, 400)
}
