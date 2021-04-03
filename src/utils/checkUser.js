const checkUser = () => {
  if (localStorage.getItem('current_player') !== null) {
    return true;
  }

  return false;
};

export default checkUser;