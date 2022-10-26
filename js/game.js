
let players = JSON.parse(localStorage.getItem("playersKey")); // Traemos el array de jugadores desde el local storage

let listaDeVivos = players; // recibimos el array de jugadores y hacemos un clon

let listaDeMuertos =[]

// selecciona un indice aleatorio dentro del array

function killPlayer(){
    if(listaDeVivos.length >0){ //si la longitud del array es mayor a 0 entonces pasa lo siguiente

        let indiceAleatorio = 0 + Math.floor(Math.random() * listaDeVivos.length); //generar un numero entero desde 0 hasta la longitud del array
        
        var playerSelected = listaDeVivos[indiceAleatorio];  
        

        console.log(playerSelected) //console log del jugador seleccionado

        listaDeMuertos.push(listaDeVivos[indiceAleatorio]) // enviamos al jugador seleccionado a la lsita de muertos

        listaDeVivos.splice(indiceAleatorio,1) // eliminar al jugador seleccionado de la lista de vivos

        console.log(listaDeVivos) // console.log de lista de vivos

        soloKill(playerSelected);
       


    }
    else{ // si la condición anterior no se cumple entonces el array de vivos está vacio
        gameOver();
    }
    
}


const buttonKill = document.getElementById('kill')

buttonKill.addEventListener('click',killPlayer)












































































//ONE CODER IS DEAD


function soloKill (nameKilled){
    
    const open = document.getElementById('kill');
    const modal_container = document.getElementById('modal_container');
    const close = document.getElementById('close');
    
    open.addEventListener('click', () => {
        document.getElementById('gameover').innerHTML = `Has matado ${nameKilled.playerName}`;
        modal_container.classList.add('show');  
      });
    
      close.addEventListener('click', () => {
        modal_container.classList.remove('show');
      });
    }






//ALL CODERS DEAD POPUP
function gameOver (){
    
    const open = document.getElementById('kill');
    const modal_container = document.getElementById('modal_container');
    const close = document.getElementById('close');
    
    open.addEventListener('click', () => {
        document.getElementById('gameover').innerHTML = 'Game Over <br>All coders are  Dead'
        modal_container.classList.add('show');  
      });
    
      close.addEventListener('click', () => {
        modal_container.classList.remove('show');
      });
    }
    


