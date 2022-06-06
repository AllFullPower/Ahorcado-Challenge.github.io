const cuerpo = document.getElementById('body');
const botonAceptar = document.getElementById('boton-perder');

const crearCaja = () => {


    //Caja Negra
    let cajaNegra = document.createElement('div');
    cajaNegra.classList.add('caja-negra');
    cajaNegra.setAttribute('id', 'negra')


    //Boton OK
    let boton = document.createElement('button');
    boton.innerHTML = 'SALIR';
    boton.classList.add('boton-perder');
    boton.setAttribute('id', 'boton-aceptar');

    //Boton Reintentar
    let boton2 = document.createElement('button');
    boton2.innerHTML = 'REINTENTAR';
    boton2.classList.add('boton-perder');
    boton2.setAttribute('id', 'boton2');

    



    //Texto perder
    let elemetoTextoPerder = document.createElement('span');
    elemetoTextoPerder.innerHTML = 'YOU LOSE';
    elemetoTextoPerder.classList.add('texto-perder');


    //Caja interactiva
    let elementoCaja = document.createElement('div');
    elementoCaja.classList.add('caja-perder');
    elementoCaja.setAttribute('id', 'caja')
    elementoCaja.appendChild(elemetoTextoPerder);
    elementoCaja.appendChild(boton);
    elementoCaja.appendChild(boton2);
    elementoCaja.classList.add('encoger')
    cuerpo.appendChild(elementoCaja);
    cuerpo.appendChild(cajaNegra);
    elementoCaja.classList.add('encoger');
    setTimeout(function(){
        elementoCaja.classList.add('desencoger');
    });



}


const crearCajaGanar = () => {
    //Caja Negra
    let cajaNegra = document.createElement('div');
    cajaNegra.classList.add('caja-negra');
    cajaNegra.setAttribute('id', 'negra')

    


    //Boton OK
    let boton = document.createElement('button');
    boton.innerHTML = 'SALIR';
    boton.classList.add('boton-perder');
    boton.setAttribute('id', 'boton-aceptar');


    //Boton Reintentar
    let boton2 = document.createElement('button');
    boton2.innerHTML = 'REINTENTAR';
    boton2.classList.add('boton-perder');
    boton2.setAttribute('id', 'boton2');



    //Texto ganar
    let elemetoTextoPerder = document.createElement('span');
    elemetoTextoPerder.innerHTML = 'YOU WIN';
    elemetoTextoPerder.classList.add('texto-perder');


    //Caja interactiva
    let elementoCaja = document.createElement('div');
    elementoCaja.classList.add('caja-perder');
    elementoCaja.setAttribute('id', 'caja')
    elementoCaja.appendChild(elemetoTextoPerder);
    elementoCaja.appendChild(boton);
    elementoCaja.appendChild(boton2);
    cuerpo.appendChild(elementoCaja);
    cuerpo.appendChild(cajaNegra);
    elementoCaja.classList.add('encoger');
    setTimeout(function(){
        elementoCaja.classList.add('desencoger');
    });


};




