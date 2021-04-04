/* eslint-disable */

import 'regenerator-runtime/runtime';
import 'phaser';
import './style.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import checkUser from './utils/checkUser';
import addPlayer from './utils/addPlayer';
import getData from './utils/getData';
import sortArray from './utils/sortArray';
import Game from './game';
import domElement from './utils/domElement';

// Dom element
const dom = domElement();

const {
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
} = dom;

const feedback = document.querySelector('.feedback');

const showFeedback = (text, action) => {
  feedback.classList.add('showItem', `alert-${action}`);
  feedback.innerHTML = `<p>${text}</p>`;

  setTimeout(() => {
    feedback.classList.remove('showItem', `alert-${action}`);
  }, 3000);
};

if (checkUser()) {
  formAction.classList.remove('d-flex');
  formAction.classList.add('d-none');
  buttonActions.classList.remove('d-none');
  buttonActions.classList.add('d-flex');
  loading.classList.add('d-none');
  displayUserName.innerHTML = `Hello ${localStorage.getItem('current_player')}!`;
}

addUser.addEventListener('click', (e) => {
  e.preventDefault();
  const nameValue = inputUserName.value;
  if(inputUserName.value === '') {
    showFeedback('User Name can not be empty', 'danger');
    return;
  }
  form.reset();
  formAction.classList.remove('d-flex');
  formAction.classList.add('d-none');
  loading.classList.remove('d-none');
  
  if (nameValue !== '') {
    const user = addPlayer(nameValue);
    setTimeout(() => {
      loading.classList.add('d-none');
      displayUserName.classList.remove('d-none');
      displayUserName.classList.add('d-flex');
      displayUserName.innerHTML = `Hello ${user}!`;
      buttonActions.classList.remove('d-none');
      buttonActions.classList.add('d-flex');
    }, 3000);
  }
});

startGameButton.addEventListener('click', (e) => {
  e.preventDefault();
  buttonActions.classList.remove('d-flex');
  buttonActions.classList.add('d-none');
  logoGif.classList.add('d-none');
  menuButton.classList.remove('d-none');
  menuButton.classList.add('d-flex');
  window.game = new Game();

  menu.addEventListener('click', (e) => {
    e.preventDefault();
    window.game.destroy();
    const canvas = document.querySelector('canvas');
    canvas.remove();
    window.game = new Game();
  });

  exitGame.addEventListener('click', (e) => {
    e.preventDefault();
    window.game.destroy();
    const canvas = document.querySelector('canvas');
    canvas.remove();
    buttonActions.classList.remove('d-none');
    logoGif.classList.remove('d-none');
    menuButton.classList.remove('d-flex');
    menuButton.classList.add('d-none');
  });
});

leaderBoard.addEventListener('click', (e) => {
  e.preventDefault();
  buttonActions.classList.remove('d-flex');
  buttonActions.classList.add('d-none');
  loading.classList.remove('d-none');
  playersList.classList.remove('d-none');
  back.classList.add('d-block');
  getData()
    .then((array) => {
      loading.classList.add('d-none');
      while (players.firstChild) {
        players.removeChild(players.lastChild);
      }
      const newArray = sortArray(array);
      for (let i = 0; i < newArray.length; i++) {
        const player = document.createElement('li');
        player.classList.add('list-group-item');
        const user = document.createElement('strong');
        const score = document.createElement('span');
        user.innerHTML = `${newArray[i].user}: `;
        score.innerHTML = newArray[i].score;
        player.appendChild(user);
        player.appendChild(score);
        players.appendChild(player);
      }
    });

  back.addEventListener('click', (e) => {
    e.preventDefault();
    buttonActions.classList.remove('d-none');
    playersList.classList.add('d-none');
    back.classList.add('d-none');
  });
});