const teclas = document.getElementsByClassName('teclas');
const teclado = document.getElementById('teclado');
const botonTeclado = document.getElementById('boton-agregar-teclado');

const contenedorBotones = document.getElementById('botones-contenedor');


//BOTON QUE CONTRAE Y EXTRAE EL TECLADO
botonTeclado.addEventListener('click', function(){
    botonTeclado.toggleAttribute("active");
    console.log(botonTeclado.attributes)

    if(botonTeclado.attributes.length == 3){
        expandirTeclado.load();
        encogerTeclado.play()
        removerTeclado();


    } if(botonTeclado.attributes.length == 2){
        expandirTeclado.load();
        expandirTeclado.play();
        agregarTeclado();

    }
})






//CONFIGURACION TECLADO






//VALIDADOR
const tecladoTeclas = () => {

    for(i = 0; i < teclas.length; i++){
        teclas[i].addEventListener('click',function(event){
            let teclaPresionada = event.target.innerHTML
            const teclaBox = event.target;
            

            
            
            console.log(teclaPresionada)
            
            if(!letrasUsadas.includes(teclaPresionada)){

                if(selecionarPalabra.includes(teclaPresionada)){
                    teclaCorrecta(teclaPresionada);
                } else{
                    letraIncorrecta()
                }
                agregarLetras(teclaPresionada);
                letrasUsadas.push(teclaPresionada);
                teclaBox.classList.add('tecla-selecionada');
                
        
            }
        }) 
    }
}






// Validando Teclas
const teclaCorrecta = tecla => {
    const {children} = palabraContenedor;
    ustedAcerto.load();
    
    for(let i = 0; i < children.length; i++){
        if(children[i].innerHTML === tecla){
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

// Reparando Teclas 
const repararTeclas = () => {
    agregarTeclado();

    for(i in teclas){
        if(teclas[i].attributes.length == 1){
            
            teclas[i].classList.remove('tecla-selecionada');
        }
    }
    

}

const escuchadorTeclas = (letra) =>{
    for(i in teclas){
        if(teclas[i].innerHTML == letra){
            teclas[i].classList.add('tecla-selecionada')
        }
    }
}

for(i in teclas){
    console.log(teclas[i].innerHTML);
}



//TOGLE DEL TEACALDO (AGREGAR Y RETIRAR)

const removerTeclado = () =>{

    contenedorAhorcado.removeChild(teclado);
    contenedorAhorcado.removeChild(contenedorBotones);
    contenedorAhorcado.appendChild(contenedorBotones);
}

const agregarTeclado = () => {

    contenedorAhorcado.removeChild(contenedorBotones);
    contenedorAhorcado.appendChild(teclado);
    contenedorAhorcado.appendChild(contenedorBotones);

}