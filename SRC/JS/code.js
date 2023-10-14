//tenog el autofocus puesto en html, lo añado con JS mejor?







let formulario;
let player;
let boton;

let main;
let salon;

let imagenes;
let piedra;
let papel;
let tijeras;
let lagarto;
let spock;

//marcador
let marcador;
let playerScore = 0;
let enemyScore = 0;
let resultado;





window.addEventListener("load", ()=>{
    elementAccess();
    listenerGroup();

})


function elementAccess (){
    formulario = document.getElementById('formulario');
    player = document.getElementById('player');
    boton = document.getElementById('boton');
    main = document.getElementById('main');

    boton.disabled = true;
    main.style.display = "none";
    

    salon = document.getElementById('salon');

    imagenes = document.getElementsByClassName('imagen'); //es una array de elementos.
    
    piedra = document.getElementById('piedra');
    papel = document.getElementById('papel');
    tijeras = document.getElementById('tijeras');
    lagarto = document.getElementById('lagarto');
    spock = document.getElementById('spock');

    //marcador
    marcador = document.getElementById('marcador');
    //resultado = document.getElementById('resultado');
    //playerScore = document.getElementById('playerScore');
    //enemyScore = document.getElementById('enemyScore');

   

    
    
    


}

function listenerGroup (){

    //activar el botón submit
    formulario.addEventListener("input", ()=>{
        if(player.value.trim() === ''){
             boton.disabled = true;
        }else{
        boton.disabled = false;
        }
    });

    

    //comenzar el juego tras submit
    formulario.addEventListener("submit", (event) => {
        event.preventDefault();
        
        startGame();
        
    });


//hoover imágenes
    for(let i = 0; i < imagenes.length; i++){
    imagenes[i].addEventListener("mouseover", ()=>{
        imagenes[i].style.transform = "scale(1.2)";
    });
    imagenes[i].addEventListener("mouseout", ()=>{
        imagenes[i].style.transform = "scale(1)";
    });
    }

//elegir una opción
    for(let i = 0; i< imagenes.length; i++ )
    imagenes[i].addEventListener("click", ()=>{
    //recojo el objeto return y lo igualo.
    let scoreResult = score(imagenes[i]);
    //actualizo el HTML con el return de los objetos.
    
    
    document.getElementById('playerScore').textContent = scoreResult.playerScore;
    document.getElementById('enemyScore').textContent = scoreResult.enemyScore;
    document.getElementById('resultado').textContent = scoreResult.resultado;

         
    });





}

//funciones varias---------------------------------------------------------------

function startGame(){
    main.style.display = "flex";
    salon.style.display = 'none';
}

//LUCHA: fn número random + score

//Función que me da un número al azar
function turnoRival(){
    return Math.floor(Math.random()*5);
}

