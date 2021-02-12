import Api from "../config";
const searchFilms = async (search, page) => {

  if (search === '' ) {
    return;
  }
  const url = `${Api.URL}?apikey=${Api.key}&s=${search}&page=${page}`;

  const response = await fetch(url);
  const result = await response.json();

  return result;

  //TODO: try to handle api errors here

  /* if (result.Response === 'True') {
    return result;
  } else {
    return false;
  } */
}

export { searchFilms };