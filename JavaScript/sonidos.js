//Elementos
const musica = document.getElementById('imagen-musica')

musica.addEventListener('click', function(){

    musica.classList.toggle('animacion-boton-musica')

    musica.toggleAttribute('value');

    if(musica.attributes.length == 4){
        sonarCancion();

    }if(musica.attributes.length == 3){
        pararCancion();
    }


})



//SOUNDS

//Cancion de fondo
const cancionFondo = new Audio ("./sounds/Ahorcado-song.wav")

const pararCancion = () =>{
    cancionFondo.pause()
    cancionFondo.loop = false;
}

const sonarCancion = () =>{
    cancionFondo.load();
    cancionFondo.play()
    cancionFondo.volume = 0.2
    cancionFondo.loop = true;

}





//Entrar
const clickInicio = new Audio("./sounds/sound.wav");


//Salir

const devolverse = new Audio("./sounds/Devolverse.Devolverse.mp3");

//Error

const error = new Audio ('./sounds/Error.mp3');


//Acierto

const ustedAcerto = new Audio ('./sounds/Acierto.mp3');

//Ganar

const ganaste = new Audio ('./sounds/ganar-sonido.mp3');

//Perder

const perdiste = new Audio ('./sounds/Perder-sonido.mp3');

//Error agragar palabra

const errorAgregarPalabra = new Audio ('./sounds/Error-Sound.mp3');

//Agrego Palabra

const agregoPalabra = new Audio ('./sounds/Sonido-agrego-palabra.mp3')
agregoPalabra.volume = 0.2;

//Reintentar

const reintentar = new Audio ('./sounds/REINTENTAR.mp3');





// ~  ~  TECLADO SONIDOS  ~  ~

//Expandir

const expandirTeclado = new Audio ('./sounds/expandir-teclado.mp3');
expandirTeclado.volume = 0.2;

//Encoger

const encogerTeclado = new Audio ('./sounds/encoger-teclado.mp3');
encogerTeclado.volume = 0.2;

// ~  ~                ~   ~ 





//   ~  ~  CAJA NEGRA SONIDOS  ~  ~

//reintentar

const reintentarBoxB = new Audio ('./sounds/Reintentar-caja-negra.mp3');

//OK

const okSound = new Audio ('./sounds/Salir.mp3');


// ~    ~            ~         ~


