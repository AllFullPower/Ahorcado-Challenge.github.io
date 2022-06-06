// ELEMENTOS
const palabraContenedor = document.getElementById("contenedor-palabra");
const letrasContenedor = document.getElementById("contenedor-letras");
const boton = document.getElementById("boton-inicio");
const contenedorAhorcado = document.getElementById('contenedor');
const inicioContenedor = document.getElementById("inicio-contendor");
const muneco = document.getElementById('muneco');





// VARIABLES, DATOS DEL JUEGO
let selecionarPalabra
let errores 
let aciertos 
let letrasUsadas 





//AGREGANDO LAS LETRAS EN LE ESAPCIO CORRESPONDIENTE

const agregarLetras = letra => {
    const letraElemento = document.createElement('span');
    letraElemento.classList.add('letras-usadas')
    letraElemento.innerHTML = letra.toUpperCase();
    letrasContenedor.appendChild(letraElemento);
}


//EN CASO DE EQUIVOCACION

const letraIncorrecta = () => {
    errores ++
    error.load();
    error.play();
    resetearParte('ah' + (errores - 1))
    anadirParte('ah' + errores);
    if(errores === 6){
    finalizarJuegoPerder();


    } 
}


//FUNCION PARA TERMINAR LA PARTIDA



const finalizarJuegoPerder = () => {

    perdiste.load();
    perdiste.play();
    document.removeEventListener('keydown', letraEvento);
    crearCaja();
    let botonAceptar = document.getElementById('boton-aceptar');
    let botonReintentar = document.getElementById('boton2');
    //CAJA CONFIGURACION
    
    botonAceptar.addEventListener('click', function(){

        cuerpo.removeChild(negra)
        okSound.play();
        cuerpo.removeChild(caja);
        inicioContenedor.style.display = 'flex';
        contenedorAhorcado.style.display = 'none';
        resetearParte('ah' + errores);
        inicioContenedor.classList.add('desencoger');
        inicioContenedor.classList.remove('encoger')
        setTimeout(function(){
            inicioContenedor.classList.remove('desencoger');

        }, 20)
        repararTeclas();

       
    })

    botonReintentar.addEventListener('click', function(){
        perdiste.pause();
        reintentarBoxB.play();
        cuerpo.removeChild(negra);
        cuerpo.removeChild(caja);
        document.addEventListener('keydown', letraEvento);
        
        resetearParte('ah' + errores);
        errores = 0;
        letrasContenedor.innerHTML = '';
        palabraContenedor.innerHTML = '';
        aciertos = 0;
        letrasUsadas = []; 
        
        sortearPalabra();
        dibujarPalabra();
        repararTeclas();

    });      
    
}


const finalizarJuegoGanar = () =>{
    ganaste.load();
    ganaste.play();
    document.removeEventListener('keydown', letraEvento)
    crearCajaGanar();
    let botonAceptar = document.getElementById('boton-aceptar');
    let botonReintentar = document.getElementById('boton2');


    //CAJA 

    //Boton aceptar
    botonAceptar.addEventListener('click', function(){

        okSound.play();
        cuerpo.removeChild(negra)
        cuerpo.removeChild(caja);
        inicioContenedor.style.display = 'flex';
        contenedorAhorcado.style.display = 'none';
        resetearParte('ah' + errores)
        inicioContenedor.classList.add('desencoger');
        inicioContenedor.classList.remove('encoger')
        setTimeout(function(){
            inicioContenedor.classList.remove('desencoger');

        }, 20)
        repararTeclas();

    })


    //Boton de rendirse
    botonReintentar.addEventListener('click', function(){
        //~ ~  SONIDOS  ~  ~
        document.addEventListener('keydown', letraEvento);

        ganaste.pause();
        reintentarBoxB.play();
        console.log
        cuerpo.removeChild(negra);
        cuerpo.removeChild(caja);
        
        resetearParte('ah' + errores);
        errores = 0;
        letrasContenedor.innerHTML = '';
        palabraContenedor.innerHTML = '';
        aciertos = 0;
        letrasUsadas = []; 
        sortearPalabra();
        dibujarPalabra();
        repararTeclas();
        


    })

    
}




//En el caso de que la letra sea correcta
const letraCorrecta = letra => {
    
    
    const {children} = palabraContenedor;
        ustedAcerto.load();

        for(let i = 0; i < children.length; i++){
            if(children[i].innerHTML === letra){
                children[i].classList.add('letras-adivinadas');
                children[i].classList.toggle('invisible');
                aciertos++;
                ustedAcerto.play()
            }
        }
        if(aciertos === selecionarPalabra.length){
            finalizarJuegoGanar();
            
        } 
}


//Escogiendo la letra

const letraInput = letra => {
    if(selecionarPalabra.includes(letra)){
        letraCorrecta(letra);
    } else {
        letraIncorrecta();
    }
    agregarLetras(letra);
    letrasUsadas.push(letra);
}



//Entrada y validador de letras del usuario

const letraEvento = event => {
    
    let letraUsuario = event.key.toUpperCase();
    if(letraUsuario.match(/^[a-zñ]$/i) && !letrasUsadas.includes(letraUsuario)) {
        letraInput(letraUsuario);
        escuchadorTeclas(letraUsuario);

    }
   
}



// Poiniendo la palabra en le lugar correspondiente
const dibujarPalabra = () =>{
    selecionarPalabra.forEach(letra => {
     
    const palabraElemento = document.createElement('span');
    palabraElemento.innerHTML = letra.toUpperCase();
    palabraElemento.classList.add('invisible');
    palabraElemento.classList.add('letra');
    palabraContenedor.appendChild(palabraElemento);      
    })
}

//Escogiendo la palabra
const sortearPalabra = () =>{
    let palabra = palabras[Math.floor((Math.random()*palabras.length))].toUpperCase();
    selecionarPalabra = palabra.split('');
    
}





// Iniciar
const inicio =  () => {

    tecladoTeclas();

    
    clickInicio.play();





    letrasContenedor.innerHTML = ''
    palabraContenedor.innerHTML = '';
    errores = 0;
    aciertos = 0;
    letrasUsadas = []; 
    
    //ANIMACION
     
    inicioContenedor.classList.remove('desencoger');
    inicioContenedor.classList.add('encoger')
    contenedorAhorcado.classList.add('encoger')

    setTimeout(function(){
        inicioContenedor.style.display = 'none';
        contenedorAhorcado.style.display = 'flex';



    }, 500)

    setTimeout(function(){
        contenedorAhorcado.classList.add('desencoger');
        contenedorAhorcado.classList.remove('encoger')
    },600)

    setTimeout(function(){
        contenedorAhorcado.classList.remove('desencoger')
    },700)

    
 
    
     sortearPalabra();
     dibujarPalabra();
     document.addEventListener('keydown', letraEvento);
 
 
 }
 
 contenedorAhorcado.style.display = 'none'
 boton.addEventListener('click', inicio);




//FUNCIONES PARA EL MUNECO 

 function anadirParte (h) {
    muneco.classList.add(h);
}

function resetearParte (h){
    muneco.classList.remove(h);
}
 
    
    
















