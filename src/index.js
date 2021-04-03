import 'phaser';
import './style.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import checkUser from './utils/checkUser';
import addPlayer from './utils/addPlayer';

// Dom element
const buttonActions = document.getElementById('gameStart');
const formAction = document.getElementById('formDiv');
const displayUserName = document.getElementById('userName')
const startGameButton = document.getElementById('btnStart');
const leaderBoard = document.getElementById('btnLeaderBoard');
const addUser = document.getElementById('btnSubmit');
const inputUserName = document.getElementById('uName')
const form  = document.getElementById('form');

if (checkUser()) {
  formAction.classList.remove('d-flex');
  formAction.classList.add('d-none');
  buttonActions.classList.remove('d-none');
  buttonActions.classList.add('d-flex');
  displayUserName.innerHTML = `Hello ${localStorage.getItem('current_player')}!`;
}

addUser.addEventListener('click', (e) => {
  e.preventDefault();
  const nameValue = inputUserName.value;
  form.reset();
  formAction.classList.remove('d-flex');
  formAction.classList.add('d-none');
  // loading.classList.remove('d-none');
  if (nameValue !== '') {
    const user = addPlayer(nameValue);
    setTimeout(() => {
      displayUserName.classList.remove('d-none');
      displayUserName.classList.add('d-flex');
      displayUserName.innerHTML = `Hello ${user}!`;
      buttonActions.classList.remove('d-none');
    }, 3000);
  }
});

