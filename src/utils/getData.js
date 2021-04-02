const getData = async () => {
  const API = '2hSGx2YyT4LhAoeEUhVi';
  try {
    const result = await fetch("https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/"+API+"/scores/",
      {
          mode: 'cors'
      }
    );
    const response = await result.json();
    return response.result;
  } 
  catch (err) {
    return err;
  }
}

export default getData;