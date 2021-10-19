const defaultState = {
    movies: [],
  };
  
export default function movie(state = defaultState, action) {
  switch (action.type) {
    case 'SET_MORE_MOVIE': 
      return {
        movies: [...state.movies, ...action.movies]
      }
    case "SET_DEFAULT_MOVIE": 
      return {
        movies: action.movies
      }
    default:
      return state;
  }
}