
let players = JSON.parse(localStorage.getItem("playersKey")); // Traemos el array de jugadores desde el local storage

let listaDeVivos = players; // recibimos el array de jugadores y hacemos un clon

let listaDeMuertos =[]

// selecciona un indice aleatorio dentro del array

function killPlayer(){
    if(listaDeVivos.length >0){ //si la longitud del array es mayor a 0 entonces pasa lo siguiente

        let indiceAleatorio = 0 + Math.floor(Math.random() * listaDeVivos.length); //generar un numero entero desde 0 hasta la longitud del array
        
        console.log(listaDeVivos[indiceAleatorio]) //console log del jugador seleccionado

        listaDeMuertos.push(listaDeVivos[indiceAleatorio]) // enviamos al jugador seleccionado a la lsita de muertos

        listaDeVivos.splice(indiceAleatorio,1) // eliminar al jugador seleccionado de la lista de vivos

        console.log(listaDeVivos) // console.log de lista de vivos
        comeKilled()
    }
    else{ // si la condición anterior no se cumple entonces el array de vivos está vacio
        alert("Ya no queda nadie vivo")
    }
}

const buttonKill = document.getElementById('kill')

buttonKill.addEventListener('click',killPlayer)

// Procurando vincular la accion con la animacion pero no es correcto. Hace falta saber de eventos. 
/*function PerEntr (){
    let (listaDeVivos[indiceAleatorio]) = transleft
    let (listaDeVivos.splice(indiceAleatorio,1)) = transdown
}*/

const imgPlayer = document.getElementById('player');
function comeKilled (){
    imgPlayer.classList.add("transdown")
}






 