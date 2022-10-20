const players = [
    {
      id: 1,
      playerName: "player de prueba",
      isDead: false,
    },
    {
      id: 2,
      playerName: "player de prueba dos",
      isDead: false,
    },
    {
      id: 3,
      playerName: "player de prueba tres",
      isDead: false,
    },
    {
      id: 4,
      playerName: "player de prueba cuatro",
      isDead: false,
    },
    {
      id: 5,
      playerName: "player de prueba cinco",
      isDead: false,
    },
    {
      id: 6,
      playerName: "player de prueba seis",
      isDead: false,
    },
  ];
  
  // console.log(players[0])
  
  const render = () => {
    let listPlayers = document.getElementById("listOfPlayers");
    let htmlPlayers = ``;
  
    players.forEach(
      (player) =>
        (htmlPlayers += `<li class="item_list_player">
          <p class="player_name">${player.playerName}</p>
          <i class="bi bi-trash-fill player_delete"></i>
          </li>`)
    );
    listPlayers.innerHTML = htmlPlayers;
    addDeleteButton();
  };
  
  const addDeleteButton = (e) => {
    let deletePlayer = document.querySelectorAll(".player_delete");
    deletePlayer.forEach((deleteButton) =>
      deleteButton.addEventListener("click", (e) => e.preventDefault())
    );
  };
  
  render();
  
//   const sendPlayer = (e) => {
//     const inputPLayer = document.getElementById("inputPlayer");
//     const btnSend = document.getElementById("btnSend");
//     btnSend.addEventListener();
//   };
  