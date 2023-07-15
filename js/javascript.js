// let playersStorage = JSON.parse(localStorage.getItem("playersKey")); // Traemos el array de jugadores desde el local storage (puede estar lleno o vacío)
// DATOS
let targets = [];

// LÓGICA

// Añadir envento a todos los botones para eliminar jugadores

const deleteButtonHandler = (e) => {
  let idToDelete = e.target.id;
  targets = targets.filter((target) => target.id != idToDelete);
  guardarEnStorage(targets);
  render();
};

// Añadir jugador, creando un nuevo objeto y enviándolo mediante .push al array de players

let btnAddPlayer = document.getElementById("addPlayer");

let soundAddPlayer = new Audio("../assets/sounds/Sounds/sonido_boton_1.mp3")

btnAddPlayer.addEventListener("click", (e) => {
  e.preventDefault();
  let inputPlayer = document.getElementById("inputPlayer");
  
  let idNewPlayer = targets.length;

  let nameNewPlayer = inputPlayer.value;
  if (inputPlayer.value == "") {
    alert("Please enter a valid name");
  } else {
    targets.push({
      id: idNewPlayer,
      playerName: nameNewPlayer,
      isDead: false,
    });
  }
  inputPlayer.value = "";
  soundAddPlayer.play()
  render();
  guardarEnStorage(targets);
});

// doom
const render = () => {
  let htmlPlayers = ``;


  let listPlayers = document.getElementById("listOfPlayers");

  targets.forEach(
    (target) =>
      (htmlPlayers += `<li class="item_list_player" >
          <p class="player_name">${target.playerName}</p>
          <i class="bi bi-trash-fill player_delete"id="${target.id}"></i>
          </li>`)
  );
  listPlayers.innerHTML = htmlPlayers;
  addDeleteButton();
};

const addDeleteButton = (e) => {
  let deletePlayer = document.querySelectorAll(".player_delete");

  deletePlayer.forEach((deleteButton) =>
    deleteButton.addEventListener("click", deleteButtonHandler)
  );
};

render();


function guardarEnStorage(object) {
  let playersLocal = object;

  localStorage.setItem("playersKey", JSON.stringify(playersLocal));
}

const Play = document.getElementById("goPlay");

Play.addEventListener("click",(e) =>{
  let targets = JSON.parse(localStorage.getItem("playersKey"));

  if(targets.length > 1){
    Play.href = "./game.html"
  } 
  else{
    alert("You need at least two targets to start.")
  }

  
})