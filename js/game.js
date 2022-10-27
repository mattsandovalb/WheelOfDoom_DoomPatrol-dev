
let players = JSON.parse(localStorage.getItem("playersKey")); // Traemos el array de jugadores desde el local storage

let listaDeVivos = players; // recibimos el array de jugadores y hacemos un clon

let listaDeMuertos =[]

// selecciona un indice aleatorio dentro del array

function killPlayer(){
    if(listaDeVivos.length > 0){ //si la longitud del array es mayor a 0 entonces pasa lo siguiente

        let indiceAleatorio = 0 + Math.floor(Math.random() * listaDeVivos.length); //generar un numero entero desde 0 hasta la longitud del array
        
        let nombreDelJugadorSeleccionado = listaDeVivos[indiceAleatorio].playerName;

        console.log(nombreDelJugadorSeleccionado); //console log del jugador seleccionado
        

        listaDeMuertos.push(listaDeVivos[indiceAleatorio]); // enviamos al jugador seleccionado a la lsita de muertos

        listaDeVivos.splice(indiceAleatorio,1); // eliminar al jugador seleccionado de la lista de vivos

        console.log(listaDeVivos); // console.log de lista de vivos

        //soloKill(nombreDelJugadorSeleccionado)
        setTimeout(soloKill, 1700, (nombreDelJugadorSeleccionado));
        comeKilled()
        playGif()
        setTimeout(esonder,900)

    }
    else{ // si la condición anterior no se cumple entonces el array de vivos está vacio
        gameOver()
    };
    
};


const buttonKill = document.getElementById('kill');

buttonKill.addEventListener('click',killPlayer);



//ONE CODER IS DEAD


function soloKill (nameKilled){
    
    const modal_container = document.getElementById('modal_container');
    const btnNextKill = document.getElementById('nextKill');
    const alertPlayerDeleted = document.getElementById('alertPlayerDeleted');
    const btnList = document.getElementById('list');
    // const open = document.getElementById('kill');
    btnList.innerHTML=("")
    alertPlayerDeleted.innerHTML= `Player... ${nameKilled} has been deleted`;
    
    btnNextKill.addEventListener('click', () =>{
        modal_container.classList.remove("show");
        /*imgPlayer.classList.remove("transleft");*/
        imgPlayer.classList.add("transleft");
        imgPlayer.classList.remove("transdown");
        setTimeout(document.getElementById("player").style.visibility = 'visible',3000);

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


// function gameOver (){
    
//     
//     const modal_container = document.getElementById('modal_container');
//     const btnClose = document.getElementById('btnClose');

//     modal_container.innerHTML= `<button id="btnClose">close</button>`;
//     btnClose.addEventListener('click', () =>{
//         modal_container.classList.remove("show");
//     })

//     modal_container.classList.add("show");
// }






//ALL CODERS DEAD POPUP
function gameOver (){  
    const removeButtonContinue = document.getElementById('nextKill');
    const open = document.getElementById('kill');
    const modal_container = document.getElementById('modal_container');
    const close = document.getElementById('close'); 
    const containerButtons = document.getElementById("container_buttons") 

    open.addEventListener('click', () => {
        document.getElementById('alertPlayerDeleted').innerHTML = 'Game Over <br>All coders are  Dead'
        removeButtonContinue.innerHTML= '';
        modal_container.classList.add('show');  
       });  
    containerButtons.innerHTML=`<a href="./list.html" id="list">            
    <img src="../assets/svg/list.svg" alt="" class="btcontinue">
  </a>`
        // close.addEventListener('click', () => {
        //   modal_container.classList.remove('show');
        // });
        
}
const imgPlayer = document.getElementById('player');

function comeKilled (){
    imgPlayer.classList.remove("transleft")
    imgPlayer.classList.add("transdown")
}

const gunContainer = document.getElementById("gun_container")
let shootSound = new Audio("../assets/sounds/Sounds/shootgun_shoot_1.mp3")
let chargeSound = new Audio("../assets/sounds/Sounds/reload_1.mp3")

function playGif(){
    gunContainer.innerHTML=`<img src="../assets/img/gunGif.gif" alt="gun" class="gif_gun">`;
    setTimeout(playimg, 1700);
    shootSound.play();
    setTimeout(chargePLay, 500);
}

chargeSound.play();

function chargePLay(){
    chargeSound.play();
}
function playimg(){
    gunContainer.innerHTML=`<img src="../assets/img/maskgroup.png" alt="gun" class="img_gun">`;
}

function esonder(){
    document.getElementById("player").style.visibility = 'hidden';
}