function score(opcionJugador){ //opcion jugador = parámetro del score del listener, esta variable la igualo al de arriba.
    
    let resultado = "";
    let turno_rival = turnoRival();

    while(playerScore < 5 && enemyScore < 5){
    if(opcionJugador == tijeras && turno_rival == tijeras){ //Aquí igualo el número al azar, con la variable, que esta contenida en imagenes, en el DOM.
        playerScore += 0;
        enemyScore += 0;
        resultado = "¡NEUTRALIZADOS!"; //tú ganas!
    }else if (opcionJugador== tijeras && turno_rival == 1){
        playerScore += 1;
        enemyScore += 0;
        resultado = "TIJERAS CORTAN PAPEL";
    }else if (opcionJugador == papel && turno_rival == 1){
        playerScore += 0;
        enemyScore += 0;
        resultado = "¡NEUTRALIZADOS!";
    }else if (opcionJugador == papel && turno_rival == 0){
        playerScore += 1;
        enemyScore += 0;
        resultado = "¡PAPEL TAPA PIEDRA!";
    }else if (opcionJugador == piedra && turno_rival == 0){
        playerScore += 0;
        enemyScore += 0;
        resultado = "¡NEUTRALIZADOS!";
    }else if (opcionJugador == piedra && turno_rival == 3){
        playerScore += 1;
        enemyScore += 0;
        resultado = "¡PIEDRA APLASTA LAGARTO!";
    }else if (opcionJugador == lagarto && turno_rival == 3){
        playerScore += 0;
        enemyScore += 0;
        resultado = "¡NEUTRALIZADOS!";
    }else if (opcionJugador== lagarto && turno_rival == 4){
        playerScore += 1;
        enemyScore += 0;
        resultado = "¡LAGARTO ENVENENA A SPOCK!";
    }else if (opcionJugador == spock && turno_rival == 4){
            playerScore += 0;
            enemyScore += 0;
            resultado = "¡NEUTRALIZADOS!";
    }else if (opcionJugador == spock && turno_rival == 2){
        playerScore += 1;
        enemyScore += 0;
        resultado = "¡SPOCK ROMPE TIJERAS!";
    }else if (opcionJugador== tijeras && turno_rival == 3){
            playerScore += 1;
            enemyScore += 0;
            resultado = "¡TIJERAS DECAPITAN LAGARTO!";
    }else if (opcionJugador == lagarto && turno_rival == 1){
        playerScore += 1;
        enemyScore += 0;
        resultado = "¡LAGARTO DEVORA PAPEL!";
    }else if (opcionJugador == papel && turno_rival == 4){
        playerScore += 1;
        enemyScore += 0;
        resultado = "¡PAPEL DESAUTORIZA A SPOCK!";
    }else if (opcionJugador== spock && turno_rival == 0){
        playerScore += 1;
        enemyScore += 0;
        resultado = "¡SPOCK VAPORIZA PIEDRA!";
    }else if (opcionJugador== piedra && turno_rival == 2){
        playerScore += 1;
        enemyScore += 0;
        resultado = "¡COMO SIEMPRE, PIEDRA APLASTA TIJERAS!";
    }else if (turno_rival == 2 && opcionJugador== papel){
        playerScore += 0;
        enemyScore += 1;
        resultado = "TIJERAS CORTAN PAPEL";
    }else if (turno_rival == 1 && opcionJugador == piedra){
        playerScore += 0;
        enemyScore += 1;
        resultado = "¡PAPEL TAPA PIEDRA!";
    }else if (turno_rival == 0 && opcionJugador == lagarto){
        playerScore += 0;
        enemyScore += 1;
        resultado = "¡PIEDRA APLASTA LAGARTO!";
    }else if (turno_rival == 3 && opcionJugador== spock){
        playerScore += 0;
        enemyScore += 1;
        resultado = "¡LAGARTO ENVENENA A SPOCK!";
    }else if (turno_rival == 4 && opcionJugador == tijeras){
        playerScore += 0;
        enemyScore += 1;
        resultado = "¡SPOCK ROMPE TIJERAS!";
    }else if (turno_rival == 2 && opcionJugador == lagarto){
        playerScore += 0;
        enemyScore += 1;
        resultado = "¡TIJERAS DECAPITAN LAGARTO!";
    }else if (turno_rival == 3 && opcionJugador == papel){
        playerScore += 0;
        enemyScore += 1;
        resultado = "¡LAGARTO DEVORA PAPEL!";
    }else if (turno_rival == 1 && opcionJugador == spock){
        playerScore += 0;
        enemyScore += 1;
        resultado = "¡PAPEL DESAUTORIZA A SPOCK!";
    }else if (turno_rival == 4 && opcionJugador == piedra){
        playerScore += 0;
        enemyScore += 1;
        resultado = "¡SPOCK VAPORIZA PIEDRA!";
    }else if (turno_rival == 0 && opcionJugador == tijeras){
        playerScore += 0;
        enemyScore += 1;
        resultado = "¡COMO SIEMPRE, PIEDRA APLASTA TIJERAS!";
    } 

    if(playerScore === 5){
        resultado = "¡Ganaste!"
    }else if(enemyScore === 5){
        resultado += " ¡Has perdido, ZAS en toda la boca!"

    }

    //retorno un objeto, con c/ resultado, para utilzarlo fuera.
  
    return {
        playerScore: playerScore,
        enemyScore: enemyScore,
        resultado: resultado
       };

}

}


//funcion activa el juego cuando hago el submit

/**
 * 

function elementsModifier(){

}

function playerChoice(){
    //Crea un programa que permita 
     //al jugador ingresar su elección: "piedra", "papel", "tijeras", “lagarto” o “Spock”.
}

function pcChoice(){
    //Genera aleatoriamente la elección del oponente (el ordenador) utilizando un número aleatorio.
}

function choiceResult (){
    //Compara la elección del jugador con la elección del oponente y determina 
     //el resultado del juego según las siguientes reglas: reglas......
}

function winner( ){
    //Muestra el resultado del juego al jugador. 
}

function rePlay (){
    //Permite al jugador jugar nuevamente si lo desea.
}

//UN fn que añada el nombre del player en la frase de elige: ¡player, elige sabiamente!
 

 */

