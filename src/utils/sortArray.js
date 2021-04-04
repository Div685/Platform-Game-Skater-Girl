const sortArray = (array) => {
  const result = array.sort((a, b) => b.score - a.score);
  return result;
};

export default sortArray;