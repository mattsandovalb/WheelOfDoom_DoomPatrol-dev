
let players = JSON.parse(localStorage.getItem("playersKey")); // Traemos el array de jugadores desde el local storage

let listaDeVivos = players; // recibimos el array de jugadores y hacemos un clon

let listaDeMuertos =[]

// selecciona un indice aleatorio dentro del array

function killPlayer(){
    if(listaDeVivos.length >0){ //si la longitud del array es mayor a 0 entonces pasa lo siguiente

        let indiceAleatorio = 0 + Math.floor(Math.random() * listaDeVivos.length); //generar un numero entero desde 0 hasta la longitud del array
        
        let nombreDelJugadorSeleccionado = listaDeVivos[indiceAleatorio].playerName;

        console.log(nombreDelJugadorSeleccionado) //console log del jugador seleccionado
        

        listaDeMuertos.push(listaDeVivos[indiceAleatorio]) // enviamos al jugador seleccionado a la lsita de muertos

        listaDeVivos.splice(indiceAleatorio,1) // eliminar al jugador seleccionado de la lista de vivos

        console.log(listaDeVivos) // console.log de lista de vivos

        soloKill(nombreDelJugadorSeleccionado)
        comeKilled()

    }
    else{ // si la condición anterior no se cumple entonces el array de vivos está vacio
        gameOver()
    }
}


const buttonKill = document.getElementById('kill')

buttonKill.addEventListener('click',killPlayer)



//ONE CODER IS DEAD


function soloKill (nameKilled){
    
    const modal_container = document.getElementById('modal_container');
    const btnNextKill = document.getElementById('nextKill');
    const alertPlayerDeleted = document.getElementById('alertPlayerDeleted');
    // const open = document.getElementById('kill');

    alertPlayerDeleted.innerHTML= `El jugador...${nameKilled} ha sido eliminado`;
    
    btnNextKill.addEventListener('click', () =>{
        modal_container.classList.remove("show");
        /*imgPlayer.classList.remove("transleft");*/
        imgPlayer.classList.add("transleft");
        imgPlayer.classList.remove("transdown");
    })


    modal_container.classList.add("show");


    // const close = document.getElementById('close');
    
    // open.addEventListener('click', () => {
    //     document.getElementById('gameover').innerHTML = `Has matado ${nameKilled.playerName}`;
    //     modal_container.classList.add('show');  
    //   });
    
    //   close.addEventListener('click', () => {
    //     modal_container.classList.remove('show');
    //   });
}

function gameOver (){
    
    const modal_container = document.getElementById('modal_container');
    const btnClose = document.getElementById('btnClose');

    modal_container.innerHTML= `<button id="btnClose">close</button>`;
    btnClose.addEventListener('click', () =>{
        modal_container.classList.remove("show");
    })

    modal_container.classList.add("show");
}






//ALL CODERS DEAD POPUP
// function gameOver (){
    
//     const open = document.getElementById('kill');
//     const modal_container = document.getElementById('modal_container');
//     const close = document.getElementById('close');
    
//     open.addEventListener('click', () => {
//         document.getElementById('gameover').innerHTML = 'Game Over <br>All coders are  Dead'
//         modal_container.classList.add('show');  
//       });
    
//       close.addEventListener('click', () => {
//         modal_container.classList.remove('show');
//       });
//     }
const imgPlayer = document.getElementById('player');
function comeKilled (){
    imgPlayer.classList.remove("transleft")
    imgPlayer.classList.add("transdown")
}


