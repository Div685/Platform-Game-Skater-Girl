const addPlayer = (player) => {
  if (!localStorage.getItem('current_player')) {
    localStorage.setItem('current_player', player);

    return localStorage.getItem('current_player');
  }

  return localStorage.getItem('current_player');
}

export default addPlayer;