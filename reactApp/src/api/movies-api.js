export const getMovies = async () => {
    const response = await  fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=d5c6853cb9b15cae18263cdbd3d993c5&language=en-US&include_adult=false&page=1`
    )
    return response.json()
  };