const domElement = () => {
  // Dom element
  const buttonActions = document.getElementById('gameStart');
  const formAction = document.getElementById('formDiv');
  const displayUserName = document.getElementById('userName')
  const startGameButton = document.getElementById('btnStart');
  const leaderBoard = document.getElementById('btnLeaderBoard');
  const addUser = document.getElementById('btnSubmit');
  const inputUserName = document.getElementById('uName')
  const form  = document.getElementById('form');
  const logoGif = document.getElementById('logoGif');
  const menu = document.getElementById('btnMenu');
  const exitGame = document.getElementById('btnExit');
  const mainMenu = document.getElementById('mainMenu');
  const menuButton = document.getElementById('menuButton');
  const loading = document.getElementById('spinner');
  const playersList = document.getElementById('playersList');
  const players = document.getElementById('players');
  const back = document.getElementById('back');

  return {
    buttonActions,
    formAction,
    displayUserName,
    startGameButton,
    leaderBoard,
    addUser,
    inputUserName,
    form,
    logoGif,
    menu,
    back,
    players,
    playersList,
    loading,
    menuButton,
    mainMenu,
    exitGame,

  };
}

export default domElement;