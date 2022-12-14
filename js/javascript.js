// let playersStorage = JSON.parse(localStorage.getItem("playersKey")); // Traemos el array de jugadores desde el local storage (puede estar lleno o vacío)
// DATOS
let players = [];

// LÓGICA

// Añadir envento a todos los botones para eliminar jugadores

const deleteButtonHandler = (e) => {
  let idToDelete = e.target.id;
  players = players.filter((player) => player.id != idToDelete);
  guardarEnStorage(players);
  render();
};

// Añadir jugador, creando un nuevo objeto y enviándolo mediante .push al array de players

let btnAddPlayer = document.getElementById("addPlayer");

let soundAddPlayer = new Audio("../assets/sounds/Sounds/sonido_boton_1.mp3")

btnAddPlayer.addEventListener("click", (e) => {
  e.preventDefault();
  let inputPlayer = document.getElementById("inputPlayer");
  
  let idNewPlayer = players.length;

  let nameNewPlayer = inputPlayer.value;
  if (inputPlayer.value == "") {
    alert("Please enter a valid name");
  } else {
    players.push({
      id: idNewPlayer,
      playerName: nameNewPlayer,
      isDead: false,
    });
  }
  inputPlayer.value = "";
  soundAddPlayer.play()
  render();
  guardarEnStorage(players);
});

// doom
const render = () => {
  let htmlPlayers = ``;


  let listPlayers = document.getElementById("listOfPlayers");

  players.forEach(
    (player) =>
      (htmlPlayers += `<li class="item_list_player" >
          <p class="player_name">${player.playerName}</p>
          <i class="bi bi-trash-fill player_delete"id="${player.id}"></i>
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
  let players = JSON.parse(localStorage.getItem("playersKey"));

  if(players.length > 1){
    Play.href = "./game.html"
  } 
  else{
    alert("You need at least two players to start.")
  }

  
})